$(document).ready(function() {
  soundPlay = "";
  ytUrl = "https://www.youtube.com/embed/"
  ecos = ['tito', 'campo', 'pacifico', 'selvaseca', 'bosque', 'matorral', 'pastizal', 'rios', 'selvahumeda', 'golfo', 'ciudad', 'creditos'];
  ligas = [
    ['titocurioso', 'presentacion', 'titocurioso', 'titocurioso', 'SiGqsh09w6w', ''],
    ['desayuno', 'desolasol(elcampo)', 'desolasol', 'desolasol', 'QDqxOGL-zGA', 'campo'],
    ['almarpacifico', 'laolatriste(oceanopacifico)', 'laolatriste', 'laolatriste', 'JHZmg-X5Yt8', 'pacifico'],
    ['alaselvaseca', 'chaparritayconsentida(selvaseca)', 'chaparritayconsentida', 'chaparritayconsentida', 'Z7ibgNEtn-c', ''],
    ['alasmontanas', 'palaciodeinvierno(bosque)', 'unpalaciodeinvierno', 'unpalaciodeinvierno', 'tvbUGUgdJd8', 'bosquetemplado'],
    ['almatorral', 'laliebrelola(matorral)', 'laliebrelola', 'laliebrelola', 'FkQe1OdBByo', 'matorral'],
    ['alpastizal', 'unfantasmaanimal(pastizales)', 'unfantasmaanimal', 'unfantasmaanimal', 'L-Fp-gMTcvc', 'pastizal'],
    ['ariosylagos', 'delcieloalmar(riosylagos)', 'delcieloalmar', 'delcieloalmar', 'v1JX5PGc1Uk', ''],
    ['alaselvahumeda', 'escandalodelavida(selvahumeda)', 'escandalodevida', 'escandalodevida', '1SvFSRzgSes', 'selvahumeda'],
    ['almaratlantico', 'turquesayoropel(golfoycaribe)', 'turquesayoropel', 'turquesayoropel', 'T_TmwEWUtTg', 'golfo'],
    ['deregresoalaciudad', 'todoenplural(lasciudades)', 'todoestaenplural', 'todoestaenplural', '7bpMWT5aowQ', 'ciudad']
    //['', '', '', '', '', ''],
  ];
  current = 0;
  $('img[usemap]').rwdImageMaps();
  $('area').on('mouseenter', function(event){
    event.preventDefault();
    $("#over_" + $(this).attr('alt')).fadeIn();
  });
  $('area').on('mouseleave', function(event){
    event.preventDefault();
    $(".layers").fadeOut();
  });
  $('area, .titoNada').on('click', function(event){
    event.preventDefault();
    $('.mask').fadeIn();
    $('#modal' + primerAlta($(this).attr('alt'))).fadeIn();
    $('.barraExtra').show();
    if ( $.inArray($(this).attr('alt'), ecos) > -1 ) {
      current = $.inArray($(this).attr('alt'), ecos);
    }
    cambiarLigas();
  });
  $('.fullTrip').on('click', function(event){
    event.preventDefault();
    $('.mask').fadeIn();
    $("#modalViaje").find('iframe').attr('src', 'https://www.youtube.com/embed/kznQcl4-kvw?list=PLLAcoRHqCmNQS_kDeo71yz2I1iozu8AYj');
    $('#modalViaje').fadeIn();
    $('.barraExtra').hide();
  });
  $('.closeModal').on('click', function(){
    $(this).parent().fadeOut();
    $('.mask').fadeOut();
    $("#modalViaje").find('iframe').attr('src', '');
    $("#modalVideo").find('iframe').attr('src', '');
    shh();
  });
  $('.nextModal').on('click', function(){
    shh();
    $(this).parent().fadeOut();
    if(current < ecos.length-1)
      current++;
    else
      current = 0;
    cambiarLigas();
    console.log("#modal" + primerAlta(ecos[current]));
    $('#modal' + primerAlta(ecos[current])).fadeIn();
  });
  $('.lastModal').on('click', function(){
    shh();
    $(this).parent().fadeOut();
    if(current > 0)
      current--;
    else
      current = ecos.length-1;
    cambiarLigas();
    console.log("#modal" + primerAlta(ecos[current]));
    $('#modal' + primerAlta(ecos[current])).fadeIn();
  });
  resizeModal();
  if(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i))
  {
    //do nothing
  }
  else
  {
    //Still nothing
  }
  setTimeout(function(){ checkUrl(); }, 1000);
});

function primerAlta(original) {
  mayus = original.charAt(0).toUpperCase() + original.substring(1);
  return mayus;
}

function checkUrl() {
  url = window.location.href;
  goTo = "";
  if(url.indexOf("#") > -1)
  {
    goTo = url.slice(url.indexOf("#")+1)
    if ( $.inArray(goTo, ecos) > -1 ) {
      current = $.inArray(goTo, ecos);
    }
    cambiarLigas();
    $('.btnCam').click();
  }
}

function resizeModal() {
  if(window.innerHeight > window.innerWidth){
    origWidth = $('.modalImg').width();
    origHeight = $('.modalImg').height();
    winWidth = $(window).width();
    winHeight = $(window).height();
    newHeight = winHeight * 3/4;
    newWidth = origWidth * newHeight / origHeight;

    if(newHeight <= 670)
    {
      $('.modalImg').width(newWidth);
      $('.modalImg').height(newHeight);
      $('.justHalf').width(newWidth);
      $('.justHalf').height(newHeight);
      $('.modalImg').css('margin-left', -(newWidth/2));
      $('.modalImg').css('margin-top', -(newHeight/2));
    }
  }
  else {
    origWidth = $('.modalImg').width();
    origHeight = $('.modalImg').height();
    winWidth = $(window).width();
    winHeight = $(window).height();
    newHeight = winHeight * 3/4;
    newWidth = origWidth * newHeight / origHeight;

    if(newWidth <= 1024)
    {
      $('.modalImg').width(newWidth);
      $('.modalImg').height(newHeight);
      $('.modalImg').css('margin-left', -(newWidth/2));
      $('.modalImg').css('margin-top', -(newHeight/2));
    }
  }
}

function cambiarLigas() {
  if(current < ecos.length-1)
  {
    $('.barraExtra').show();
    $('.audioLeft').attr('data-replay', "assets/audio/mexicomegadiverso/" + ligas[current][0] + ".mp3");
    $('.audioRight').attr('data-replay', "assets/audio/mexicomegadiverso/" + ligas[current][1] + ".mp3");
    $(".audioPlay").on("click", function(event){
      event.preventDefault();
      soundPlay = $(this).attr("data-replay");
      if(soundPlay != undefined)
      {
        if(miAudio != null)
        {
          if(!miAudio.paused)
            miAudio.pause();
        }
        audioPlay(soundPlay);
      }
    });
    $('.btnA').parent().attr('href','assets/pdf/mexicomegadiverso/' + ligas[current][2] + '_cancion.pdf');
    $('.btnAudio').parent().attr('href','assets/pdf/mexicomegadiverso/' + ligas[current][3] + '_partitura.pdf');
    $('.btnCam').parent().attr('href','https://www.youtube.com/watch?v=' + ligas[current][4] + '_partitura.pdf');
    $('.btnCam').off('click');
    $('.btnCam').on('click', function(event){
      event.preventDefault();
      $("#modalVideo").find('iframe').attr('src', ytUrl + ligas[current][4]);
      $('.mask').fadeOut();
      $('.modalImg').fadeOut();
      shh();
      $('.mask').fadeIn();
      $('#modalVideo').fadeIn();
      $('.barraExtra').hide();
    });
    $('.btnLeaf').parent().attr('href','explora.html#' + ligas[current][5]);
  }
  else
  {
    $('.barraExtra').hide();
  }
}

function shh() {
  if(miAudio != null)
    {
      if(!miAudio.paused)
        miAudio.pause();
    }
}

