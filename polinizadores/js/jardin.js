var heights = [1753, 982, 784, 956, 771, 705, 1182]

$(document).ready(function() {
if (screen.width <= 720) {
        window.location = "http://www.paismaravillas.mx/movil/polinizadores.html";
    }
  $("#maestro").find('a').attr('href', $("section:first").attr("data-maestros"));
  $('.especies').on('click', function(){
    $('.mask, #modal').fadeIn();
    $('.imgPol').css('background-image', 'url(' + $(this).attr('data-img') + ')');
    $('.descPol').html($(this).attr('data-texto'));
    $('.descPol i').css('color', $(this).parent().attr('data-color'));
  });
  resizeVecinos();
  $(window).on('resize', function(){
    resizeVecinos();
  });
  reway();
  $('.mask, #btnCerrar').on('click', function(){
    $('.mask, #modal').fadeOut();
  });
  $('.especies').tooltip({ track: true });
  $('.nativas').tooltip({ track: true });
  
	$('.banderav').tooltip({position: {
      my: "center",
      at: "right-200",
      track: false,
      using: function(position, feedback) {
          $(this).css(position);
      }
    }
  });
  scroller("vv");
  $("a[href^=#]").on('click', function(event) {
    if($(this).attr('class') != "banderas")
    {
      event.preventDefault();
      elemento = this.hash;
      $("html, body").animate({
        'scrollTop': $(elemento).data('posicion')
      }, 600, 'swing');
    }
  });
  //circle("#avion", 8000, true);
});

function resizeVecinos() {
  originalWidth = 1920;
  $('section').each(function(index){
    winWidth = $(window).width()
    $(this).width(winWidth);
    newHeight = (heights[index] * winWidth) / originalWidth;
    $(this).height(newHeight);
  });
  $("#modal").css("left", ($(window).width() - $("#modal").width())/2);
  isHighEnough();
}

function isHighEnough() {
  if($(window).height() > 660)
  {
    $('nav#puntos').css('top', '360px');
    $('.banderav').css('display', 'block')
  }
}

function circle(element, time, side) {
  if (typeof side === 'undefined')
    left = (Math.random() < 0.5);
  else
    left = side
  if (typeof element == "string")
    jElement = $(element);
  else
    jElement = element
  jWidth = jElement.width();
  if(left)
    jElement.animate({"left" : "-" + jWidth + "px"}, time, function(){
      jElement.css("left", ($(window).width() + 10) + "px");
      circle(jElement, time, left);
    });
  else
  {
    jElement.animate({"left" : ($(window).width()) + "px"}, time, function(){
      jElement.css("left", ("-" + (jWidth + 10) + "px"));
      circle(jElement, time, left);
    });
  }
}

function reway() {
  $('section').each(function(index){
    $(this).waypoint(function(direction) {
      if(direction === 'down')
      {
        $('section').css('z-index', 100);
        $(this).css('z-index', 200);
        $('section').find('h2').animate({"left" : "-160px"});
        $('section').find('.dayimg').fadeOut();
        $(this).find('h2').animate({"left" : "-10px"});
        $(this).find('.dayimg').fadeIn();
      }
    }, {offset: 150});
    $(this).waypoint(function(direction) {
      if(direction === 'up')
      {
        $('section').css('z-index', 100);
        $(this).css('z-index', 200);
        $('section').find('.dayimg').fadeOut();
        $('section').find('h2').animate({"left" : "-160px"});
        $(this).find('.dayimg').fadeIn();
        $(this).find('h2').animate({"left" : "-10px"});
      }
    },
    {
      offset: function() {
        return $.waypoints('viewportHeight') / 2 - $(this).outerHeight();
      }
    });
  });
}