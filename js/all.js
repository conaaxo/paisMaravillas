var totalSecciones = 0;
var puntos = [];
var miAudio = null;
var myVideo = document.createElement('video');

$(".locucion").on("click", function (event) {
    event.preventDefault();
    audioSrc = $(this).data("descripcion");
    if (audioSrc != undefined) {
        if (miAudio != null) {
            if (miAudio.src.indexOf(audioSrc) != -1) {
                if (!miAudio.paused)
                    stopMedia();
                else
                    miAudio.play();
                return;
            }
            if (!miAudio.paused)
                miAudio.pause();
        }
        audioPlay(audioSrc);
    }
});
if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {//do nothing
} else {
    $.stellar();
    if ($("#puntos").length)
        $('#puntos').tooltip();
    if ($("#tito").length)
        $('#tito').tooltip({track: true});
    if ($(".banderas").length)
        $('.banderas').tooltip({
            position: {
                my: "center",
                at: "right-200",
                track: false,
                using: function (position, feedback) {
                    $(this).css(position);
                }
            }
        });
    console.log("Ejecuta tooltip");
}


$(document).ready(function () {

    if ($('.toside').length)
        toSide();
    if ($('footer').length) {
        if (!$('#noresfoot').length) {
            footerBottom();
            $(window).scroll(footerBottom).resize(footerBottom);
        }
    }
    waymaestros();
    $("#principal ul li").on('mouseenter', function () {
        if ($(".submenu").is(':visible'))
            $(".submenu").slideUp();
        submenu = "#menu" + $(this).data("elemento");
        if ($(submenu).is(':hidden')) {
            $(submenu + " li").hide();
            $(submenu).show();
            $(submenu + " li").slideDown();
            $("#principal ul li").removeClass("activo");
        }
    });

    $(".submenu").on('mouseleave', function () {
        if ($(".submenu").is(':visible')) {
            $(".submenu").slideUp();
            $("#principal ul li").removeClass("activo");
        }

    });

    $(".submenu").on('mouseenter', function () {
        data = $(this).attr("id").slice(4);
        principal = $("#principal ul li[data-elemento='" + data + "']");
        principal.addClass("activo");
    });


    $(".locucion").on("click", function (event) {
        event.preventDefault();
        audioSrc = $(this).data("descripcion");
        if (audioSrc != undefined) {
            if (miAudio != null) {
                if (miAudio.src.indexOf(audioSrc) != -1) {
                    if (!miAudio.paused)
                        stopMedia();
                    else
                        miAudio.play();
                    return;
                }
                if (!miAudio.paused)
                    miAudio.pause();
            }
            audioPlay(audioSrc);
        }
    });
    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {//do nothing
    } else {
        $.stellar();
        if ($("#puntos").length)
            $('#puntos').tooltip();
        if ($("#tito").length)
            $('#tito').tooltip({track: true});
        if ($(".banderas").length)
            $('.banderas').tooltip({
                position: {
                    my: "center",
                    at: "right-200",
                    track: false,
                    using: function (position, feedback) {
                        $(this).css(position);
                    }
                }
            });
        console.log("Ejecuta tooltip");
    }
});

function footerBottom() {
    altoTotal = $(window).height();
    altoFooter = $('footer').height();
    topFooter = $('footer').position().top + altoFooter;

    if (topFooter < altoTotal) {
        $('footer').css('margin-top', (altoTotal - topFooter) + 'px');
    }
}

function audioPlay(src) {
    // Verificar si estamos corriendo el contenido desde un dispositivo móvil
    if (typeof device != "undefined") {
        // Borrar archivo de audio viejo
        if (miAudio != null) {
            miAudio.release();
        }
        // Si la plataforma es android, hacer la carga desde los assets
        if (device.platform == 'Android') {
            src = '/android_asset/www/' + src;
        }
        // Crear nuevo archivo de media (con plugin de phonegap)
        miAudio = new Media(src, stopMedia, null);
        // Reproducir audio
        miAudio.play();
    }
    // Utilizar el componente Audio de HTML para web
    else if (typeof Audio != "undefined") {
        miAudio = new Audio(src);
        miAudio.play();
    }
}

function stopMedia() {
    // Detener archivo de media

    if (typeof device != "undefined") {
        // Detener archivo de audio
        if (miAudio != null) {
            miAudio.stop();
        }
    } else if (typeof Audio != "undefined") {
        miAudio.pause();
    }

}

function iniciales(identificador) {
    $.each($("body > section"), function (indice, elemento) {
        $(elemento).attr("id", identificador + (indice + 1));
    });
    totalSecciones = $("body > section").length;
    for (i = 1; i <= totalSecciones; i++) {
        $("#" + identificador + i).attr("data-posicion", $("#" + identificador + i).offset().top - 81);
        tooltip = $("#" + identificador + i).find("h2").text();
        if (tooltip == undefined) tooltip = "Otra sección";
        puntos[i - 1] = $('<li><a href="#' + identificador + i + '" title="' + tooltip + '"><i class="fa fa-dot-circle-o"></i></a></li>');
    }
    $("nav#puntos > ul").append(puntos);
    proflink = $("#maestrolink").data("link");
}

function scroller(identificador) {
    totalSecciones = $("body > section").length;
    seccion = $.makeArray($("body > section"));
    for (i = 1; i <= totalSecciones; i++) {
        if ($(seccion[i - 1]).find("h2").offset() != undefined)
            $(seccion[i - 1]).attr("data-posicion", $(seccion[i - 1]).find("h2").offset().top - 100);
        else
            $(seccion[i - 1]).attr("data-posicion", $(seccion[i - 1]).offset().top);
        tooltip = $(seccion[i - 1]).find("h2").text();
        if (tooltip == undefined) tooltip = "Otra sección";
        puntos[i - 1] = $('<li><a href="#' + $(seccion[i - 1]).attr('id') + '" title="' + tooltip + '"><i class="fa fa-dot-circle-o"></i></a></li>');
    }
    $("nav#puntos > ul").html(puntos);
    proflink = $("#maestrolink").data("link");
}

function waymaestros() {
    $('section').each(function () {
        if ($(this).attr("data-maestros")) {
            $(this).waypoint(function (direction) {
                if (direction === 'down') {
                    $('#maestro a').attr('href', $(this).data('maestros'));
                    $('#maestro').show();
                }
            });
            $(this).waypoint(function (direction) {
                    if (direction === 'up') {
                        $('#maestro a').attr('href', $(this).data('maestros'));
                        $('#maestro').show();
                    }
                },
                {
                    offset: function () {
                        return $.waypoints('viewportHeight') / 2 - $(this).outerHeight();
                    }
                });
        } else {
            $(this).waypoint(function (direction) {
                if (direction === 'down') {
                    $('#maestro').hide();
                }
            });
            $(this).waypoint(function (direction) {
                    if (direction === 'up') {
                        $('#maestro').hide();
                    }
                },
                {
                    offset: function () {
                        return $.waypoints('viewportHeight') / 2 - $(this).outerHeight();
                    }
                });
        }
        if ($(this).attr("data-extra")) {
            $(this).waypoint(function (direction) {
                    if (direction === 'down') {
                        $(this).find(".barraExtra").show("slide", {direction: "right"}, 1000);
                    }
                },
                {
                    offset: function () {
                        return $.waypoints('viewportHeight') / 1 - $(this).outerHeight();
                    }
                });
            $(this).waypoint(function (direction) {
                    if (direction === 'up') {
                        $(this).find(".barraExtra").show("slide", {direction: "right"}, 1000);
                    }
                },
                {
                    offset: function () {
                        return $.waypoints('viewportHeight') / 2 - $(this).outerHeight();
                    }
                });
        } else {
            $(this).waypoint(function (direction) {
                    if (direction === 'down') {
                        $(".barraExtra").hide("slide", {direction: "right"}, 1000);
                    }
                },
                {
                    offset: "20%"
                });
            $(this).waypoint(function (direction) {
                if (direction === 'up') {
                    $(".barraExtra").hide("slide", {direction: "right"}, 1000);
                }
            });
        }
    });
}

function waysingle() {
    $('section').each(function () {
        if ($(this).attr("data-maestros")) {
            $('#maestro a').attr('href', $(this).data('maestros'));
            $('#maestro').show();
        } else {
            $('#maestro').hide();
        }
        if ($(this).attr("data-extra")) {
            $(this).find(".barraExtra").show("slide", {direction: "right"}, 1000);
        } else {
            $(".barraExtra").hide("slide", {direction: "right"}, 1000);
        }
    });
}

function toSide() {
    toside = $('.toside').html();
    $('header').append(toside);
    $('.toside').remove();
    console.log("Ejecuta toside");
    if ($(".banderas1").length)
        $('.banderas1').tooltip({
            position: {
                my: "center",
                at: "right-200",
                track: false,
                using: function (position, feedback) {
                    $(this).css(position);
                }
            }
        });
}

function cambiarAlto() {
}

function noResfooter() {
    $('footer').css('margin-top', 0);
}

function mezclar(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) ;
    return o;
};

