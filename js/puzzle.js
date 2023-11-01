var holder = [];
var piece = [];
var percent = [];
var currRow = 0;
var currCol = 0;
var placeholderCount = 0;
var h = 0;
var w = 0;
var totalGood = 0;
var level = 0;
var segundos = 0;
var bgImg = "";

$(document).ready(function () {
    h = $('.board').height();
    w = $('.board').width();
    level = $('.puzzle').data("level");
    bgImg = $('.puzzle').data("image");
    $("#facil").on('click', function () {
        level = 2;
        levelCreate(level);
    });
    $("#jugar").on('click', function () {
        level = 2;
        levelCreate(level);
    });
    $("#dificil").on('click', function () {
        level = 4;
        levelCreate(level);
    });
    $("#reiniciar").on('click', function () {
        levelCreate(level);
    });
    positions = ["-3px", "-59px", "-114px", "-170px", "-225px", "-280px", "-335px", "-391px"];
    $('#menuCirculo .selected a').css("background-position", positions[$('#menuCirculo li.selected').index()] + " -112px");
});

function levelCreate(level) {
    $('#espacioTarjetas').html('<div class="board"><div class="placeholder"></div></div>');
    holder = [];
    piece = [];
    percent = [];
    totalGood = 0;
    percent[0] = 0;
    currCol = 0;
    currRow = 0;
    proportion = 100 / level;
    increment = 100 / (level - 1);
    bgsize = 100 * level;
    placeholderCount = level * level;
    for (var i = 1; i < level; i++) {
        percent[i] = increment * i;
    }
    for (var i = 0; i < placeholderCount; i++) {
        holder[i] = $('<div class="placePiece" data-order="' + i + '"></div>');
        $(holder[i]).css('width', proportion + '%').css('height', proportion + '%').css('background-size', bgsize + '%');
        $(holder[i]).css('background-position', percent[currCol] + '% ' + percent[currRow] + '%');
        piece[i] = $('<div class="piece" data-order="' + i + '"></div>');
        $(piece[i]).css('width', $(holder[i]).width() + 'px').css('height', $(holder[i]).height() + 'px').css('background-size', bgsize + '%');
        $(piece[i]).css('background-position', percent[currCol] + '% ' + percent[currRow] + '%');

        currCol++;
        if (currCol == percent.length) {
            currRow++;
            currCol = 0;
        }
    }
    $('.placeholder').html(holder);
    currCol = 0;
    currRow = 0;
    for (var i = 0; i < placeholderCount; i++) {
        piece[i] = $('<div class="piece" data-order="' + i + '"></div>');
        $(piece[i]).css('width', $(holder[i]).width() + 2 + 'px').css('height', $(holder[i]).height() + 2 + 'px').css('background-size', bgsize + '%');
        $(piece[i]).css('left', $(holder[i]).offset().left - $('.board').offset().left + 'px').css('top', $(holder[i]).offset().top - $('.board').offset().top + 'px');
        $(piece[i]).css('background-image', 'url("' + bgImg + '")');
        $(piece[i]).css('background-position', percent[currCol] + '% ' + percent[currRow] + '%');

        currCol++;
        if (currCol == percent.length) {
            currRow++;
            currCol = 0;
        }
    }
    $('.board').append(piece);

    $(".piece").draggable({
        revert: function (event, ui) {
            if (event != false) {
                if ($(event.get(0)).data("order") != $(this).data("order"))
                    event = false;
                else {
                    totalGood++;
                    if (totalGood == placeholderCount) endActivity();
                }
            }
        }
    });
    $(".placePiece").droppable({
        drop: function (ev, ui) {
            if ($(ui.draggable).data("order") == $(this).data("order")) {
                $(ui.draggable).detach().css({top: 0, left: 0, position: 'relative'}).appendTo(this);
                $(this).css('border', 'none');
                $(ui.draggable).draggable("disable")
            }
        }
    });
    setTimeout(function () {
        unalign();
        timer.set({time: 1000, autostart: true});
    }, 1000);
}

timer = $.timer(function () {
    segundos++;
    formatoTiempo(segundos);
});

function formatoTiempo(sec) {
    time = parseInt(sec, 10);
    time = time < 0 ? 0 : time;

    minutos = Math.floor(time / 60);
    segs = time % 60;

    minutos = minutos < 10 ? "0" + minutos : minutos;
    segs = segs < 10 ? "0" + segs : segs;
    $('#numbers').html(minutos + ":" + segs);
}

function unalign() {
    $('.piece').each(function () {
        var originalOffset = $(this).position();
        $this = $(this);
        tLeft = Math.floor(Math.random() * (w - $this.width()));
        tTop = Math.floor(Math.random() * (h - $this.height()));

        $(this).css({
            "left": originalOffset.left,
            "top": originalOffset.top
        });

        $this.animate({
            "left": tLeft,
            "top": tTop
        }, 1000);
    });
}

function endActivity() {
    timer.stop();
    $('#espacioTarjetas').html('<div id="felicidades"><div class="titoFeliz"></div><div id="datosDer"><h2>¡Felicidades!</h2><p>Tu tiempo con ' + placeholderCount + ' piezas fue de</p><p id="resulTiempo">00:00</p><button id="nextlvl" class="btn" type="button">Siguiente nivel</button></div></div>');
    $('#resulTiempo').html($('#numbers').html());
    $('#felicidades').show();
    $('#nextlvl').off('click');
    $('#nextlvl').on('click', function () {
        level++;
        segundos = 0;
        $('#numbers').html('00:00');
        levelCreate(level);
    });
}
