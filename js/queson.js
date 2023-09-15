$(document).ready(function () {
    /*cambiarAlto();*/
    iniciales("e");
    $("section").stick_in_parent({offset_top: 0});

    $("a[href^=#]").click(function (event) {
        event.preventDefault();
        elemento = this.hash;
        $("html, body").animate({
            'scrollTop': $(elemento).data('posicion')
        }, 600, 'swing');
    });


})


/*function cambiarAlto() {
	altoNavegador = window.innerHeight;
	altoNavegador = 100;
	$('section').each(function(){
		if($(this).data('alto') != 'independiente')
			$(this).css({height: altoNavegador + "px"});
	//console.log(altoNavegador);
	});

}*/





