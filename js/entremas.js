$(document).ready(function() {

	cambiarAlto();

	iniciales("e");



	$("section").stick_in_parent({offset_top: 0})

	.on("sticky_kit:stick", function(e) {

	    $(".scrollable").each(function(){

	    	$(this).removeClass('showSect').addClass('hideSect');

	    });

	    $(e.target).removeClass('hideSect').addClass('showSect');

	})

	.on("sticky_kit:unstick", function(e) {

		$(e.target).removeClass('showSect').addClass('hideSect');

	    $(e.target).prev().prev().removeClass('hideSect').addClass('showSect');

	});

	$("a[href^=#]").click(function(event) {

		event.preventDefault();

		elemento = this.hash;

		$("html, body").animate({

			'scrollTop': $(elemento).data('posicion') + 90

		}, 600, 'swing');

	});

	$(window).on('resize', function(){

		cambiarAlto();

  });

});





function cambiarAlto() {

	altoNavegador = window.innerHeight;

	altoNavegador -= 81;

	$('section').each(function(){

		if($(this).data('alto') != 'independiente')

			$(this).css({height: altoNavegador + "px"});

	//console.log(altoNavegador);

	});

	$("#seccion0").css({height: altoNavegador + "px"});

}





