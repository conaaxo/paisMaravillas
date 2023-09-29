$(document).ready(function () {
    iniciales("ed");

    $(".fijo").stick_in_parent({offset_top: 81});

    $("a[href^=#]").click(function (event) {
        event.preventDefault();
        elemento = this.hash;
        $("html, body").animate({
            'scrollTop': $(elemento).data('posicion')
        }, 600, 'swing');
    });

});

