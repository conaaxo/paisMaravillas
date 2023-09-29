window.TwelveApp.ViewTwelve = (function ViewTwelve() {
    this.name = 'ViewTwelve';

    // Main App DOM Views Holder
    // Main App OBJECTS Views Holder
    var appHolder = null;
    var apploadedViews = null;

    // Images & JSON Files directories
    var dirImagesJson = '_imgs/views-imgs/view-twelve/galleries-json/';
    var dirImages = '_imgs/views-imgs/view-twelve/';

    // Data from json files
    var twelveCardsData = null;    // Data from JSON files
    var twelveCardsObjs = null;    // Objects from gallery[] property on JSON file

    // TEMPORAL VIEW UI TEMPLATE ELEMENTS
    var templateDraggables = "<span data-id='0' class='card'> <span id='0' class='card-face card-front' draggable='true'></span> </span><span data-id='1' class='card'> <span id='1' class='card-face card-front' draggable='true'></span> </span><span data-id='2' class='card'> <span id='2' class='card-face card-front' draggable='true'></span> </span><span data-id='3' class='card'> <span id='3' class='card-face card-front' draggable='true'></span> </span><span data-id='4' class='card'> <span id='4' class='card-face card-front' draggable='true'></span> </span><span data-id='5' class='card'> <span id='5' class='card-face card-front' draggable='true'></span> </span><span data-id='6' class='card'> <span id='6' class='card-face card-front' draggable='true'></span> </span><span data-id='7' class='card'> <span id='7' class='card-face card-front' draggable='true'></span> </span><span data-id='8' class='card'> <span id='8' class='card-face card-front' draggable='true'></span> </span><span data-id='9' class='card'> <span id='9' class='card-face card-front' draggable='true'></span> </span><span data-id='10' class='card'> <span id='10' class='card-face card-front' draggable='true'></span> </span><span data-id='11' class='card'> <span id='11' class='card-face card-front' draggable='true'></span> </span>";
    var templateDroppables = "<span data-id='0' class='card'></span> <span data-id='1' class='card'></span> <span data-id='2' class='card'></span> <span data-id='3' class='card'></span> <span data-id='4' class='card'></span> <span data-id='5' class='card'></span> <span data-id='6' class='card'></span> <span data-id='7' class='card'></span> <span data-id='8' class='card'></span> <span data-id='9' class='card'></span> <span data-id='10' class='card'></span> <span data-id='11' class='card'></span>";

    // VIEW UI DOM Elements
    var twelveInfoTitleUI = null;    // Header Title Board
    var twelveInfoCronoUI = null;    // Board Holder Timer Info
    var twelveBoardDragUI = null;    // Board Holder Draggable Cards
    var twelveCardsUI = null;    // Draggable Cards
    var twelveBoardDropUI = null;    // Board Holder Droppable Zones
    var twelveDropZonesUI = null;    // Droppable Zones
    var twelveBoardDragTitleUI = null;    // Droppable Zones
    var twelveBoardDropTitleUI = null;    // Droppable Zones
    var twelveOptionsUI = null;    // Options list

    var twelveBoardModalUI = null;    // Modal Holder Window Info
    var twelveMessageModalUI = null;    //
    var twelveMessageHeadingUI = null;    //
    var twelveMessageParagraphUI = null;    // 
    var twelveBtnMessageUI = null;    // Close Button Modal Window Info
    var twelveMessageHeaderUI = null;    // Header Data Window Info
    var nextBtnUI = null;    //
    var btnResetUI = null;    //
    var btnHomeUI = null;    //

    // Game Flags
    var twelveBoardStarted = false;   // Games Has Been Stated
    var twelveBoardCompleted = false;   // Games Has Been Completed ..?
    var twelveCardsGametype = null;    // Game type chosen
    var twelveCardsGameSort = null;    // Game sort chosen

    // Game Objects
    var twelveCardsStacks = 0;       // How Many Cards Groups will be Matched
    var twelveCardsMatches = 0;       // How Many Cards Groups Have Been Matched
    var twelveCardsAttempts = 0;       // Matches Attempts
    var twelveCardsChrono = null;    // SimpleChromo Object
    var twelveCardsTimeout = null;    // Timeout to hide unmatched cards
    var twelveCardsChoices = [];      // User Cards Group Choices to validate matches

    var twelveCardsGameCounters = {
        counterOne: 0,
        counterTwo: 0,
        counterThree: 0,
        counterFour: 0,
        counterFive: 0,
        counterSix: 0
    }
    var completedAllBoards = [];

    // External Data
    var playerName = null;               // Username from app.js

    // ===========================
    // ======== RESET GAME ========
    function resetTwelveGame() {

        twelveCardsData = null;    // Data from JSON files
        twelveCardsObjs = null;    // Objects from gallery[] property on JSON file


        // VIEW UI DOM Elements
        twelveInfoTitleUI = null;    // Header Title Board
        twelveInfoCronoUI = null;    // Board Holder Timer Info
        twelveBoardDragUI = null;    // Board Holder Draggable Cards
        twelveCardsUI = null;    // Draggable Cards
        twelveBoardDropUI = null;    // Board Holder Droppable Zones
        twelveDropZonesUI = null;    // Droppable Zones
        twelveBoardDragTitleUI = null;    // Droppable Zones
        twelveBoardDropTitleUI = null;    // Droppable Zones
        twelveOptionsUI = null;    // Options list

        twelveBoardModalUI = null;    // Modal Holder Window Info
        twelveMessageModalUI = null;    // 
        twelveMessageHeadingUI = null;    // 
        twelveMessageParagraphUI = null;    // 
        twelveBtnMessageUI = null;    // Close Button Modal Window Info
        twelveMessageHeaderUI = null;    // Header Data Window Info
        nextBtnUI = null;    //
        btnResetUI = null;    //
        btnHomeUI = null;    //

        // Game Flags
        twelveBoardStarted = false;   // Games Has Been Stated
        twelveBoardCompleted = false;   // Games Has Been Completed ..?
        twelveCardsGametype = null;    // Game type chosen
        twelveCardsGameSort = null;    // Game sort chosen

        // Game Objects
        twelveCardsStacks = 0;       // How Many Cards Groups will be Matched
        twelveCardsMatches = 0;       // How Many Cards Groups Have Been Matched
        twelveCardsAttempts = 0;       // Matches Attempts
        twelveCardsChrono = null;    // SimpleChromo Object
        twelveCardsTimeout = null;    // Timeout to hide unmatched cards
        twelveCardsChoices.length = 0;      // User Cards Group Choices to validate matches

        twelveCardsGameCounters = {
            counterOne: 0,
            counterTwo: 0,
            counterThree: 0,
            counterFour: 0,
            counterFive: 0,
            counterSix: 0
        }
        completedAllBoards.length = 0;
    }


    // ===========================
    // ======== UTILITIES ========
    function leadZeros(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    function getCardFromID(cardID) {

        return $(twelveCardsUI[cardID]).addClass('show');
    }

    function shuffleTwelveCards(arrayObj) {
        var currentIndex = arrayObj.length;
        var temporaryValue;
        var randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = arrayObj[currentIndex];
            arrayObj[currentIndex] = arrayObj[randomIndex];
            arrayObj[randomIndex] = temporaryValue;
        }

        return arrayObj;
    }

    function showWinUI(messageData, counterToReset, bgPicture) {
        switch (true) {
            // twelveMessageModalUI.removeClass( 'allBoardscompleted' );
            // twelveMessageModalUI.addClass( 'boardCompleted' );
            // break;

            case  bgPicture !== undefined && bgPicture === 'all':
                twelveMessageModalUI.removeClass('allBoardscompleted');
                twelveMessageModalUI.addClass('boardCompleted');
                break;

            case  bgPicture !== undefined && bgPicture === 'simple':
            default:
                twelveMessageModalUI.removeClass('allBoardscompleted');
                twelveMessageModalUI.addClass('boardCompleted');
        }
        twelveMessageHeadingUI.html(messageData.heading);
        twelveMessageParagraphUI.html(messageData.paragraph);
        twelveBoardModalUI.fadeIn(500);

        setTimeout(function () {
            if (counterToReset !== undefined) {
                twelveCardsGameCounters[counterToReset] = 0;
            }
            ;
            twelveBoardModalUI.fadeOut(500);
        }, messageData.timeout);
    }

    // ===========================
    // ======== VALIDATIONS ========
    function validateAllBoardsCompleted() {
        console.log(completedAllBoards.length);
        if (completedAllBoards.length < 6) return;
        showWinUI('message text', 'counterOne')
    }

    function validateAnyBoardCompleted(counterCards, messageWinnerBoard) {
        console.log(twelveCardsGameCounters);
        if (twelveCardsGameCounters[counterCards] < 12) return;

        // twelveOptionsUI.children( '.twelve-option' ).eq( twelveCardsGametype - 1 )
        //     .removeClass( 'current' )
        //     .addClass( 'made' );
        $(".twelve-option[data-sort='" + twelveCardsGameSort + "']")
            .removeClass('current')
            .addClass('made');
        completedAllBoards.push(twelveCardsGametype);

        // validateAllBoardsCompleted();

        if (completedAllBoards.length < 6) {
            setTimeout(function () {
                showWinUI({
                    heading: playerName,
                    paragraph: 'Has completado el tablero actual, selecciona otro para seguir jugando.',
                    timeout: 7000
                });
            }, 500);
        } else {
            setTimeout(function () {
                showWinUI({
                    heading: '' + playerName + '',
                    paragraph: 'Completaste el entrenamiento requerido para ser un <strong>Detective de invasoras</strong>. Ahora regístrate en <a href="https://www.naturalista.mx" target="_blank">NaturaLista</a> y comparte lo que ves a tu alrededor, para ayudar a descubrir nuevas especies.',
                    timeout: 60000
                }, null, 'all');
            }, 500);
        }
    }

    function validateBoardCompletedOne() {
        if (twelveCardsGameCounters.counterOne < 12) return;

        // twelveOptionsUI.children( '.twelve-option' ).eq( twelveCardsGametype - 1 )
        $(".twelve-option[data-sort='" + twelveCardsGameSort + "']")
            .removeClass('current')
            .addClass('made');
        completedAllBoards.push(twelveCardsGametype);
        validateAllBoardsCompleted();
        showWinUI('message text', 'counterOne')
    }

    function validateBoardCompletedTwo() {
        if (twelveCardsGameCounters.counterTwo < 12) return;

        // twelveOptionsUI.children( '.twelve-option' ).eq( twelveCardsGametype - 1 )
        $(".twelve-option[data-sort='" + twelveCardsGameSort + "']")
            .removeClass('current')
            .addClass('made');
        completedAllBoards.push(twelveCardsGametype);
        validateAllBoardsCompleted();
        showWinUI('message text', 'counterTwo')
    }

    function validateBoardCompletedThree() {
        if (twelveCardsGameCounters.counterThree < 12) return;

        // twelveOptionsUI.children( '.twelve-option' ).eq( twelveCardsGametype - 1 )
        $(".twelve-option[data-sort='" + twelveCardsGameSort + "']")
            .removeClass('current')
            .addClass('made');
        completedAllBoards.push(twelveCardsGametype);
        validateAllBoardsCompleted();
        showWinUI('message text', 'counterThree')
    }

    function validateBoardCompletedFour() {
        if (twelveCardsGameCounters.counterFour < 12) return;

        // twelveOptionsUI.children( '.twelve-option' ).eq( twelveCardsGametype - 1 )
        $(".twelve-option[data-sort='" + twelveCardsGameSort + "']")
            .removeClass('current')
            .addClass('made');
        completedAllBoards.push(twelveCardsGametype);
        validateAllBoardsCompleted();
        showWinUI('message text', 'counterFour')
    }

    function validateBoardCompletedFive() {
        if (twelveCardsGameCounters.counterFive < 12) return;

        // twelveOptionsUI.children( '.twelve-option' ).eq( twelveCardsGametype - 1 )
        $(".twelve-option[data-sort='" + twelveCardsGameSort + "']")
            .removeClass('current')
            .addClass('made');
        completedAllBoards.push(twelveCardsGametype);
        validateAllBoardsCompleted();
        showWinUI('message text', 'counterFive')
    }

    function validateBoardCompletedSix() {
        if (twelveCardsGameCounters.counterSix < 12) return;

        // twelveOptionsUI.children( '.twelve-option' ).eq( twelveCardsGametype - 1 )
        $(".twelve-option[data-sort='" + twelveCardsGameSort + "']")
            .removeClass('current')
            .addClass('made');
        completedAllBoards.push(twelveCardsGametype);
        validateAllBoardsCompleted();
        showWinUI('message text', 'counterSix')
    }

    // ---------------------------

    function validateBoardCompleted() {
        if (twelveCardsMatches !== twelveCardsStacks) return;

        // timer.stop()
        twelveCardsChrono.stop();
        twelveMessageHeaderUI.text('¡Felicidades ' + playerName + '!');
        twelveBoardModalUI.fadeIn(500);
        console.log(playerName);
    }

    function validateCardsMatch() {
        var cardOneObj = twelveCardsObjs[twelveCardsChoices[0]];
        var cardTwoObj = twelveCardsObjs[twelveCardsChoices[1]];
        var cardThreeObj = twelveCardsObjs[twelveCardsChoices[2]];

        var cardImageOne = cardOneObj.image;
        var cardImageTwo = cardTwoObj.image;
        var cardImageThree = cardThreeObj.image;

        var cardOneUI = getCardFromID(twelveCardsChoices[0]);
        var cardTwoUI = getCardFromID(twelveCardsChoices[1]);
        var cardThreeUI = getCardFromID(twelveCardsChoices[2]);

        var timeout = 3000;


        // console.log( cardOneObj, cardTwoObj );

        if ((cardImageOne === cardImageTwo) &&
            (cardImageTwo === cardImageThree) &&
            (cardImageOne === cardImageThree)) {
            twelveCardsMatches++;

            // cardOneObj.matched = true;
            // console.log( cardOneObj, cardTwoObj);
            cardOneObj.matched = cardTwoObj.matched = cardThreeObj.matched = true;
            cardOneUI.addClass('matched');
            cardTwoUI.addClass('matched');
            cardThreeUI.addClass('matched');
            timeout = 500;

            console.log(`%c cards matched `, 'background: #fb0; color: #fff;');
            validateBoardCompleted();
        } else {
            console.log('cards no matched');
        }

        twelveCardsTimeout = setTimeout(function () {
            cardOneUI.removeClass('show');
            cardTwoUI.removeClass('show');
            cardThreeUI.removeClass('show');
            twelveCardsTimeout = null;
            twelveCardsChoices.length = 0;

            console.log('time out', twelveCardsTimeout);
        }, timeout);
    }

    function validateCardChoice(currentCardID) {
        var currentCard = null;

        if (twelveCardsChoices.length >= 3 ||
            twelveCardsChoices.indexOf(currentCardID) >= 0 ||
            twelveCardsObjs[currentCardID].matched) return;

        currentCard = getCardFromID(currentCardID)
        currentCard.addClass('show');
        console.log(currentCard);
        console.log(currentCard[0]);


        twelveCardsChoices.push(currentCardID);
        if (twelveCardsChoices.length === 3) validateCardsMatch();
        // console.log( twelveCardsChoices );
    }

    function getViewUI() {

        console.log("getting UI elements");
    }

    function setViewUI() {

        // -------------------------------------------------
        // Get External Data from Views
        playerName = window.TwelveApp.getPlayerName();
        console.log('PLAYERNAME', playerName);

        // -------------------------------------------------
        // Get HTML Elements
        appHolder = $('#appHolder');
        apploadedViews = window.TwelveApp.loadedViews;

        twelveInfoTitleUI = $('#twelveInfoTitle');
        twelveInfoCronoUI = $('#twelveInfoCrono');

        twelveBoardDragUI = $('#twelveBoardDrag');
        twelveCardsUI = twelveBoardDragUI.children('span.card');
        twelveBoardDropUI = $('#twelveBoardDrop');
        twelveBoardDragTitleUI = $('#twelveBoardDragTitle');
        twelveBoardDropTitleUI = $('#twelveBoardDropTitle');
        twelveDropZonesUI = twelveBoardDropUI.children('span.card');

        twelveOptionsUI = $('#twelveOptions');
        twelveBoardModalUI = $('#twelveBoardModal');
        twelveMessageModalUI = $('#twelveMessageModal');
        twelveMessageHeadingUI = $('#twelveMessageHeading');
        twelveMessageParagraphUI = $('#twelveMessageParagraph');
        twelveBtnMessageUI = $('#twelveBtnMessage');
        twelveMessageHeaderUI = $('#twelveMessageHeader');
        // nextBtnUI = $( '#loginBtnNext' );
        btnResetUI = $('#btnReset');
        btnHomeUI = $('#btnHome');

        // -------------------------------------------------
        // Set Logic Object
        twelveCardsChrono = new SimpleChrono(twelveInfoCronoUI);

        // -------------------------------------------------
        // Set Init config
        appHolder.addClass('playing');
        twelveBoardModalUI.hide();
        twelveCardsUI.removeClass('matched');

        // -------------------------------------------------
        // Set EventHandlers

        // nextBtnUI.on( 'click', function() {
        //     appHolder.html( apploadedViews[ 'viewSetup' ].viewContent );
        //     window.ViewSetup.setViewUI();
        // });

        // --------- Modal Window Click Handler ---------
        twelveBtnMessageUI.on('click', function () {
            twelveBoardModalUI.fadeOut(500);
        });

        // console.log( twelveCardsUI );
        // Draggable Cards Click Handler

        // --------- Drag Cards Click Handlers ---------
        twelveBoardDragUI.delegate('.card', 'click', function (e) {
            // var dataId = $( e.target ).attr( 'data-id' ) || $( e.target ).parent().attr( 'data-id' ) ;
            // if( twelveCardsChrono.chronoStatus === 'iddle' && 1 !== true ) {
            //     twelveBoardStarted = true;
            //     twelveCardsChrono.reset();
            //     twelveCardsChrono.start();
            // }

            // if( dataId !== undefined ) validateCardChoice( dataId );
        });

        // --------- Drag Cards DragStart Handlers ---------
        twelveBoardDragUI.delegate('.card-front', 'dragstart', function (e) {
            e.originalEvent.dataTransfer.setData('currentCardId', e.target.id);
            // e.originalEvent.dataTransfer.effectAllowed = 'move';
            // console.log( e.type );
        });


        // --------- Drop Zones Drop Handlers ---------
        twelveBoardDropUI.delegate('.card', 'drop', function (e) {
            e.preventDefault();
            // e.originalEvent.dataTransfer.dropEffect = 'move';

            // Temporal variables
            var startindex = null;
            var endindex = null;
            var oldimgpath = null;
            var newimgpath = null;

            // dropZone
            var dropZone = $(e.target);

            // dragItem
            var dragItem = $('#' + e.originalEvent.dataTransfer.getData('currentCardId'));

            // console.log( dragItem.attr( 'id' ), dropZone.attr( 'id' ),
            //     dragItem.attr( 'id' ) === dropZone.attr( 'id' ) );

            if (dragItem.attr('id') === dropZone.attr('id')) {
                // append item
                dragItem.appendTo(dropZone);
                dropZone.addClass('paired');

                switch (twelveCardsGametype) {

                    case 3:
                        oldimgpath = dragItem.css('background-image');
                        startindex = oldimgpath.indexOf('_imgs/');
                        endindex = oldimgpath.indexOf('.png');
                        newimgpath = (oldimgpath.substring(startindex, endindex) + '-copia.png').replace('-cor-', '-');
                        dragItem.css('background-image', 'url(' + newimgpath + ')');

                        break;


                    case 4:
                        oldimgpath = dragItem.css('background-image');
                        startindex = oldimgpath.indexOf('_imgs/')
                        endindex = oldimgpath.indexOf('.png')
                        newimgpath = oldimgpath.substring(startindex, endindex - 2) + '.png';
                        dragItem.css('background-image', 'url(' + newimgpath + ')');

                        break;
                }

                // if( twelveCardsGametype === 3 || twelveCardsGametype === 4 ) {}

                console.log(twelveCardsGametype);
                switch (twelveCardsGametype) {
                    case 1:
                        ++twelveCardsGameCounters.counterOne;
                        validateAnyBoardCompleted('counterOne');
                        // validateBoardCompletedOne();
                        break
                    case 2:
                        ++twelveCardsGameCounters.counterTwo;
                        validateAnyBoardCompleted('counterTwo');
                        // validateBoardCompletedTwo();
                        break
                    case 3:
                        ++twelveCardsGameCounters.counterThree;
                        validateAnyBoardCompleted('counterThree');
                        // validateBoardCompletedThree();
                        break
                    case 4:
                        ++twelveCardsGameCounters.counterFour;
                        validateAnyBoardCompleted('counterFour');
                        // validateBoardCompletedFour();
                        break
                    case 5:
                        ++twelveCardsGameCounters.counterFive;
                        validateAnyBoardCompleted('counterFive');
                        // validateBoardCompletedFive();
                        break
                    case 6:
                        ++twelveCardsGameCounters.counterSix;
                        validateAnyBoardCompleted('counterSix');
                        // validateBoardCompletedSix();
                        break
                }
            }

        });

        // --------- Drop Zones DragOver Handlers ---------
        twelveBoardDropUI.delegate('.card', 'dragover', function (e) {
            e.preventDefault();
            // e.originalEvent.dataTransfer.effectAllowed = 'move';
            // console.log( e, e.target.getAttribute( 'data-id' ), e.type );
        });

        // --------- Lists Options Handler ---------
        // '.card:not(:has(.card-face))
        twelveOptionsUI.delegate('.twelve-option:not(.made)', 'click', function (e) {
            twelveCardsGameSort = parseInt($(e.target).attr('data-sort'));
            // console.log( 'TWELVECARDSGAMESORT ', twelveCardsGameSort );
            var num = leadZeros(parseInt($(e.target).attr('data-id')) + 1, 2);
            var counter = $(e.target).attr('data-counter');
            createTwelveBoard('gallery-' + num + '.json', twelveCardsUI, twelveDropZonesUI, counter);

            setMatchesTitles(num);

        });

        // btn-reset
        btnResetUI.on('click', function (e) {
            console.log(e.target.id);

            resetTwelveGame();

            appHolder.html(apploadedViews['viewTwelve'].viewContent);
            window.TwelveApp.ViewTwelve.setViewUI();

            createTwelveBoard('gallery-04.json', twelveCardsUI, twelveDropZonesUI);
            setMatchesTitles(null);

            console.log("TWELVECARDSGAMECOUNTERS", twelveCardsGameCounters);
        });

        // btn-home
        btnHomeUI.on('click', function (e) {
            resetTwelveGame();
            console.log(e.target.id);
            // appHolder.html( apploadedViews[ 'viewLogin' ].viewContent );
            // window.TwelveApp.ViewLogin.setViewUI();
            appHolder.html(apploadedViews['viewSetup'].viewContent);
            window.TwelveApp.ViewSetup.setViewUI();
        });


        // -------------------------------------------------
        // twelveCardsGameSort = twelveCardsGameSort === null ? twelveCardsGameSort : 3 ;
        createTwelveBoard('gallery-04.json', twelveCardsUI, twelveDropZonesUI);
        setMatchesTitles(null);

        console.log(`%c SETTING ${this.name} UI ELEMENTS`, 'background: gold; color: purple;');
    };

    function setMatchesTitles(numberChoice, descriptionData) {
        console.log(numberChoice);
        if (parseInt(numberChoice) !== 1) {
            twelveBoardDragTitleUI.html('&nbsp;');
            twelveBoardDropTitleUI.html('&nbsp;');
        } else {
            twelveBoardDragTitleUI.html('Exóticas');
            twelveBoardDropTitleUI.html('Nativas');
        }
    }

    function rearrangeTwelveBoard(jsonImages, dragCards, dropZones) {
        var draggedCards = twelveBoardDragUI.children('.card:not(:has(.card-face))')
        var droppedCards = twelveBoardDropUI.children('.card').children('.card-face');

        for (var i = droppedCards.length - 1; i >= 0; i--) {
            droppedCards.eq(i).appendTo(draggedCards.eq(i))
        }

        twelveDropZonesUI
            .css('background-image', '')
            .removeClass('display-match')
        ;
    }

    function dropMatchText(dropCardUI, imagespath, shuffleDropZone) {
        // dropCardUI
        //     .addClass( 'display-match' )
        //     .attr( 'data-display', shuffleDropZone.title )
        //     .attr( 'id', shuffleDropZone.id );
        dropCardUI
            .css('background-image',
                'url(' + imagespath + shuffleDropZone.pieceb + ')')
            .attr('id', shuffleDropZone.id);

        console.log('One: Match Text');
    }

    function dropMatchSame(dropCardUI, imagespath, shuffleDropZone) {
        dropCardUI
            .css('background-image',
                'url(' + imagespath + shuffleDropZone.image + ')')
            .attr('id', shuffleDropZone.id);

        console.log('Two: Match Same');
    }

    function dropMatchMissing(dropCardUI, imagespath, shuffleDropZone) {
        dropCardUI
            .css('background-image',
                'url(' + imagespath + shuffleDropZone.pieceb + ')')
            .attr('id', shuffleDropZone.id);

        console.log('Three: Match Missing');
    }

    function dropMatchTwoshapes(dropCardUI, imagespath, shuffleDropZone) {
        dropCardUI
            .css('background-image',
                'url(' + imagespath + shuffleDropZone.pieceb + ')')
            .attr('id', shuffleDropZone.id);

        console.log('Four: Match Two Shapes');
    }

    function dropMatchHowmany(dropCardUI, imagespath, shuffleDropZone) {
        // dropCardUI
        //     .addClass( 'display-match' )
        //     .attr( 'data-display', shuffleDropZone.awr )
        //     .attr( 'id', shuffleDropZone.id );
        dropCardUI
            .css('background-image',
                'url(' + imagespath + shuffleDropZone.pieceb + ')')
            .attr('id', shuffleDropZone.id);

        console.log('Five: Match How Many');
    }

    function dropMatchDifferent(dropCardUI, imagespath, shuffleDropZone) {
        dropCardUI
            .css('background-image',
                'url(' + imagespath + shuffleDropZone.pieceb + ')')
            .attr('id', shuffleDropZone.id);

        console.log('One: Match Text');
    }


    function createTwelveBoard(jsonImages, dragCards, dropZones, counterCards) {

        // REARRANGE DRAG/DROP CARDS
        rearrangeTwelveBoard();

        // TEMPORAL VARS
        var currentImagesDir = null;
        var imagespath = null;
        var shuffleDragCards = null;
        var shuffleDropZones = null;

        var cardElement = null;
        var dragCard = null;
        var cardDrop = null;
        var buildDropMethods = {
            method1: dropMatchText,
            method2: dropMatchSame,
            method3: dropMatchMissing,
            method4: dropMatchTwoshapes,
            method5: dropMatchHowmany,
            method6: dropMatchDifferent
        };

        twelveBoardStarted = false;
        twelveCardsChrono.reset(true, true, true);
        twelveCardsUI.removeClass('matched show');
        twelveDropZonesUI.removeClass('matched show paired');
        twelveCardsMatches = 0;

        $.get(dirImagesJson + jsonImages, function (data, status) {

            console.log(typeof data, data instanceof Object);
            var dataParsed = typeof data === 'string' ? JSON.parse(data) : data;

            if (status === 'success') {
                twelveCardsData = dataParsed;
                twelveCardsGametype = dataParsed.gametype;
                currentImagesDir = twelveCardsData.directory + '/';
                imagespath = dirImages + currentImagesDir;
                twelveCardsStacks = twelveCardsData.gallery.length;

                twelveInfoTitleUI.text(dataParsed.gamedescription);

                twelveCardsObjs = twelveCardsData.gallery;
                shuffleDragCards = shuffleTwelveCards(twelveCardsObjs.slice(0));
                shuffleDropZones = shuffleTwelveCards(twelveCardsObjs.slice(0));

                console.log("= twelveCardsObjs =", twelveCardsObjs);
                console.log(twelveCardsGametype);

                /*
                switch( twelveCardsGametype ) {
                    case 1:
                        console.log( 'Match Text' );
                        break;
                    case 2:
                        console.log( 'Match Same' );
                        break;
                    case 3:
                        console.log( 'Match Missing Part' );
                        break;
                    case 4:
                        console.log( 'Match Two Shapes' );
                        break;
                    case 5:
                        console.log( 'Match How Many' );
                        break;
                    case 6:
                        console.log( 'Match Unknown' );
                        break;
                }
                */

                if (counterCards !== undefined) {
                    twelveCardsGameCounters[counterCards] = 0;
                }

                twelveOptionsUI.children('.twelve-option').removeClass('current');
                // twelveOptionsUI.children( '.twelve-option' ).eq( twelveCardsGametype - 1 )
                //     .addClass( 'current' );

                console.log("CHECK twelveCardsGameSort", twelveCardsGameSort);
                twelveCardsGameSort = twelveCardsGameSort === null ? 3 : twelveCardsGameSort;
                console.log("CHECK twelveCardsGameSort", twelveCardsGameSort);
                $(".twelve-option[data-sort='" + twelveCardsGameSort + "']")
                    .addClass('current');

                console.log('CURRENT...', $(".twelve-option[data-sort='" + twelveCardsGameSort + "']"));

                for (var i = 0, l = twelveCardsObjs.length; i < l; i++) {
                    $(dragCards[i]).children('.card-face').eq(0)
                        .css('background-image',
                            'url(' + imagespath + shuffleDragCards[i].image + ')')
                        .attr('id', shuffleDragCards[i].id);

                    buildDropMethods['method' + twelveCardsGametype]($(dropZones[i]), imagespath, shuffleDropZones[i]);
                }
            }
            // showWinUI( { heading: '' + playerName + '', paragraph: 'Completaste el entrenamiento requerido para ser un <strong>Detective de invasoras</strong>. Ahora regístrate en <a href="https://www.naturalista.mx" target="_blank">NaturaLista</a> y comparte lo que ves a tu alrededor, para ayudar a descubrir nuevas especies.', timeout: 700000 }, null, 'all' );
        });
    }


    console.log(`%c LOADING ${this.name} `, 'background: #09f; color: #fff;');
    return {
        // Returns the ViewTwelve function itself
        // name: ViewTwelve,

        name: this.name,
        setViewUI: setViewUI
    };
})();
