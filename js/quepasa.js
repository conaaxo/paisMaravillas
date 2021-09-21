/*orden =[

  ["planta", "a"],

  [

    ["planta", "d"],

    ["tapir", "a"]

  ],

  [

    ["tapir", "d"],

    ["jaguar", "a"]

  ]

]

*/

her = [

  [	

  	["fon_1", "d"],

  	["her_1", "a"]

  ],

  [

    ["her_1", "d"],

    ["her_2", "a"]

  ],

  [

    ["her_2", "d"],

    ["her_3", "a"]

  ],

  [

  	["her_3", "d"],

	["fon_1", "a"]

  ]	

]



car = [

  [	

  	["fon_1", "d"],

  	["car_1", "a"]

  ],

  [

    ["car_1", "d"],

    ["car_2", "a"]

  ],

  [

    ["car_2", "d"],

    ["car_3", "a"]

  ],

  [

    ["car_3", "d"],

    ["car_4", "a"]

  ],

  [

  	["car_4", "d"],

	["fon_1", "a"]

  ]	

]



pla = [

  [	

  	["fon_1", "d"],

  	["pla_1", "a"]

  ],



  [

    ["pla_1", "d"],

    ["pla_2", "a"]

  ],

  [

  	["pla_2", "d"],

	["fon_1", "a"]

  ]

]



/*noplantas =[

]



noherbivoros =[

]



nocarnivoros =[

]*/



$(document).ready(function() {

  noResfooter();

  $("#planta").on('click', function(){

    $(".modal").fadeOut("slow");

    $("#plantas").fadeIn("slow");

    $(".animar").off('click');

    $(".animar").on('click', function(){

      $(this).parent().fadeOut("slow");

      avante(pla, 3);

    });

  });

  $("#tapir").on('click', function(){

    $(".modal").fadeOut("slow");

    $("#herbivoros").fadeIn("slow");

    $(".animar").off('click');

    $(".animar").on('click', function(){

      $(this).parent().fadeOut("slow");

      avante(her, 3);

      // avante(noherviboros, 3);

    });

  });

  $("#jaguar").on('click', function(){

    $(".modal").fadeOut("slow");

    $("#carnivoros").fadeIn("slow");

    $(".animar").off('click');

    $(".animar").on('click', function(){

      $(this).parent().fadeOut("slow");

      avante(car, 3);

    });

  });

  $(".back").on('click', function(){

    $(this).parent().fadeOut("slow");

  });

  $(".modal").css("left", ($(window).width() - $(".modal").width())/2)

  $(window).on('resize', function(){

    $(".modal").css("left", ($(window).width() - $(".modal").width())/2);

  });

})



function avante(steps, duration)

{

  duration = duration * 1000;

  $.each(steps, function(index, step){

    executeIn = duration * (index + 1);

    if ($.isArray(step[0]))

    {

      $.each(step, function(subindex, substep){

        if (substep[1] == "d")

        {

          setTimeout(function(){

            $("#" + substep[0]).fadeOut("slow");

          }, executeIn);

        }

        else

        {

          setTimeout(function() {

            $("#" + substep[0]).fadeIn("slow");

          }, executeIn);

        }

      });

    }

    else

    {

      if (step[1] == "d")

      {

        setTimeout(function() {

          $("#" + step[0]).fadeOut("slow");

        }, executeIn);

      }

      else

      {

        setTimeout(function() {

          $("#" + step[0]).fadeIn("slow");

        }, executeIn);

      }

    }

  });

}