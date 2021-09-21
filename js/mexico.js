$(document).ready(function() {

	cambiarAlto();

	iniciales("m");

	$("a[href^=#]").click(function(event) {

		event.preventDefault();

		elemento = this.hash;

		$("html, body").animate({

			'scrollTop': $(elemento).data('posicion')

		}, 600, 'swing');

	});

	

	//$("section").stick_in_parent({});



	//$("a[href^=#]").click(function(event) {

		//event.preventDefault();

		//elemento = this.hash;

		//$("html, body").animate({

		//	'scrollTop': $(elemento).data('posicion')

		//}, 600, 'swing');

	//});



});



function cambiarAlto() {

	altoNavegador = window.innerHeight;

	altoNavegador -= 81;

	$('section').each(function(){

		if($(this).data('alto') != 'independiente')

			$(this).css({height: altoNavegador + "px"});

	//console.log(altoNavegador);

	});

}