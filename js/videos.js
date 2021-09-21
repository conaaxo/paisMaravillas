var player = null;
var listaVert = [];
var listaInvert = [];
var listaFlor = [];
var listaFung = [];
var currentSub = [];
var currentVideos = [];
var familia = 0;
var especie = 0;
var selAnimal = "cocodrilo";
var vertebrados = ["Reptiles", "Mamíferos", "Peces", "Anfibios", "Aves"];
var reptiles = [
                ["Toloque",""],
                ["Cocodrilo","cocodrilo"],
                ["Falsa Coralillo","falsacoralillo"],
                ["Iguana Verde","iguanaazul"],
                ["Serpiente","serpiente"],
                ["Tortuga","tortugaverde"],
                ["Víbora de Cascabel","cascabel"],
                ["Boa","boa"],
                ["Iguana o Garrobo","iguanacarrobo"],
                ["Tortuga Golfina","tortugagolfina"]
               ];
var mamiferos = [
                  ["Coatí","coati"],
                  ["Delfín","delfin"],
                  ["Pecarí de Labios Blancos","pecaridelabiosblancos_1"],
                  ["Jaguar","jaguar"],
                  ["Lobo Marino","lobomarino"],
                  ["Lobo Mexicano","lobomexicano"],
                  ["Mono Araña","monoarana_2"],
                  ["Murciélago",""],
                  ["Oso Hormiguero",""],
                  ["Perrito Llanero","perritollanero"],
                  ["Tapir","tapir"],
                  ["Venado Cola Blanca","venadocolablanca_2"],
                  ["Tigrillo",""],
                  ["Teporingo","teporingo"],
                  ["Borrego Cimarrón","cimarron"],
                  ["Grisón","grison"],
                  ["Jaguar Negro","jaguarnegro"],
                  ["Nutria de Río","nutria"],
                  ["Ocelote","ocelote_1"],
                  ["Puma","puma"],
                  ["Tayra","tayra_2"],
                  ["Ardilla","ardilla"],
                  ["Martucha","martucha"],
                  ["Mono Aullador","monoaullador"],
                  ["Venado Temazate","venadotemazate"],
                  ["Armadillo",""],
                  ["Coyote","coyote"]
                ];
var peces = [
              ["Caballito de Mar","hippocampus"],
              ["Banco de peces",""],
              ["Pez León",""],
              ["Raya","raya"],
              ["Morena","morena"]
            ];
var anfibios = [
                ["Rana","ranaarborea"],
				["Sapo","sapo_1"]
               ];
var aves = [
            ["Águila Arpía","aguila_arpia"],
            ["Búho Cornudo","buhocornudo"],
            ["Flamenco","flamenco"],
            ["Quetzal",""],
            ["Tucán Real","tucan"],
            ["Hocofaisán","ocofaisanhembra"],
            ["Colibrí Pico Ancho","colibri"],
            ["Pavón","pavon"],
            ["Pelícano Café","pelicano"],
            ["Búho de Anteojos","buhodeanteojos"],
            ["Águila Real","aguilareal"],
            ["Pájaro Bobo Patas Azules","bobospatasazules"],
            ["Garza Morena","garza"],
            ["Pato Pijije","patopijijedealasblancas"],
            ["Pavo Ocelado","pavoocelado"],
            ["Zanate","zanate"],
            ["Carpintero Pico Plata","carpintero"],
            ["Fragata","fragata"],
            ["Gaviota Bonaparte","gaviotabonaparte"],
            ["Guajolote","guajolote"]
           ];
var vert = [reptiles, mamiferos, peces, anfibios, aves];
var invertebrados = ["Cangrejos y camarones", "Milpiés", "Caracoles, almejas y pulpos", "Corales, medusas y anémonas", "Arañas y alacranes", "Insectos", "Estrellas y erizos", "Esponjas"];
var cangrejos = [
                  ["Cangrejos","cangrejo"],
                  ["Langosta","langosta"],
                  ["Cangrejo ermitaño","cangrejoermitano"]
                ];
var milpies = [
                ["Milpiés","cienpies"]
              ];
var caracoles = [
                  ["Caracol","caracol"]
                ];
var corales = [
                ["Coral","corales"],
                ["Medusa","medusa_1"],
                ["Coral Cerebro","coralcerebro"],
                /*["Medusa","medusa_1"],*/
                ["Anémona","anemona"],
                ["Polipo de Coral","poliposdecoral"]
              ];
var aranas = [
              ["Araña","arana"],
              ["Tarántula","tarantula"],
              ["Ácaros","acaros"]
             ];
var insectos = [
                ["Escarabajos","escarabajorinoceronte"],
                ["Hormiga","hormiga"],
                ["Libélula","libelula"],
                ["Mantis","mantis"],
                ["Mariposa",""],
                ["Abeja","abejas"],
                ["Oruga de Mariposa","oruga_1"],
                ["Avispa","avispa"],
                ["Chapulín","chapulin"],
                ["Chapulín Esmeralda","chapulinesperanza"],
                ["Mariposa Tronadora","mariposatronadora"],
                ["Mariposa Vuelo de Duelo","mariposavuelodeduelo"],
                ["Insecto Palo","insectopalo"],
                ["Oruga","oruga_2"]
               ];
var estrellas = [
                  ["Erizo","erizodetinta"]
                ];
var esponjas = [
                ["Esponja","esponjademar"]
               ];
var invert = [cangrejos, milpies, caracoles, corales, aranas, insectos, estrellas, esponjas];
var plantas = ["Pinos y cedros", "Helechos", "Magnolias y margaritas", "Pastos y palmeras"];
var pinos = [
              ["Pinos","pino"]
            ];
var helechos = [
                ["Helechos","helecho"]
               ];
var magnolias = [
                  ["Saguaro","saguaro"],
                  ["Biznagas","biznaga"],
                  ["Nopal","nopal"],
                  ["Mangle","mangle"],
                  ["Encino","encino"],
                  ["Ahuehuete",""],
                  ["Chaya","chaya"],
                  ["Cacto Viejito","cactoviejito"],
                  ["Sempreviva",""],
                  ["Mata Palo","matapalo"]
                ];
var pastos = [
              ["Bromelia","bromelia"],
              ["Maguey","maguey"],
              ["Lacandonia","lacandonia"],
              ["Palmera Californiana","palmera"],
              ["Orquídeas",""],
              ["Orquídeas Amarillas","orquideaamarilla"],
              ["Yuca","yuca"],
              ["Vainilla","vainilla"],
              ["Platanillo","platanillo"],
              ["Planta Acuática Tule",""],
              ["Lirio",""]
             ];
var plant = [pinos, helechos, magnolias, pastos, plant];
var hongos = ["Hongos"];
var fung = [
            ["Liquen","liquen"],
            ["Hongo de repisa","hongo_1"],
            /*["Hongo ","hongo_2"],*/
            ["Hongo de sombrero","hongo_3"],
            ["Hongo de oreja","hongo_4"],
           ];
var hong = [fung];
$(document).ready(function(){
  initVideo();
  $("#especies ul li").click(function(){
    $("#especies ul li").removeClass("selected");
    $(this).addClass("selected");
    $("#nombreEspecie").html($(this).data("name"));
    familia = $(this).data("index");
    llenarListaEspecie(familia);
    $(".listaFamilia ul li").removeClass("selected");
    $(".listaFamilia ul li:first-child").addClass("selected");
    $(".listaFamilia ul li").click(function(){
      $(".listaFamilia ul li").removeClass("selected");
      $(this).addClass("selected");
    });
  });
  llenarListaEspecie(familia);
  $(".listaFamilia ul li:first-child").addClass("selected");
  $(".listaFamilia ul li").click(function(){
    $(".listaFamilia ul li").removeClass("selected");
    $(this).addClass("selected");
  });
  // MediaElement Use
  // player = new MediaElementPlayer('#videoPlayer', {
  //   defaultVideoWidth: 960,
  //   defaultVideoHeight: 410,
  //   features: ['playpause', 'progress', 'current', 'duration', 'volume', 'fullscreen'],
  //   success: function (mediaElement, domObject) {}
  // });
  // $('a').click(function(event){
  //   event.preventDefault();
  //   player.pause();
  //   newSrc = 'assets/video/00_seccionvideos/' + $(this).data('video') + '.mp4';
  //   player.setSrc(newSrc);
  //   player.load();
  // });
});
function initVideo() {
  for(i=0;i<vertebrados.length;i++)
  {
    listaVert[i] = $('<li data-index="' + i + '">' + vertebrados[i] + '</li>');
  }
  for(i=0;i<invertebrados.length;i++)
  {
    listaInvert[i] = $('<li data-index="' + i + '">' + invertebrados[i] + '</li>');
  }
  for(i=0;i<plantas.length;i++)
  {
    listaFlor[i] = $('<li data-index="' + i + '">' + plantas[i] + '</li>');
  }
  for(i=0;i<hongos.length;i++)
  {
    listaFung[i] = $('<li data-index="' + i + '">' + hongos[i] + '</li>');
  }
}
function llenarListaEspecie(pos) {
  if(pos == 0)
  {
    $(".listaFamilia ul").html(listaVert);
  }
  else if(pos == 1)
  {
    $(".listaFamilia ul").html(listaInvert);
  }
  else if(pos == 2)
  {
    $(".listaFamilia ul").html(listaFlor);
  }
  else if(pos == 3)
  {
    $(".listaFamilia ul").html(listaFung);
  }
  llenarListaVideos(pos);
}
function llenarListaVideos(pos) {
  currentVideos = [];
  $(".listaFamilia ul li").click(function(){
    especie = $(this).data("index");
    currentVideos = [];
    if(familia == 0)
    {
      for(i=0; i<vert[especie].length; i++)
      {
        if(vert[especie][i][1] != "")
          currentVideos.push($('<li data-video="' + vert[especie][i][1] + '">' + vert[especie][i][0] + '</li>'));
      }
    }
    else if(familia == 1)
    {
      for(i=0; i<invert[especie].length; i++)
      {
        if(invert[especie][i][1] != "")
          currentVideos.push($('<li data-video="' + invert[especie][i][1] + '">' + invert[especie][i][0] + '</li>'));
      }
    }
    else if(familia == 2)
    {
      for(i=0; i<plant[especie].length; i++)
      {
        if(plant[especie][i][1] != "")
          currentVideos.push($('<li data-video="' + plant[especie][i][1] + '">' + plant[especie][i][0] + '</li>'));
      }
    }
    else if(familia == 3)
    {
      for(i=0; i<hong[especie].length; i++)
      {
        if(hong[especie][i][1] != "")
          currentVideos.push($('<li data-video="' + hong[especie][i][1] + '">' + hong[especie][i][0] + '</li>'));
      }
    }
    $(".listaVideos ul").html(currentVideos);
    $(".listaVideos ul li[data-video='" + selAnimal + "']").addClass("anSeleccionado");
    $(".listaVideos ul li").click(function(event){
      $(".listaVideos ul li").removeClass("anSeleccionado");
      $(this).addClass("anSeleccionado");
      animalvideo = $(this).data("video");
      selAnimal = animalvideo;
      mp4 = "assets/video/00_seccionvideos/" + animalvideo + ".mp4";
      ogg = "assets/video/00_seccionvideos/" + animalvideo + ".ogv";
      webm = "assets/video/00_seccionvideos/" + animalvideo + ".webm";
      if (navigator.userAgent.match(/firefox/i)) {
        videoSrc = ogg;
        videoType = "ogv"
      }
      else if (navigator.userAgent.match(/chrome/i)) {
        videoSrc = webm;
        videoType = "webm"
      }
      else if (myVideo.canPlayType('video/mp4')) {
        videoSrc = mp4;
        videoType = "mp4"
      }
      $("#mainVideo").html("<video controls src='"+videoSrc+"' type='video/" + videoType + "'></video>")
      $("#mainVideo video").load();
    });
  });
  $(".listaFamilia ul li:first-child").click();
}