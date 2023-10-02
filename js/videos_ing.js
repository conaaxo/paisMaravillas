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
var vertebrados = ["Reptiles", "Mammal", "Fish", "Amphibians", "Birds"];
var reptiles = [
    ["Toloque", ""],
    ["Cocodrile", "cocodrilo"],
    ["False Coral", "falsacoralillo"],
    ["Iguana", "iguanaazul"],
    ["Snake", "serpiente"],
    ["Turtle", "tortugaverde"],
    ["Rattle Snake", "cascabel"],
    ["Boa", "boa"],
    ["Red Iguana", "iguanacarrobo"],
    ["Olive Ridley Turtle", "tortugagolfina"]
];
var mamiferos = [
    ["Coati", "coati"],
    ["Dolphin", "delfin"],
    ["White-Lipped Pecari", "pecaridelabiosblancos_1"],
    ["Jaguar", "jaguar"],
    ["Sea Lion", "lobomarino"],
    ["Wolf", "lobomexicano"],
    ["Monkey", "monoarana_2"],
    ["Bat", ""],
    ["Anteater", ""],
    ["Prairie Dog", "perritollanero"],
    ["Tapir", "tapir"],
    ["Deer", "venadocolablanca_2"],
    ["Tigrillo", ""],
    ["Volcano Rabbit", "teporingo"],
    ["Bighorn Sheep", "cimarron"],
    ["Greater Grison", "grison"],
    ["Jaguar or Pantera", "jaguarnegro"],
    ["Neotropical Otter", "nutria"],
    ["Ocelot", "ocelote_1"],
    ["Cougar", "puma"],
    ["Tayra", "tayra_2"],
    ["Squirrel", "ardilla"],
    ["Kinkajou", "martucha"],
    ["Howler Monkey", "monoaullador"],
    ["Red Brocket Deer", "venadotemazate"],
    ["Armadillo", ""],
    ["Coyote", "coyote"]
];
var peces = [
    ["Sea Horse", "hippocampus"],
    ["Banco de peces", ""],
    ["Pez Le�n", ""],
    ["Ray", "raya"],
    ["Moray Eel", "morena"],

];
var anfibios = [
    ["Frog", "ranaarborea"],
    ["Toad", "sapo_1"],
    ["Mudpuppy", ""]
];
var aves = [
    ["Harpy Eagle", "aguila_arpia"],
    ["Owl", "buhocornudo"],
    ["Flamingo", "flamenco"],
    ["Quetzal", ""],
    ["Toucan", "tucan"],
    ["Great Curassow", "ocofaisanhembra"],
    ["Hummingbird", "colibri"],
    ["Honerd Guan", "pavon"],
    ["Brown Pelican", "pelicano"],
    ["Spectacled Owl", "buhodeanteojos"],
    ["Harris Hawk", "aguilareal"],
    ["Blue Footed Boody", "bobospatasazules"],
    ["Great Blue Heron", "garza"],
    ["Black Bellied Whistling Duck", "patopijijedealasblancas"],
    ["Ocellated Turkey", "pavoocelado"],
    ["Tailed Grackle", "zanate"],
    ["Woodpecker", "carpintero"],
    ["Frigatebird", "fragata"],
    ["Bonaparte�s Seagull", "gaviotabonaparte"],
    ["Wild Turkey", "guajolote"]
];
var vert = [reptiles, mamiferos, peces, anfibios, aves];
var invertebrados = ["Shrimps and Crabs", "Millipedes", "Snails clams and octopus", "Corals, jellyfish ans sea anemones", "spiders ans scorpions", "Insects", "Stars and sea urchins"];
var cangrejos = [
    ["Crab", "cangrejo"],
    ["Lobster", "langosta"],
    ["Hermit Crab", "cangrejoermitano"]
];
var milpies = [
    ["Millipede", "cienpies"]
];
var caracoles = [
    ["Snail", "caracol"]
];
var corales = [
    ["Coral", "corales"],
    ["Jellyfish", "medusa_1"],
    ["Brain Coral", "coralcerebro"],
    /*["Medusa","medusa_1"],*/
    ["Anemone", "anemona"],
    ["Polyp Coral", "poliposdecoral"]
];
var aranas = [
    ["Spider", "arana"],
    ["Tarantula", "tarantula"],
    ["Mites", "acaros"]
];
var insectos = [
    ["Beetle", "escarabajorinoceronte"],
    ["Ant", "hormiga"],
    ["Dragonfly", "libelula"],
    ["European Mantis", "mantis"],
    ["Mariposa", ""],
    ["Bees", "abejas"],
    ["Caterpillar", "oruga_1"],
    ["Wasp", "avispa"],
    ["Grasshopper", "chapulin"],
    ["Hope Grasshopper", "chapulinesperanza"],
    ["Sonorous Butterfly", "mariposatronadora"],
    ["Mourning Cloak Butterfly", "mariposavuelodeduelo"],
    ["Phasmatodea", "insectopalo"],
    ["Catepillar", "oruga_2"]
];
var estrellas = [
    ["Sea Urchin", "erizodetinta"]
];
var esponjas = [
    ["Esponje", "esponjademar"]
];
var invert = [cangrejos, milpies, caracoles, corales, aranas, insectos, estrellas, esponjas];
var plantas = ["Pines and cedars", "Ferns", "Magnolias and daisies", "Grasses and palm tres"];
var pinos = [
    ["Pine", "pino"]
];
var helechos = [
    ["Fern", "helecho"]
];
var magnolias = [
    ["Saguaro", "saguaro"],
    ["Barrel Cactus", "biznaga"],
    ["Prickly Pear", "nopal"],
    ["Magrove", "mangle"],
    ["Oak", "encino"],
    ["Moctezuma Cypress", ""],
    ["Nettle", "chaya"],
    ["Old Man Cactus", "cactoviejito"],
    ["Parasitic Tree", "matapalo"]
];
var pastos = [
    ["Bromelia", "bromelia"],
    ["Agave", "maguey"],
    ["Lacandonia", "lacandonia"],
    ["Desert Fan Palm", "palmera"],
    ["Orchids", ""],
    ["Orchids", "orquideaamarilla"],
    ["Yucca", "yuca"],
    ["Vainilla", "vainilla"],
    ["Platanillo", "platanillo"],
    ["Common Tule", ""],
    ["Lilium", ""]
];
var plant = [pinos, helechos, magnolias, pastos, plant];
var hongos = ["Fungi"];
var fung = [
    ["Lichen", "liquen"],
    ["Mushrooms", "hongo_1"],
    ["Mushrooms", "hongo_3"],
    ["Mushrooms", "hongo_4"]
];
var hong = [fung];
$(document).ready(function () {
    initVideo();
    $("#especies ul li").click(function () {
        $("#especies ul li").removeClass("selected");
        $(this).addClass("selected");
        $("#nombreEspecie").html($(this).data("name"));
        familia = $(this).data("index");
        llenarListaEspecie(familia);
        $(".listaFamilia ul li").removeClass("selected");
        $(".listaFamilia ul li:first-child").addClass("selected");
        $(".listaFamilia ul li").click(function () {
            $(".listaFamilia ul li").removeClass("selected");
            $(this).addClass("selected");
        });
    });
    llenarListaEspecie(familia);
    $(".listaFamilia ul li:first-child").addClass("selected");
    $(".listaFamilia ul li").click(function () {
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
    for (i = 0; i < vertebrados.length; i++) {
        listaVert[i] = $('<li data-index="' + i + '">' + vertebrados[i] + '</li>');
    }
    for (i = 0; i < invertebrados.length; i++) {
        listaInvert[i] = $('<li data-index="' + i + '">' + invertebrados[i] + '</li>');
    }
    for (i = 0; i < plantas.length; i++) {
        listaFlor[i] = $('<li data-index="' + i + '">' + plantas[i] + '</li>');
    }
    for (i = 0; i < hongos.length; i++) {
        listaFung[i] = $('<li data-index="' + i + '">' + hongos[i] + '</li>');
    }
}

function llenarListaEspecie(pos) {
    if (pos == 0) {
        $(".listaFamilia ul").html(listaVert);
    } else if (pos == 1) {
        $(".listaFamilia ul").html(listaInvert);
    } else if (pos == 2) {
        $(".listaFamilia ul").html(listaFlor);
    } else if (pos == 3) {
        $(".listaFamilia ul").html(listaFung);
    }
    llenarListaVideos(pos);
}

function llenarListaVideos(pos) {
    currentVideos = [];
    $(".listaFamilia ul li").click(function () {
        especie = $(this).data("index");
        currentVideos = [];
        if (familia == 0) {
            for (i = 0; i < vert[especie].length; i++) {
                if (vert[especie][i][1] != "")
                    currentVideos.push($('<li data-video="' + vert[especie][i][1] + '">' + vert[especie][i][0] + '</li>'));
            }
        } else if (familia == 1) {
            for (i = 0; i < invert[especie].length; i++) {
                if (invert[especie][i][1] != "")
                    currentVideos.push($('<li data-video="' + invert[especie][i][1] + '">' + invert[especie][i][0] + '</li>'));
            }
        } else if (familia == 2) {
            for (i = 0; i < plant[especie].length; i++) {
                if (plant[especie][i][1] != "")
                    currentVideos.push($('<li data-video="' + plant[especie][i][1] + '">' + plant[especie][i][0] + '</li>'));
            }
        } else if (familia == 3) {
            for (i = 0; i < hong[especie].length; i++) {
                if (hong[especie][i][1] != "")
                    currentVideos.push($('<li data-video="' + hong[especie][i][1] + '">' + hong[especie][i][0] + '</li>'));
            }
        }
        $(".listaVideos ul").html(currentVideos);
        $(".listaVideos ul li[data-video='" + selAnimal + "']").addClass("anSeleccionado");
        $(".listaVideos ul li").click(function (event) {
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
            } else if (navigator.userAgent.match(/chrome/i)) {
                videoSrc = webm;
                videoType = "webm"
            } else if (myVideo.canPlayType('video/mp4')) {
                videoSrc = mp4;
                videoType = "mp4"
            }
            $("#mainVideo").html("<video controls src='" + videoSrc + "' type='video/" + videoType + "'></video>")
            $("#mainVideo video").load();
        });
    });
    $(".listaFamilia ul li:first-child").click();
}
