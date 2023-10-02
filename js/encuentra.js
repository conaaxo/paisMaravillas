ecosistemas = ["ciudad",
    "selva",
    "golfo",
    "matorral",
    "campo",
    "pastizal",
    "pacifico",
    "bosque"
];
ecodrop = [];
drags = [];
mensajeBien = ["¡Primer Nivel<br/>Superado!", "¡Segundo Nivel<br/>Superado!", "¡Fin del Juego<br/>Has Ganado!"];
mensajeMal = ["Vuelve a intentarlo", "Vuelve a intentarlo", "Vuelve a intentarlo"];
especies = [
    ["aguilapescadora", "golfo"],
    ["ballenajorobada", "pacifico"],
    ["barracuda", "golfo"],
    ["bisonte", "pastizal"],
    ["boa", "selva"],
    ["cactoviejito", "matorral"],
    ["cirio", "matorral"],
    ["cochino", "campo"],
    ["cocodrilo", "selva"],
    ["condor", "bosque"],
    ["cucaracha", "ciudad"],
    ["encino", "bosque"],
    ["erizo", "pacifico"],
    ["flamenco", "golfo"],
    ["fragata", "golfo"],
    ["gallo", "campo"],
    ["humano", "ciudad"],
    ["jaguar", "selva"],
    ["mariposamorfo", "selva"],
    ["medusa", "pacifico"],
    ["monarca", "bosque"],
    ["patadeelefante", "matorral"],
    ["perritollanero", "pastizal"],
    ["pino", "bosque"],
    ["platanillo", "selva"],
    ["rana", "selva"],
    ["rata", "ciudad"],
    ["teporingo", "bosque"],
    ["tortugacaguama", "pacifico"],
    ["zorrita", "matorral"]
];
especiedrag1 = [];
especiedrag2 = [];
join1 = [];
join2 = [];
join3 = [];
join4 = [];
pass1 = 0;
pass2 = 0;
pass3 = 0;
pass4 = 0;
totalPoints = 0;
segundos = 0;
nivel = 0;
limit = [120, 60, 60];
levelflag = ["primernivel.png", "segundonivel.png", "tercernivel.png"];
$(document).ready(function () {
    $("#btnEmpezar").click(function () {
        $("#titlecard").fadeOut();
        especies = mezclar(especies);
        for (var i = (especies.length / 2) - 1; i >= 0; i--) {
            especiedrag1[i] = especies[i];
            especiedrag2[i] = especies[(especies.length - 1) - i];
        }
        startLevel(1);
        timer.set({time: 1000, autostart: true});
    });
});
timer = $.timer(function () {
    segundos++;
    formatoTiempo(segundos);
    if (segundos >= limit[nivel - 1]) {
        endLevel(false);
    }
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

function startLevel(lvl) {
    join1 = [];
    join2 = [];
    join3 = [];
    join4 = [];
    pass1 = 0;
    pass2 = 0;
    pass3 = 0;
    pass4 = 0;
    totalPoints = 0;
    segundos = 0;
    nivel = lvl;
    $("#messageCard").fadeOut();
    $("#points").html(totalPoints);
    $("#numbers").html("00:00");
    bg = "url(assets/img/conoce/encuentrasucasa/desktop/ui/" + levelflag[nivel - 1] + ")";
    console.log(bg);
    $("#nivel").css("background-image", bg);
    timer.reset();
    ecosistemas = mezclar(ecosistemas);
    $.each(ecosistemas, function (index, eco) {
        ecodrop[index] = $('<div class ="ecosistemaSquare" id="' + eco + '" data-eco="' + eco + '"></div>').css("background-image", "url(assets/img/conoce/encuentrasucasa/desktop/ecosistemas/" + eco + ".jpg)");
    });
    $("#ecosistemasDrop").html(ecodrop);
    $("#titoact").css('background-image', 'url("assets/img/conoce/encuentrasucasa/desktop/ui/titonivel_' + nivel + '.png")');
    $("#certificadonumero").parent().attr('href', "assets/pdf/certificado_" + nivel + ".pdf");
    if (lvl == 1) {
        drags = especiedrag1;
    } else if (lvl == 2) {
        drags = especiedrag2;
    } else if (lvl == 3) {
        drags = mezclar(especies);
    }
    if (lvl < 3) {
        for (i = 0; i < 4; i++) {
            join1[i] = $("<div class='draggable' data-goto='" + drags[i][1] + "'></div>").css("background-image", "url(assets/img/conoce/encuentrasucasa/desktop/arrastrar/" + drags[i][0] + ".jpg)");
            join2[i] = $("<div class='draggable' data-goto='" + drags[i + 4][1] + "'></div>").css("background-image", "url(assets/img/conoce/encuentrasucasa/desktop/arrastrar/" + drags[i + 4][0] + ".jpg)");
            join3[i] = $("<div class='draggable' data-goto='" + drags[i + 8][1] + "'></div>").css("background-image", "url(assets/img/conoce/encuentrasucasa/desktop/arrastrar/" + drags[i + 8][0] + ".jpg)");
            if (drags[i + 12] != undefined)
                join4[i] = $("<div class='draggable' data-goto='" + drags[i + 12][1] + "'></div>").css("background-image", "url(assets/img/conoce/encuentrasucasa/desktop/arrastrar/" + drags[i + 12][0] + ".jpg)");
        }
    } else {
        for (i = 0; i < 8; i++) {
            join1[i] = $("<div class='draggable' data-goto='" + drags[i][1] + "'></div>").css("background-image", "url(assets/img/conoce/encuentrasucasa/desktop/arrastrar/" + drags[i][0] + ".jpg)");
            join2[i] = $("<div class='draggable' data-goto='" + drags[i + 8][1] + "'></div>").css("background-image", "url(assets/img/conoce/encuentrasucasa/desktop/arrastrar/" + drags[i + 8][0] + ".jpg)");
            join3[i] = $("<div class='draggable' data-goto='" + drags[i + 16][1] + "'></div>").css("background-image", "url(assets/img/conoce/encuentrasucasa/desktop/arrastrar/" + drags[i + 16][0] + ".jpg)");
            if (drags[i + 24] != undefined)
                join4[i] = $("<div class='draggable' data-goto='" + drags[i + 24][1] + "'></div>").css("background-image", "url(assets/img/conoce/encuentrasucasa/desktop/arrastrar/" + drags[i + 24][0] + ".jpg)");
        }
    }
    $(".placeEsp1").html(join1);
    $(".placeEsp2").html(join2);
    $(".placeEsp3").html(join3);
    $(".placeEsp4").html(join4);
    $(".draggable").draggable({
        revert: function (event, ui) {
            $(this).data("uiDraggable").originalPosition = {
                top: 0,
                left: 0
            };
            if (event != false) {
                if ($(event.get(0)).data("eco") != $(this).data("goto"))
                    event = false;
                else {
                    $(this).fadeOut();
                    switch ($(this).parent().attr("class").slice(-1)) {
                        case "1":
                            pass1++;
                            if (join1[pass1] != undefined)
                                join1[pass1].fadeIn();
                            break;
                        case "2":
                            pass2++;
                            if (join2[pass2] != undefined)
                                join2[pass2].fadeIn();
                            break;
                        case "3":
                            pass3++;
                            if (join3[pass3] != undefined)
                                join3[pass3].fadeIn();
                            break;
                        case "4":
                            pass4++;
                            if (join4[pass4] != undefined)
                                join4[pass4].fadeIn();
                            break;
                    }
                    totalPoints++;
                    $("#points").html(totalPoints);
                    if (lvl < 3 && totalPoints == 15) {
                        endLevel(true)
                    } else if (lvl == 3 && totalPoints == 30) {
                        endLevel(true)
                    }
                }
            }
            return !event;
        }
    });
    for (i = 1; i < join1.length; i++) {
        join1[i].hide();
        join2[i].hide();
        join3[i].hide();
        if (join4[i] != undefined)
            join4[i].hide();
    }
    $(".ecosistemaSquare").droppable();
}

function endLevel(bien) {
    timer.stop();
    if (bien) {
        $("#next").css('background-image', 'url("assets/img/conoce/encuentrasucasa/desktop/ui/siguientenivel.png")');
        if (nivel < 3) {
            $("#certificadonumero").show();
            $("#mensaje").html(mensajeBien[nivel - 1]);
            nivel++;
        } else {
            $("#certificadonumero").show();
            $("#mensaje").html(mensajeBien[nivel - 1]);
            $("#next").off('click');
            $("#next").hide();
            nivel++;
        }

    } else {
        $("#next").css('background-image', 'url("assets/img/conoce/encuentrasucasa/desktop/ui/retry.png")');
        $("#certificadonumero").hide();
        $(".placeEsp1").html("");
        $(".placeEsp2").html("");
        $(".placeEsp3").html("");
        $(".placeEsp4").html("");
        $("#mensaje").html(mensajeMal[nivel - 1]);
    }
    $("#endLevel, #next").fadeIn();
    $("#next").off('click');
    $("#next").on('click', function () {
        $("#endLevel, #next").fadeOut();
        startLevel(nivel);
    });
    if (nivel > 3) {
        $("#next").off('click');
        $("#next").hide();
    }
}
