var player = null;

$(document).ready(function(){

  player = new MediaElementPlayer('#videoPlayer', {

    defaultVideoWidth: 960,

    defaultVideoHeight: 410,

    features: ['playpause', 'progress', 'current', 'duration', 'volume', 'fullscreen'],

    success: function (mediaElement, domObject) {}

  });

  $('a').click(function(event){

    event.preventDefault();

    player.pause();

    newSrc = 'assets/video/00_seccionvideos/' + $(this).data('video') + '.mp4';

    player.setSrc(newSrc);

    player.load();

  });

});