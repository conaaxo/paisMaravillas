$(document).ready(function() {

  $("#facil").on('click', function(){

    current = $("#juegoLoad").attr('src');

    if (current.indexOf("hard") > -1)

    {

      $("#juegoLoad").attr('src',$("#juegoLoad").attr('src').replace("hard", "easy"));

    }

  });

  $("#dificil").on('click', function(){

    current = $("#juegoLoad").attr('src');

    if (current.indexOf("easy") > -1)

    {

      $("#juegoLoad").attr('src',$("#juegoLoad").attr('src').replace("easy", "hard"));

    }

  });

  $("#reiniciar").on('click', function(){

    $("#juegoLoad").attr( 'src', function ( i, val ) { return val; });

  });

  positions = ["-3px", "-59px", "-114px", "-170px", "-225px", "-280px", "-335px", "-391px"];

  $('#menuCirculo .selected a').css("background-position", positions[$('#menuCirculo li.selected').index()] +" -112px");

});