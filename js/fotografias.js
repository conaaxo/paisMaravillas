var sources = [];

var galeria = [];

var bosquet = [

                ["bosquetemplado/Aquila-chrysaetos.jpg", "Águila real"],

                ["bosquetemplado/Archilochus-colubris.jpg", "Colibrí garganta rubí"],

                ["bosquetemplado/Cacomixtle.jpg", "Cacomixtle norteño"],

                ["bosquetemplado/Lynx-rufus.jpg", "Lince americano"],

                ["bosquetemplado/Melanerpes-formicivorus.jpg", "Carpintero bellotero"],

                ["bosquetemplado/San-nicolas-Totolapan-Distrito-Federal.jpg", "San Nicolás Totolapan, Distrito Federal"],

        				["bosquetemplado/cardo.jpg", "Cardo común"],

        				["bosquetemplado/lagartijacornuda.jpg", "Lagartija cornuda de montaña"],

        				["bosquetemplado/tlacuache.jpg", "Tlacuache"],

        				["bosquetemplado/oyamel.jpg", "Oyamel"],

        				["bosquetemplado/garbancillo.jpg", "Garbancillo"],

                ["bosquetemplado/San-Pedro-Martir-Baja-California.jpg", "San Pedro Mártir, Baja California"]

              ];



var selvah = [

              ["selvahumeda/Agalychnis-moreletii.jpg", "Rana de árbol de ojos rojos"],

              ["selvahumeda/Aulacorhynchus-prasinus.jpg", "Tucaneta verde"],

              ["selvahumeda/Crocodylus-acutus.jpg", "Cocodrilo americano"],

              ["selvahumeda/MChiapas0021-La-Concepcion-Chiapas.jpg", "La Concepción, Chiapas"],

              ["selvahumeda/Megaceryle-torquata.jpg", "Martín pescador de collar"],

              ["selvahumeda/Panthera-onca.jpg", "Jaguar"],

              ["selvahumeda/Penelope-purpurascens.jpg", "Pava cojolita"],

              ["selvahumeda/Pteroglossus-torquatus.jpg", "Arasari de collar"],

              ["selvahumeda/Santa-Maria-Chimalapa-Oaxaca.jpg", "Santa María Chimalapa, Oaxaca"],

      			  ["selvahumeda/serete.jpg", "Serete"],

      			  ["selvahumeda/ocelote.jpg", "Ocelote"],

      			  ["selvahumeda/tucan.jpg", "Tucán"]

             ];



var pastizal = [

                ["pastizal/Bison-bison.jpg", "Bisonte americano"],

                ["pastizal/Falco-sparverius.jpg", "Cernícalo americano"],

                ["pastizal/pastizalalpino.jpg", "Zacatonales, pastizal alpino"],

                ["pastizal/Janos-Chihuahua (2).jpg", "Janos, Chihuahua"],

        				["pastizal/canutillo.jpg", "Canutillo"],

        				["pastizal/gorrionalablanca.jpg", "Gorrión ala blanca"],

        				["pastizal/huizache.jpg", "Huizache"],

        				["pastizal/wapiti.jpg", "Wapiti"],

        				["pastizal/tortugaadornada.jpg", "Tortuga adornada"],

        				["pastizal/lince.jpg", "Lince"],

        				["pastizal/venadobura.jpg", "Venado bura"],

                ["pastizal/Taxidea-taxus.jpg", "Tlalcoyote"]

               ];



var campo = [

              ["campo/Agave-angustifolia_.jpg", "Maguey de Mezcal"],

              ["campo/Amaranthus-cruentus_AdalbertoRiosSzalay.jpg", "Amaranto"],

              ["campo/Axochiapan,Morelos_.jpg", "Axochiapan,Morelos"],

              ["campo/Olinala_Gro-(402-of-442).jpg", "Olinala, Guerreo"],

              ["campo/Opuntia-ficus-indica_1946.jpg", ""],

              ["campo/Theobroma-cacao-005.jpg", "Cacao"],

      			  ["campo/quelite.jpg", "Quelite"],

      			  ["campo/guajolote.jpg", "Guajolote"],

      			  ["campo/nancheamarillo.jpg", "Nanche amarillo"],

      			  ["campo/chile.jpg", "Chile"],

      			  ["campo/cempasuchitl.jpg", "Cempasúchitl"],

              ["campo/Vanilla-planifolia-028.jpg", "Vainilla"]

            ];



var ciudad = [

              ["ciudad/DSC03099CGL.jpg", "Jacaranda "],

              ["ciudad/DSC08682CGL.jpg", "Zanate"],

              ["ciudad/Eupherusa-cyanophrys-(3)Grosselet.jpg", "Colibrí Oaxaqueño"],

              ["ciudad/Papilio-multicaudatus-40CGL.jpg", "Xochiquetzal papaloth"],

              ["ciudad/Taraxacum-officinale-infrutescenciaPedro-Tenorio-Lezama.jpg", "Diente de león"],

      			  ["ciudad/coladegolondrina.jpg", "Cola de golondrina magnífica"],

      			  ["ciudad/colibripicoancho.jpg", "Colibrí pico ancho"],

      			  ["ciudad/coquita.jpg", "Coquita"],

      			  ["ciudad/palmacanaria.jpg", "Palma canaria"],

      			  ["ciudad/polillaratonviejo.jpg", "Polilla ratón viejo"],

      			  ["ciudad/viuda.jpg", "Viuda negra"],

              ["ciudad/Turdus-migratorius-3738Grosselet.jpg", "Mirlo Primavera"]

             ];



var golfo = [

              ["golfo/Corytophanes-cristatus.jpg", "Turipache cabeza lisa"],

              ["golfo/Fregata-magnificens.jpg", "Fragata magnífica"],

              ["golfo/Phoenicopterus-ruber.jpg", "Flamenco americano"],

              ["golfo/Rizophora-mangle.jpg", "Mangle rojo - La Encrucijada, Chiapas"],

              ["golfo/Trichechus-manatus.jpg", "Manatí del Caribe"],

      			  ["golfo/algasombrilla.jpg", "Alga sombrilla"],

      			  ["golfo/delfinnariz.jpg", "Delfín nariz de botella"],

      			  ["golfo/garzacucharon.jpg", "Garza cucharón"],

      			  ["golfo/jeniguano.jpg", "Jeniguano Bocón"],

      			  ["golfo/langosta.jpg", "Langosta espinosa"],

      			  ["golfo/tiburonballena.jpg", "Tiburón ballena"],

              ["golfo/Sian-Kaan-Quintana-Roo.jpg", "Sian Ka'an, Quintana Roo"]

            ];



var matorral = [

                ["matorral/Gopherus-flavomarginatus.jpg", "Tortuga llanera"],

                ["matorral/Heloderma-suspectum.jpg", "Lagarto de Gila"],

                ["matorral/Ovis-canadensis.jpg", "Borrego cimarrón"],

                ["matorral/Uma-exsul.jpg", "Lagartija perrilla de arena"],

                ["matorral/Zapotitlan-Puebla.jpg", "Zapotitlán Salinas, Puebla"],

        				["matorral/puma.jpg", "Puma"],

        				["matorral/cardenalrojo.jpg", "Cardenal rojo, Puebla"],

        				["matorral/copal.jpg", "Copal"],

        				["matorral/nopalviolaceo.jpg", "Nopal violáceo"],

        				["matorral/cactodebarril.jpg", "Cacto de barril"],

        				["matorral/chuckwalla.jpg", "Chuckwalla de San Esteban"],

                ["matorral/Zapotitlan-Salinas-Puebla.jpg", "Zapotitlán Salinas, Puebla"]

               ];



var pacifico = [

                ["pacifico/Cacaluta-Oaxaca.jpg", "Cacaluta, Oaxaca"],

                ["pacifico/Orcinus-orca.jpg", "Orca común"],

                ["pacifico/Paguroidea.jpg", "Cangrejo ermitaño"],

                ["pacifico/Pelecanus-occidentalis.jpg", "Pellícano pardo"],

                ["pacifico/Platalea-ajaja.jpg", "Platalea ajaja"],

                ["pacifico/Pseudorca-crassidens.jpg", "Falsa orca"],

                ["pacifico/Sula-leucogaster.jpg", "Bobo café"],

        				["pacifico/baya.jpg", "Baya o mero"],

        				["pacifico/charran.jpg", "Charrán elegante"],

        				["pacifico/lobomarino.jpg", "Lobo marino de California"],

        				["pacifico/tiburonblanco.jpg", "Tiburón blanco"],

                ["pacifico/Tursiops-truncatus.jpg", "Delfín tonina"]

               ];



$(document).ready(function(){

  if ($("#fotos_bosque_templado").length)

    sources = bosquet;

  if ($("#fotos_selva").length)

    sources = selvah;

  if ($("#fotos_pastizal").length)

    sources = pastizal;

  if ($("#fotos_campo").length)

    sources = campo;

  if ($("#fotos_ciudad").length)

    sources = ciudad;

  if ($("#fotos_golfo").length)

    sources = golfo;

  if ($("#fotos_matorral").length)

    sources = matorral;

  if ($("#fotos_pacifico").length)

    sources = pacifico;

  crearGaleria(sources);

  positions = ["-3px", "-59px", "-114px", "-170px", "-225px", "-280px", "-335px", "-391px"];

  $('#menuCirculo .selected a').css("background-position", positions[$('#menuCirculo li.selected').index()] +" -112px");

});



function crearGaleria(ecosistema) {

  for(var i = 0; i < ecosistema.length; i++) {

    image = $('<img src="assets/img/conoce/fotografias/thumbs/'+ ecosistema[i][0] +'" />');

    if(image.attr('width') > 0)

      thumb = "thumbs/" + ecosistema[i][0];

    else

      thumb = ecosistema[i][0];

    minit = 'url("assets/img/conoce/fotografias/'+ thumb +'")';

    galeria[i] = $('<a class="fancybox" title="' + ecosistema[i][1] + '" rel="grupo" href="assets/img/conoce/fotografias/'+ ecosistema[i][0] +'"><div></div></a>');

    galeria[i].find('div').css('background-image', minit);

  }

  $('#galeria').html(galeria);

  $(".fancybox").fancybox();

}