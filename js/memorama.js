var data = [];

var tarjetas = [];

var valores = [];

var ids = [];

var intentos = 0;

var pares = 9;

var sumPares = 0;

var ecosistema = "";

var segundos = 0;

var imagesPre = [];



$(document).ready(function() {

  iniciarMemorama();

  positions = ["-3px", "-59px", "-114px", "-170px", "-225px", "-280px", "-335px", "-391px"];

  $('#menuCirculo .selected a').css("background-position", positions[$('#menuCirculo li.selected').index()] +" -112px");

});



function iniciarMemorama() {

  ecosistema = $('#ecosistema').data('name');

  timer.set({ time : 1000, autostart : true });

  for(i=0; i<pares; i++)

  {

    imagesPre[i] = new Image();

    imagesPre[i].src='assets/img/actividades/memoramas/'+ ecosistema +'/' + (i+1) + '.jpg';

  }

  for(i=0; i<pares; i++)

  {

    data[(2*i)]= (i+1);

    data[(2*i)+1]= (i+1);

  }

  data = mezclar(data);

  for (var i = data.length - 1; i >= 0; i--) {

    tarjetas[i] = $('<div class="tarjeton" data-order="' + data[i] + '"></div>');

  }

  $.each(tarjetas, function(index, element){

    $(element).on('click', function(event){

      event.preventDefault();

      voltear($(element));

    });

  });

  //style="background-image: url(assets/img/actividades/memoramas/card' + data[i] + '.jpg);"

  $("#espacioTarjetas").append(tarjetas);

}

function voltear(elemento){

  if(elemento.html() == "" && valores.length < 2)

  {

    elemento.html(" ");

    //rotar(elemento, 180);

    elemento.css('background-image', 'url(assets/img/actividades/memoramas/'+ ecosistema +'/' + elemento.data('order') + '.jpg)');

    if(valores.length == 0)

    {

      valores.push(elemento);

    }

    else if(valores.length == 1)

    {

      valores.push(elemento);

      if(valores[0].data("order") == valores[1].data("order"))

      {

        sumPares++;

        valores[0].animate({opacity: .33}, 1000);

        valores[1].animate({opacity: .33}, 1000);

        if(sumPares == pares)

          finishActivity();

      }

      else

      {

        $.each(valores, function(index, el){

          el.html("");

          $("#lid").show();

          setTimeout(function() {

            el.css("background-image", 'url(assets/img/actividades/memoramas/vuelta.jpg)');

            $("#lid").hide();

          }, 1000);

        });

      }

      valores = [];

    }

  }

}

timer = $.timer(function() {

    segundos++;

    formatoTiempo(segundos);

});

function rotar(elem, grados) {

  elem.animate({

    '-webkit-transform': 'rotate(' + grados + 'deg)',

    '-moz-transform': 'rotate(' + grados + 'deg)',

    '-ms-transform': 'rotate(' + grados + 'deg)',

    '-o-transform': 'rotate(' + grados + 'deg)',

    'transform': 'rotate(' + grados + 'deg)',

    'zoom': 1

  }, 500);

}



function formatoTiempo(sec) {

  time = parseInt(sec,10);

  time = time < 0 ? 0 : time;



  minutos = Math.floor(time / 60);

  segs = time % 60;



  minutos = minutos < 10 ? "0"+minutos : minutos;

  segs = segs < 10 ? "0"+segs : segs;

  $('#numbers').html(minutos+":"+segs);

}



function finishActivity() {

  timer.stop();

  $('#espacioTarjetas').html('<div id="felicidades"><div class="titoFeliz"></div><div id="datosDer"><h2>¡Felicidades!</h2><p>Tu tiempo fue de</p><p id="resulTiempo">00:00</p></div></div>');

  $('#resulTiempo').html($('#numbers').html());

  $('#felicidades').show();

}