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

			if (myVideo.canPlayType('video/mp4')) {

			    console.log("Puede mp4");

			}

			else if (myVideo.canPlayType('video/ogg')) {

			    console.log("Puede ogg");

			}

			else if (myVideo.canPlayType('video/webm')) {

			    console.log("Puede webm");

			}

			// mp4 = animalvideo + ".mp4";

			// ogg = animalvideo + ".ogg";

			// webm = animalvideo + ".webm";

			// console.log(mp4);

			// $(".modalVideo").html("<video controls><source src='"+mp4+"' type='video/mp4'><source src='"+ogg+"' type='video/ogg'><source src='"+webm+"' type='video/webm'></video>")

			// $(".modalVideo").fadeIn();

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

