plb = [
            'arbol',
            'pino',
            'guaje',
            'hoja',
            'tulipan',
            'liquidambar',
            'ahuehuete',
            'semilla',
            'sudamerica'
          ]
acertijo =  [
              'Sin el aire yo no vivo; sin la tierra yo me muero; tengo yemas sin ser huevo, y copa sin ser sombrero.',
              'De mi tronco herido<br>sacan la resina.<br>En las piñas guardo<br>todas mis semillas.',
              'Soy pariente del frijol y mis vainas son de color rojizo. La gente las colecta para cocinarlas y hacer una salsa<br>Conocida como “guaxmole”.',
              'Está en la navaja<br>y está en el cuaderno<br>se cae del árbol<br>antes del invierno.',
              'Soy un árbol con flores muy llamativas,<br>soy originario de África y he sido utilizado para la fabricación de tambores.',
              'Soy un árbol originario de Estados Unidos y de México. Mis hojas tienen tres grandes puntas y se parecen un poco a las de los maples. Mis frutos son pequeñas bolitas redondas de picos.',
              'Soy el gran “Viejo del agua”. Puedo vivir muchos años y siempre te espero cerca de arroyos y ríos.',
              'Siempre se muere escondida sin dar guerra, por dar a otros su vida bajo tierra.',
              'Yo soy la Jacaranda. Soy un árbol de las selvas secas de Bolivia y Argentina. Mi nombre proviene de la lengua guaraní. Soy muy fácil de reconocer cuando florezco ¿Me puedes ayudar a decir de qué región provengo?'
            ]
imagen =  [
            'img_1.png',
            'img_2.png',
            'img_3.png',
            'img_2.png',
            'img_5.png',
            'img_6.png',
            'img_7.png',
            'img_2.png',
            'img_9.png'
          ]
solucion =  [
              'r_1.jpg',
              'r_2.jpg',
              'r_3.jpg',
              'r_4.jpg',
              'r_5.jpg',
              'r_6.jpg',
              'r_7.jpg',
              'r_8.jpg',
              'r_9.jpg',
            ]
info =  [
          'in_1.jpg',
          'in_2.jpg',
          'in_3.jpg',
          'in_4.jpg',
          'in_5.jpg',
          'in_6.jpg',
          'in_7.jpg',
          'in_8.jpg',
        ]
current = 0;
maxerrores = 5;
pos = []
mobile = false;
$(document).ready(function() {
  if(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i))
  {
    mobile = true;
  }
  if (mobile) {$("#errores").css("margin-top", '10px')};
  for (var i = 0; i < plb.length; i++)
  {
    pos[i] = i;
  }
  pos = mezclar(pos);
  console.log(pos);
  $("#keyboard").draggable({ axis: 'y' });
  $("#errores, #subterror, .faltantes, #nivel").hide();
  $("#botonEmpezar").on('click', function(){
    $("#errores, #subterror, .faltantes, #nivel").fadeIn();
    $("#botonEmpezar").off('click');
    $('.presentation').fadeOut();
    armar(plb[pos[current]]);
  });
});

function armar(palabra) {
  buenas = [];
  malas = [];
  indices = [];
  len = 0;
  malascount = 0;
  $("#boton").off('click');
  $("#errores").html("");
  $("#palabra").html("");
  $("#acertijo").html(acertijo[pos[current]]);
  $("#hangmodal").css('background-image', 'url("assets/img/conoce/vecinosverde/juego/' + solucion[pos[current]] + '")');
  if(imagen[pos[current]] == '')
  {
    $('#side_img').hide();
    $('#side_img').html();
  }
  else
  {
    $('#side_img').show();
    $('#side_img').html("<img src='assets/img/conoce/vecinosverde/juego/" + imagen[pos[current]] + "' alt='Imagen'>");
  }
  $(".faltantes").html("Te quedan " + maxerrores + " intentos.");
  $("#nivel").html("Pregunta " + (current + 1) + " de " + plb.length);
  palabra = palabra.toUpperCase();
  len = palabra.length;
  letra = '<div class="letra"><span>X</span></div>';
  for(i=0; i<len; i++)
  {
    $("#palabra").append(letra);
  }
  if(mobile)
  {
    $('#keyboard').fadeIn();
    $(".line div").off('click');
    $(".line div").on('click', function(e) {
      c = $(this).html();
      indices = [];
      for(var i=0; i<len; i++) {
        if (palabra[i] === c) indices.push(i);
      }
      if (indices.length > 0)
      {
        if ($.inArray(c, buenas) === -1)
        {
          for(var i=0; i<indices.length; i++) {
            $("#palabra").children().eq(indices[i]).find('span').html(palabra[indices[i]]).css("visibility", "visible");
            buenas.push(c);
          }
        }
      }
      else
      {
        if ($.inArray(c, malas) === -1)
        {
          $(".faltantes").html("Te quedan " + (maxerrores -  (malas.length + 1)) + " intentos más");
          malas.push(c);
          letramala = '<div class="letramala"><span>' + c + '</span></div>';
          $("#errores").append(letramala);
        }
      }
      if (malas.length == maxerrores)
      {
        $('#keyboard').fadeOut();
        $("body").off('keyup');
        $(".retryText").show();
        $("#boton").html("Inténtalo de nuevo");
        $("#boton").on('click',function(){
          $('#lid').fadeOut();
          $('#hangmodal').hide();
          armar(plb[pos[current]]);
        });
        $('#hangmodal').css('background-image', '');
        $('#hangmodal').fadeIn();
        $('#lid').fadeIn();
      }
      else if (buenas.length == len)
      {
        $('#keyboard').fadeOut();
        $(".retryText").hide();
        $("body").off('keyup');
        $("#winning").html("ganaste :D");
        $("#boton").html("Siguiente");
        if (current < plb.length-1)
          current++;
        else
        {
          $("#boton").hide();
          $("#errores, #subterror, .faltantes, #nivel, #acertijo, #side_img, #palabra").hide();
          setTimeout(function() {
            $('#lid').fadeOut();
            $('#hangmodal').hide();
            $('.winning').show();
          }, 5000);
        }
        $("#boton").on('click',function(){
          $('#hangmodal').hide();
          $('#infomodal').css('background-image', 'url(assets/img/conoce/vecinosverde/juego/' + info[current -1] + ')');
          $('#infomodal').show();
          setTimeout(function() {
            $('#lid').fadeOut();
            $('#infomodal').hide();
            armar(plb[pos[current]]);
          }, 5000);
        });
        $('#hangmodal').show();
        $('#lid').fadeIn();
      }
    });
  }
  else
  {
    $("body").off('keyup');
    $("body").on('keyup', function(e) {
      c = String.fromCharCode(e.which);
      if(e.keyCode == 0)
        c = "Ñ";
      indices = [];
      for(var i=0; i<len; i++) {
        if (palabra[i] === c) indices.push(i);
      }
      if (indices.length > 0)
      {
        if ($.inArray(c, buenas) === -1)
        {
          for(var i=0; i<indices.length; i++) {
            $("#palabra").children().eq(indices[i]).find('span').html(palabra[indices[i]]).css("visibility", "visible");
            buenas.push(c);
          }
        }
      }
      else
      {
        if ($.inArray(c, malas) === -1)
        {
          $(".faltantes").html("Te quedan " + (maxerrores -  (malas.length + 1)) + " intentos más");
          malas.push(c);
          letramala = '<div class="letramala"><span>' + c + '</span></div>';
          $("#errores").append(letramala);
        }
      }
      if (malas.length == maxerrores)
      {
        $("body").off('keyup');
        $(".retryText").show();
        $("#boton").html("Inténtalo de nuevo");
        $("#boton").on('click',function(){
          $('#lid').fadeOut();
          $('#hangmodal').hide();
          armar(plb[pos[current]]);
        });
        $('#hangmodal').css('background-image', '');
        $('#hangmodal').fadeIn();
        $('#lid').fadeIn();
      }
      else if (buenas.length == len)
      {
        $(".retryText").hide();
        $("body").off('keyup');
        $("#winning").html("Ganaste :D");
        $("#boton").html("Siguiente");
        if (current < plb.length-1)
          current++;
        else
        {
          $("#boton").hide();
          $("#errores, #subterror, .faltantes, #nivel, #acertijo, #side_img, #palabra").hide();
          setTimeout(function() {
            $('#lid').fadeOut();
            $('#hangmodal').hide();
            $('.winning').show();
          }, 5000);
        }
        $("#boton").on('click',function(){
          $('#hangmodal').hide();
          $('#infomodal').css('background-image', 'url(assets/img/conoce/vecinosverde/juego/' + info[current -1] + ')');
          $('#infomodal').show();
          setTimeout(function() {
            $('#lid').fadeOut();
            $('#infomodal').hide();
            armar(plb[pos[current]]);
          }, 5000);
        });
        $('#hangmodal').show();
        $('#lid').fadeIn();
      }
    });
  }
}