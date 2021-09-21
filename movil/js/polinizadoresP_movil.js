// JavaScript Document



$(function () {

	 event.preventDefault();

	$("#slider").responsiveSlides({

		auto: true,

		pager: false,

		nav: false,

		speed: 500,

		namespace: "callbacks",

		before: function () {

		$('.events').append("<li>before event fired.</li>");

		},

		after: function () {

		$('.events').append("<li>after event fired.</li>");

		}

	  });

	  

	  $( "#accordion" ).accordion({

      collapsible: true,

	  heightStyle: "content",

	  active: false

    });

	

	 $( "#accordion1" ).accordion({

      collapsible: true,

	  heightStyle: "content",

	  active: false

    });

	

	 $( "#accordion2" ).accordion({

      collapsible: true,

	  heightStyle: "content",

	  active: false

    });

	

		 $( "#accordion3" ).accordion({

      collapsible: true,

	  heightStyle: "content",

	  active: false

    });

	

		 $( "#accordion4" ).accordion({

      collapsible: true,

	  heightStyle: "content",

	  active: false

    });

	

		 $( "#accordion5" ).accordion({

      collapsible: true,

	  heightStyle: "content",

	  active: false

    });

	

		 $( "#accordion6" ).accordion({

      collapsible: true,

	  heightStyle: "content",

	  active: false

    });

});

