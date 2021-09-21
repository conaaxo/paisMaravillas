var totalSecciones = 0;

var puntos = [];

var miAudio = null;



$(document).ready(function() {





	$("#principal ul li").on('mouseenter', function(){

		if($(".submenu").is(':visible'))

		$(".submenu").slideUp();

		submenu = "#menu" + $(this).data("elemento");

			if($(submenu).is(':hidden'))

			{

				$(submenu + " li").hide();

				$(submenu).show();

				$(submenu + " li").slideDown();

			}

	});

	$(".submenu").on('mouseleave', function(){

			if($(".submenu").is(':visible'))

				$(".submenu").slideUp();

	});





});





function audioPlay(src) {

    // Verificar si estamos corriendo el contenido desde un dispositivo móvil

    if(typeof device != "undefined")

    {

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

    else if(typeof Audio != "undefined")

    {

        miAudio = new Audio(src);

        miAudio.play();

    }

}



function stopMedia() {

    // Detener archivo de media



    if(typeof device != "undefined")

    {

        // Detener archivo de audio

        if (miAudio != null) {

            miAudio.stop();

        }

    }

    else if(typeof Audio != "undefined")

    {

        miAudio.pause();

    }



}