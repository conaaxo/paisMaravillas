var chart = AmCharts.makeChart("chartdiv", {

    "type": "serial",

    "theme": "chalk",

    "dataProvider": [{

        "country": "1°",

        "lugar": "Rusia",

        "visits": 14,

        "color": "rgba(94,135,91,1)"

    }, {

        "country": "2°",

        "lugar": "Canadá",

        "visits": 13,

        "color": "rgba(94,135,91,.95)"

    }, {

        "country": "3°",

        "lugar": "Estados Unidos",

        "visits": 12,

        "color": "rgba(94,135,91,.9)"

    }, {

        "country": "4°",

        "lugar": "China",

        "visits": 11,

        "color": "rgba(94,135,91,.85)"

    }, {

        "country": "5°",

        "lugar": "Brasil",

        "visits": 10,

        "color": "rgba(94,135,91,.80)"

    }, {

        "country": "6°",

        "lugar": "Australia",

        "visits": 9,

        "color": "rgba(94,135,91,.75)"

    }, {

        "country": "7°",

        "lugar": "India",

        "visits": 8,

        "color": "rgba(94,135,91,.70)"

    }, {

        "country": "8°",

        "lugar": "Argentina",

        "visits": 7,

        "color": "rgba(94,135,91,.65)"

    }, {

        "country": "9°",

        "lugar": "Kazajistán",

        "visits": 6,

        "color": "rgba(94,135,91,.60)"

    }, {

        "country": "10°",

        "lugar": "Argelia",

        "visits": 5,

        "color": "rgba(94,135,91,.55)"

    }, {

        "country": "11°",

        "lugar": "República Democrática del Congo",

        "visits": 4,

        "color": "rgba(94,135,91,.50)"

    }, {

        "country": "12°",

        "lugar": "Groelandia",

        "visits": 3,

        "color": "rgba(94,135,91,.45)"

    }, {

        "country": "13°",

        "lugar": "Arabia Saudita",

        "visits": 2,

        "color": "rgba(94,135,91,.40)"

    }, {

        "country": "14°",

        "lugar": "México",

        "visits": 1,

        "color": "rgba(94,135,91,.35)"

    }],

    "valueAxes": [{

        "axisAlpha": 0,

        "position": "left",

        "title": ""

    }],

    "startDuration": 1,

    "graphs": [{

        "balloonText": "<b>[[category]] [[lugar]]</b>",

        "colorField": "color",

        "fillAlphas": 0.9,

        "lineAlpha": 0.2,

        "type": "column",

        "valueField": "visits"

    }],

    "chartCursor": {

        "categoryBalloonEnabled": false,

        "cursorAlpha": 0,

        "zoomable": false

    },

    "categoryField": "country",

    "categoryAxis": {

        "gridPosition": "",

        "labelRotation": 45

    },

    "amExport":{}

     

});