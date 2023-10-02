$(document).ready(function () {

    iniciales("car");

    $("section").stick_in_parent({offset_top: 0});

    $("a[href^=#]").click(function (event) {

        event.preventDefault();

        elemento = this.hash;

        $("html, body").animate({

            'scrollTop': $(elemento).data('posicion')

        }, 600, 'swing');

    });

    $(".fancybox").fancybox({

        topRatio: .5,

        helpers: {

            overlay: {

                css: {

                    'background': 'rgba(0,0,0,0.7)'

                }

            }

        }

    });

})
