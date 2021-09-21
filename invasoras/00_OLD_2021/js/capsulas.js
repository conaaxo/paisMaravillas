$(document).ready(function() {
  iniciales("cap");
  capsula = "";
  $("section").stick_in_parent({offset_top: 0});
  $('.mask').hide();
  $("#audioChange").on("click", function(event){
    event.preventDefault();
    if(capsula != undefined)
    {
      if(miAudio != null)
      {
        if(!miAudio.paused)
          miAudio.pause();
      }
      audioPlay(capsula);
    }
  });

  $('.squarecolor a').on('click', function(event){
    event.preventDefault();
    $('.titulo').html($(this).html());
    $('#audioChange').attr('data-capsula', 'assets/audio/capsulas/' + $(this).attr('href') + '.mp3');
    $('#downloadChange').attr('href', 'assets/audio/capsulas/' + $(this).attr('href') + '.mp3');
    capsula = 'assets/audio/capsulas/' + $(this).attr('href') + '.mp3';
    $('.mask').fadeIn();
    $('#modalAudio').fadeIn();
  });

  $('.closeModal').on('click', function(){
    $(this).parent().fadeOut();
    $('.mask').fadeOut();
    if(miAudio != null)
    {
      if(!miAudio.paused)
        miAudio.pause();
    }
  });

})