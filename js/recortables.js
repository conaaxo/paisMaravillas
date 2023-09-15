$(document).ready(function () {
    iniciales("web");
    $("section").stick_in_parent({offset_top: 0});
    $("a[href^=#]").click(function (event) {
        event.preventDefault();
        elemento = this.hash;
        $("html, body").animate({
            'scrollTop': $(elemento).data('posicion')
        }, 600, 'swing');
    });
    $("section ul li").mouseenter(function () {
        $(this).find('.select').fadeIn();
    });
    $("section ul li").mouseleave(function () {
        $(this).find('.select').fadeOut();
    });
})
