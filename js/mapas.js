var hidden = true;

$(document).ready(function () {
    $('#upside, #downside').click(function () {
        if (hidden) {
            hidden = false;
            $('.listaEcosistemas').animate({
                top: '17px'
            });
        } else {
            hidden = true;
            $('.listaEcosistemas').animate({
                top: '-257px'
            });
        }
    });
    $('.icoSelvah').parent().click(function () {
        $('.oculto').fadeOut();
        $('#mapaSelvaHumeda, #download a').fadeIn();
        $('#download a').attr('href', 'assets/pdf/mapas/mapaselva1.pdf');
        $('#download h2').fadeOut(500, function () {
            $('#download h2').html("Selva h�meda");
            $('#download h2').fadeIn();
        });
    });
    $('.icoBosquet').parent().click(function () {
        $('.oculto').fadeOut();
        $('#mapaBosqueTemplado, #download a').fadeIn();
        $('#download a').attr('href', 'assets/pdf/mapas/mapabosque.pdf');
        $('#download h2').fadeOut(500, function () {
            $('#download h2').html("Bosque templado");
            $('#download h2').fadeIn();
        });
    });
    $('.icoPastizal').parent().click(function () {
        $('.oculto').fadeOut();
        $('#mapaPastizal, #download a').fadeIn();
        $('#download a').attr('href', 'assets/pdf/mapas/mapapastizal.pdf');
        $('#download h2').fadeOut(500, function () {
            $('#download h2').html("Pastizal");
            $('#download h2').fadeIn();
        });
    });
    $('.icoMatorral').parent().click(function () {
        $('.oculto').fadeOut();
        $('#mapaMatorral, #download a').fadeIn();
        $('#download a').attr('href', 'assets/pdf/mapas/mapamatorral.pdf');
        $('#download h2').fadeOut(500, function () {
            $('#download h2').html("Matorral");
            $('#download h2').fadeIn();
        });
    });
    $('.icoGolfo').parent().click(function () {
        $('.oculto').fadeOut();
        $('#mapaGolfo, #download a').fadeIn();
        $('#download a').attr('href', 'assets/pdf/mapas/mapagolfo.pdf');
        $('#download h2').fadeOut(500, function () {
            $('#download h2').html("Golfo y Caribe");
            $('#download h2').fadeIn();
        });
    });
    $('.icoPacifico').parent().click(function () {
        $('.oculto').fadeOut();
        $('#mapaPacifico, #download a').fadeIn();
        $('#download a').attr('href', 'assets/pdf/mapas/mapapacifico.pdf');
        $('#download h2').fadeOut(500, function () {
            $('#download h2').html("Pac�fico");
            $('#download h2').fadeIn();
        });
    });
    $('.icoCiudad').parent().click(function () {
        $('.oculto').fadeOut();
        $('#mapaCiudades, #download a').fadeIn();
        $('#download a').attr('href', 'assets/pdf/mapas/mapaciudades.pdf');
        $('#download h2').fadeOut(500, function () {
            $('#download h2').html("Ciudades");
            $('#download h2').fadeIn();
        });
    });
    $('.icoCampo').parent().click(function () {
        $('.oculto').fadeOut();
        $('#mapaCampo, #download a').fadeIn();
        $('#download a').attr('href', 'assets/pdf/mapas/mapacampo.pdf');
        $('#download h2').fadeOut(500, function () {
            $('#download h2').html("Campo");
            $('#download h2').fadeIn();
        });
    });
    $('.icoEstados').parent().click(function () {
        $('.oculto').fadeOut();
        $('#mapaEstados, #download a').fadeIn();
        $('#download a').attr('href', 'assets/pdf/mapas/mapaestados.pdf');
        $('#download h2').fadeOut(500, function () {
            $('#download h2').html("Estados");
            $('#download h2').fadeIn();
        });
        $('img[usemap]').rwdImageMaps();
    });
    $('.icoTodos').parent().click(function () {
        $('.oculto').fadeIn();
        $('#download a').fadeIn();
        $('#download a').attr('href', 'assets/pdf/mapas/mapademexico.pdf');
        $('#download h2').fadeOut(500, function () {
            $('#download h2').html("Todos los ecosistemas");
            $('#download h2').fadeIn();
        });
    });
    url = window.location.href;
    goTo = "";
    if (url.indexOf("#") > -1) {
        goTo = url.slice(url.indexOf("#") + 1)
        switch (goTo) {
            case 'selva':
                $('.icoSelvah').parent().click();
                break;
            case 'bosque':
                $('.icoBosquet').parent().click();
                break;
            case 'pastizal':
                $('.icoPasrizal').parent().click();
                break;
            case 'matorral':
                $('.icoMatorral').parent().click();
                break;
            case 'golfo':
                $('.icoGolfo').parent().click();
                break;
            case 'pacifico':
                $('.icoPacifico').parent().click();
                break;
            case 'ciudad':
                $('.icoCiudad').parent().click();
                break;
            case 'campo':
                $('.icoCampo').parent().click();
                break;
            case 'default':
                break;
        }
    }
    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
        $('area').on('click', function (event) {
            event.preventDefault();
            $("#overMap").attr('src', 'assets/img/conoce/mapas/' + $(this).attr('alt') + '.png');
        });
    } else {
        $('area').on('mouseenter', function (event) {
            event.preventDefault();
            $("#overMap").attr('src', 'assets/img/conoce/mapas/' + $(this).attr('alt') + '.png')
            $("#overMap").fadeIn();
        });
        $('area').on('mouseleave', function (event) {
            event.preventDefault();
        });
        $("area").tooltip({track: true});
    }
    noResfooter();
    resizemap();
    $(window).on('resize', function () {
        resizemap();
    });
});

function resizemap() {
    $("#mapaFondo").height($(window).height() - $('footer').height());
    $("#mapaFondo").width($(window).width());
    $(".mapa").height($("#mapaFondo img").height());
    $(".mapa").width($("#mapaFondo img").width());
    $("#mapaEstados img").width($("#mapaFondo img").width()).height($("#mapaFondo img").height());
    if ($(window).height() >= $("#mapaFondo img").width()) {
        $("#mapaFondo").width($(window).width() * 2);
        $(".mapa").height($("#mapaFondo img").height());
        $(".mapa").width($("#mapaFondo img").width());
        $("#mapaEstados img").width($("#mapaFondo img").width()).height($("#mapaFondo img").height());
    }
}
