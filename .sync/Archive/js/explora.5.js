// JavaScript Document// JavaScript Document

$(document).ready(function() {

   	//cambiarAlto();



	window.addEventListener("resize", function(){

		$("#modal").css("left", ($(window).width() - $("#modal").width())/2)

	});



	video = $("#modalvideo video").get(0);





	$(".animales").on("click", function(event){

		event.preventDefault();

		$(".modalNombre").html($(this).data("nombre"));

		$(".modalTexto").html($(this).data("texto"));

		$(".modalfoto img").attr("src", $(this).data("img"));

		animalaudio = $(this).data("descripcion");

		animalvideo = $(this).data("video");

		$("#maudio").off("click");

		$("#maudio").on("click", function(event){

			event.preventDefault();

			if(animalaudio != undefined)

			{

				if(miAudio != null)

				{

					if(!miAudio.paused)

						miAudio.pause();

				}

				audioPlay(animalaudio);

			}

			//$("#maudio").attr("src", $(this).data("descripcion"));

		});

		$("#mvideo").off("click");

		$("#mvideo").on("click", function(event){

			event.preventDefault();

			mp4 = animalvideo + ".mp4";

			ogg = animalvideo + ".ogg";

			webm = animalvideo + ".webm";

			if (myVideo.canPlayType('video/mp4')) {

			    videoSrc = mp4;

			    videoType = "mp4"

			}

			else if (myVideo.canPlayType('video/ogg')) {

			    videoSrc = ogg;

			    videoType = "ogg"

			}

			else if (myVideo.canPlayType('video/webm')) {

			    videoSrc = webm;

			    videoType = "webm"

			}

			$(".modalVideo").html("<video controls src='"+videoSrc+"' type='video/"+videoType+"'></video>")

			$(".modalVideo video").load();

			$(".modalVideo").fadeIn();

		});





		$("#overlay, #modal").fadeIn();

	});





	$("#overlay").click(function(){

		$("#overlay, #modal").fadeOut();

		if(!miAudio.paused)

			miAudio.pause();

	});





	$(window).tooltip();





/*function cambiarAlto(){

	altoNavegador=window.innerHeight;

	altoNavegador -= 81;

	$('section').each(function() {

       if($(this).data('alto') !='independiente')

	   $(this).css({height: altoNavegador + "px"});

    });



}*/

});

