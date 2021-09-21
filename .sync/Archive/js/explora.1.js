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

		$("#maudio").off("click");

		$("#maudio").on("click", function(event){

			event.preventDefault();

			if(animalaudio != undefined)

			{

				if(!miAudio.paused)

					miAudio.pause();

				audioPlay(animalaudio);

			}

			//$("#maudio").attr("src", $(this).data("descripcion"));

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

