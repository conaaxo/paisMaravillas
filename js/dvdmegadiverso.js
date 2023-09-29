$(document).ready(function () {

    iniciales("tsh");

    playera = [

        "url('assets/img/materiales/dvd/cd.png')",

        "url('assets/img/materiales/dvd/dvd.png')",

        "url('assets/img/materiales/dvd/booklet.png')",

        "url('assets/img/materiales/playeras/playera_selva.png')",

        /*              "url('assets/img/materiales/playeras/playera_bosque.png')",

                      "url('assets/img/materiales/playeras/playera_matorrales.png')",

                      "url('assets/img/materiales/playeras/playera_pastizal.png')",

                      "url('assets/img/materiales/playeras/playera_mexico.png')",

                      "url('assets/img/materiales/playeras/playera_campo.png')",

                      "url('assets/img/materiales/playeras/playera_ciudad.png')"*/

    ]

    $("section").stick_in_parent({offset_top: 0});

    $("#colores ul li").each(function () {

        $(this).mouseenter(function () {

            full = $(this).attr('id');

            id = full.split("_").pop();

            $("#playeraschange").css("background-image", playera[id - 1]);

        });

    });

    noResfooter();

})
