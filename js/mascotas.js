// JavaScript Document// JavaScript Document
$(document).ready(function() {
   	cambiarAlto();

	ancho = (window.innerWidth > 0) ? window.innerWidth : screen.width;

	if(ancho >= 960){
	//código para Pcs
		allDesktop();
	}
	else if(ancho < 960 && ancho >= 640)
	{
		allDesktop();
		//código para tabletas aquí
	}
	else if(ancho < 640)
	{
		//código para teléfonos aquí
	}

	$(window).resize(function() {
      cambiarAlto();
    });
	/*if(window.innerWidth > 0)
		ancho = window.innerWidth;
	else
		ancho = screen.width;*/
	if(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i))
  {
      //do nothing
  }
  else
		$.stellar();
	});




function allDesktop(){
	$('#e1').waypoint(function() {

  		});

  	$('#e2').waypoint(function(direction) {
		if(direction =="down")
		{
		$("#e2img1").animate({
			left:"0px"
			}, 1000);
		$("#e2img2").animate({
			right:"100px"
			}, 2000);
		$("#e2img3").animate({
			right:"0px"
			}, 1000);
		$("#e2img4").animate({
			right:"0px"
			}, 1000);

		}
		else if(direction =="up")
		{
		$("#e2img1").animate({
			left:"-300px"
			}, 1000);
		$("#e2img2").animate({
			right:"-500px"
			}, 1000);
		$("#e2img3").animate({
			right:"-600px"
			}, 1000);
		$("#e2img4").animate({
			right:"-300px"
			}, 1000);
		}
		/*upDown($("#e2img2"), 3);*/
 		 }, {offset: 81});

  	$('#e3').waypoint(function(direction) {

		 if(direction =="down")
			{
			$("#arbusto2").animate({
				bottom:"-500px"
				}, 1000);
			$("#e3a1").animate({
				left:"5px"
				}, 2000);
			$("#e3a2").animate({
				top:"760px",
				right:"-65"
				}, 1000);
			$("#e3a3").animate({
				top:"1200px",
				left:"5"
				}, 1000);

			}
			else if(direction =="up")
			{
			$("#arbusto2").animate({
				bottom:"700px"
				}, 1000);
			$("#e3a1").animate({
				left:"-282px"
				}, 1000);
			$("#e3a2").animate({
				top:"320px",
				right:"-65"
				}, 1000);
			$("#e3a3").animate({
				top:"350px",
				left:"-10px"
				}, 1000);
			}
 		 }, {offset: 81});
}

/*function cambiarAlto(){
	altoNavegador=window.innerHeight;
	altoNavegador -= 81;
	$('section').each(function() {
       if($(this).data('alto') !='independiente')
	   $(this).css({height: altoNavegador + "px"});
    });

	//console.log(altoNavegador);
}*/

function upDown(elemento, segundos){
	tTotal = segundos * 1000;
	tAnimacion = tTotal/2;
	elemento.animate({
			top: "+=50px"
		}, tAnimacion, function(){
			$(this).animate({
				top: "-=50px"
			}, tAnimacion);
		});
	setInterval(function(){
		elemento.animate({
			top: "+=50px"
		}, tAnimacion, function(){
			$(this).animate({
				top: "-=50px"
			}, tAnimacion);
		});
	},tTotal);
}

