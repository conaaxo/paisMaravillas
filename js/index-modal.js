// JavaScript Document
var origTito = {};
var origMex = {};
var desp = 10;
var totImg = 26;
var images = [];
var cnt = 1;
var playingB = true;

$(document).ready(function () {
    if (navigator.userAgent.match(/Android/i)) {
        if ($(window).width() > 600)
            $(".downloadAndroid").show();
    } else {
        if (navigator.platform.toUpperCase().indexOf('WIN') >= 0)
            $(".downloadPC").show();
    }
    $("#overlay, #modalhome").fadeIn();
    audioPlay("assets/audio/secciones/pagina_instrumental.mp3");
    /*audioPlay("assets/audio/locucion/tito_acompanameaexplorar.mp3");*/

    for (i = 0; i < totImg; i++) {
        if (i < 9)
            images[i] = "assets/img/home/0" + (i + 1) + ".jpg";
        else
            images[i] = "assets/img/home/" + (i + 1) + ".jpg";
    }
    images = mezclar(images);
    $("#fondohome").css("background-image", "url(" + images[0] + ")");
    var bgrotater = setInterval(function () {
        if (cnt == 25) cnt = 0;
        cnt++;
        $('#fondohome').animate({opacity: 0}, 1000, function () {
            $("#fondohome").css("background-image", "url(" + images[cnt] + ")");
        }).animate({opacity: 1}, 1000);

    }, 6000);
    origTito = {
        'top': parseInt($('#tito').css('top')),
        'left': parseInt($('#tito').css('left'))
    };
    origMex = {
        'top': parseInt($('#logotipo').css('top')),
        'left': parseInt($('#logotipo').css('left'))
    };
    /*console.log(origMex);
    $("#tito").click(function(){
        $("#overlay, #modalhome").fadeIn();
    });*/

    $("#overlay").click(function () {
        $("#overlay, #modalhome").fadeOut();
    });

    $(".back").click(function () {
        $("#overlay, #modalhome").fadeOut();
    });

    $('section').mousemove(function (event) {
        var offset = $(this).offset();
        var xPos = event.pageX - offset.left;
        var yPos = event.pageY - offset.top;
        var mouseXPercent = Math.round(xPos / $(this).width() * 100);
        var mouseYPercent = Math.round(yPos / $(this).height() * 100);
        mover($("#logotipo"), origMex, mouseXPercent, mouseYPercent);
        mover($("#tito"), origTito, mouseXPercent, mouseYPercent);
    });
    $('.locucion').css('background-position', '-45px 0px');
    $('.locucion').on('click', function () {
        if (playingB) {
            $('.locucion').css('background-position', '4px 0px');
            playingB = false;
        } else {
            $('.locucion').css('background-position', '-45px 0px');
            playingB = true;
        }
    })
    document.addEventListener("deviceready", onDeviceReady, false);
});

function mover(elemento, original, perX, perY) {
    if (perX > 50) {
        var myX = original.left - desp * (perX / 100);
    } else {
        var myX = original.left + desp * (perX / 100);
    }
    if (perY > 50) {
        var myY = original.top - desp * (perX / 100);
    } else {
        var myY = original.top + desp * (perX / 100);
    }
    // var myY = (perY / 100);
    var trans = {
        'left': myX + 'px',
        'top': myY + 'px'
    }
    elemento.animate(trans, {duration: 50, queue: false, easing: 'linear'});
}
