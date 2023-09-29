// JavaScript Document// JavaScript Document
$(document).ready(function () {
    //cambiarAlto();
    $(".modalVideo").draggable();

    $("#menuecosistemas ul li").on('mouseenter', function () {

        layerplaneta = "#layer" + $(this).data("elemento");
        console.log(layerplaneta);
        if ($(layerplaneta).is(':hidden')) {
            $(layerplaneta).show();
        }
    });
    $("#menuecosistemas ul li").on('mouseleave', function () {
        if ($(".layerplaneta").is(':visible')) ;
        $(".layerplaneta").hide();
    });

    video = $("#modalvideo video").get(0);

    $(".animales").on("click", function (event) {
        event.preventDefault();
        $(".modalNombre").html($(this).data("nombre"));
        $(".modalTexto").html($(this).data("texto"));
        $(".modalfoto img").attr("src", $(this).data("img"));
        animalaudio = $(this).data("descripcion");
        animalvideo = $(this).data("video");
        animallibro = $(this).data("libro");


        if (animalvideo == undefined)
            $("#mvideo").hide();
        else
            $("#mvideo").show();

        if (animallibro == undefined)
            $("#mlibro").hide();
        else
            $("#mlibro").show();


        $("#maudio").off("click");
        $("#maudio").on("click", function (event) {
            event.preventDefault();
            if (animalaudio != undefined) {
                if (miAudio != null) {
                    if (!miAudio.paused)
                        miAudio.pause();
                }
                audioPlay(animalaudio);

            }
        });


        $("#mlibro").off("click");
        $("#mlibro").on("click", function (event) {
            event.preventDefault();
            window.open(animallibro);
        });


        $("#mvideo").off("click");
        $("#mvideo").on("click", function (event) {
            event.preventDefault();
            mp4 = animalvideo + ".mp4";
            ogg = animalvideo + ".ogg";
            webm = animalvideo + ".webm";
            if (myVideo.canPlayType('video/mp4')) {
                videoSrc = mp4;
                videoType = "mp4"
            } else if (myVideo.canPlayType('video/ogg')) {
                videoSrc = ogg;
                videoType = "ogg"
            } else if (myVideo.canPlayType('video/webm')) {
                videoSrc = webm;
                videoType = "webm"
            }
            $(".modalVideo").html("<video controls src='" + videoSrc + "' type='video/" + videoType + "'></video>")
            $(".modalVideo video").load();
            $(".modalVideo").fadeIn();
        });

        $("#overlay, #modal").fadeIn();
    });

    $("#cerrarVideo").click(function () {
        if ($(".modalVideo video").length) {
            $(".modalVideo video").get(0).pause();
        }
    });

    $("#overlay").click(function () {
        $("#overlay, #modal").fadeOut();
        if ($(".modalVideo video").length) {
            $(".modalVideo video").get(0).pause();
        }
        $(".modalVideo").hide();
        if (!miAudio.paused)
            miAudio.pause();
    });
    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
        //do nothing
    } else {
        $('body').stellar({
            horizontalScrolling: false,
            responsive: true,
        });
        $('section').tooltip();
    }
    $(".back").click(function () {
        $("#overlay, #modal").fadeOut();
        if ($(".modalVideo video").length) {
            $(".modalVideo video").get(0).pause();
        }
        $(".modalVideo").hide();
        if (!miAudio.paused)
            miAudio.pause();
    });
    scroller("exp");
    $("a[href^=#], .menuExplora a").click(function (event) {
        event.preventDefault();
        elemento = this.hash;
        $("html, body").animate({
            'scrollTop': $(elemento).data('posicion')
        }, 600, 'swing');
    });
    calculatePositions();
    $("#modal").css("left", ($(window).width() - $("#modal").width()) / 2)
    $(window).on('resize', function () {
        calculatePositions();
        $("#modal").css("left", ($(window).width() - $("#modal").width()) / 2);
    });
});

function calculatePositions() {
    $("body > section").each(function (index) {
        if ($(this).find("h2").offset() != undefined)
            $(this).data('posicion', $(this).find("h2").offset().top - 81);
        else
            $(this).data('posicion', $(this).offset().top);
        console.log(index);
    });
}
