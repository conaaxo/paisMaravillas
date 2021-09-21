window.MemoryApp.ViewMemory = (function ViewMemory() {
    this.name = "ViewMemory";

    // Main App DOM Views Holder
    // Main App OBJECTS Views Holder
    var appHolder      = null;
    var apploadedViews = null;

    // Images & JSON Files firectories
    // var dirImagesJson = '../../_imgs/views-imgs/view-memory/galleries-json/';
    var dirImagesJson  = '_imgs/views-imgs/view-memory/galleries-json/';
    var dirImages      = '_imgs/views-imgs/view-memory/';
    var currentImagesDir = null;
    var imagespath = null;

    var dirsImagesGroups = [ 1, 2, 3 ];
    var dirRandomIndex = gameGetTopic();
    // console.log( dirRandomIndex, dirsImagesGroups, dirsImagesGroups.length );
    // console.log( dirsImagesGroups );

    // Data from json files
    var memoryCardsData             = null;
    var memoryCardsObjsStageOne     = null;
    var memoryCardsObjsStageTwo     = null;
    var memoryCardsObjsStageThree   = null;
    var memoryCardsObjsStageCurrent = null;
    var memoryCardsMapStageTwo      = { 0: 'image', 1: 'imagena', 2: 'imagena' };
    var memoryCardsMapStageThree    = { 0: 'image', 1: 'imagena', 2: 'imagepa' };

    // VIEW UI DOM Elements
    var memoryInfoTitleUI         = null;
    var memoryInfoCronoUI         = null;
    var memoryBoardUI             = null;
    var memoryCardsUI             = null;
    // var memoryCardsFacesUI    = null;
    var memoryOptionsUI           = null;
    var memoryList                = null;
    var memoryBoardModalUI        = null;
    var memoryMessageUI           = null;
    var memoryMessageTextUI       = null;
    var memoryBtnMessageUI        = null;
    var memoryMessageHeaderUI     = null;
    var memoryBtnGuideUI          = null;
    var memoryBtnResetUI          = null;
    var memoryBtnHomeUI           = null;
    var memoryGameGuideUI         = null;
    var btnClosePDFUI             = null;
    var nextBtnUI                 = null;

    // Game Flags
    var memoryGameStages          = {
        STAGE_ONE:   'stageOne',
        STAGE_TWO:   'stageTwo',
        STAGE_THREE: 'stageThree'
    };
    var memoryGameCurrentStage    = memoryGameStages.STAGE_ONE;


    var memoryBoardStarted     = false;
    var memoryBoardCompleted   = false;
    var memoryCardsStacks      = 0;
    var memoryCardsMatches     = 0;
    var memoryCardsAttempts    = 0;

    var memoryCardsChrono     = null;
    var memoryCardsTimeout    = null;
    var memoryCardsChoices    = [];
    var memoryCardsLevels     = {
        GAME_LEVEL_BEGINNER: 'beginner',
        GAME_LEVEL_EXPERT:   'expert'
    };

    // External Data
    var playerName = null;
    var gameLevelMode = memoryCardsLevels.GAME_LEVEL_BEGINNER;

    // ===========================
    // ======== RESET GAME ========
    function resetMemoryGame() {
        currentImagesDir = null;
        imagespath       = null;

        // dirsImagesGroups = [ 1, 2, 3 ];
        dirsImagesGroups[ 0 ] = 1;
        dirsImagesGroups[ 1 ] = 2;
        dirsImagesGroups[ 2 ] = 3;
        dirRandomIndex = gameGetTopic();

        // Data from json files
        memoryCardsData             = null;
        memoryCardsObjsStageOne     = null;
        memoryCardsObjsStageTwo     = null;
        memoryCardsObjsStageThree   = null;
        memoryCardsObjsStageCurrent = null;

        // memoryCardsMapStageTwo      = { 0: 'image', 1: 'imagena', 2: 'imagena' };
        memoryCardsMapStageTwo[ '0' ] = 'image';
        memoryCardsMapStageTwo[ '1' ] = 'imagena';
        memoryCardsMapStageTwo[ '2' ] = 'imagena';

        // memoryCardsMapStageThree    = { 0: 'image', 1: 'imagena', 2: 'imagepa' };
        memoryCardsMapStageThree[ '0' ] = 'image';
        memoryCardsMapStageThree[ '1' ] = 'imagena';
        memoryCardsMapStageThree[ '2' ] = 'imagepa';

        // VIEW UI DOM Elements
        memoryInfoTitleUI         = null;
        memoryInfoCronoUI         = null;
        memoryBoardUI             = null;
        memoryCardsUI             = null;
        // var memoryCardsFacesUI    = null;
        memoryOptionsUI           = null;
        memoryList                = null;
        memoryBoardModalUI        = null;
        memoryMessageUI           = null;
        memoryMessageTextUI       = null;
        memoryBtnMessageUI        = null;
        memoryMessageHeaderUI     = null;
        memoryGameGuideUI         = null;
        btnClosePDFUI             = null;
        nextBtnUI                 = null;

        // Game Flags
        memoryGameCurrentStage    = memoryGameStages.STAGE_ONE;

        memoryBoardStarted     = false;
        memoryBoardCompleted   = false;
        memoryCardsStacks      = 0;
        memoryCardsMatches     = 0;
        memoryCardsAttempts    = 0;

        memoryCardsChrono     = null;
        memoryCardsTimeout    = null;
        memoryCardsChoices.length = 0;

        // External Data
        playerName = null;
        gameLevelMode = memoryCardsLevels.GAME_LEVEL_BEGINNER;
    }


    function leadZeros( n, width, z ) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array( width - n.length + 1).join( z ) + n;
    }

    function getCardFromID( cardID ) {
        return  $( memoryCardsUI[ cardID ] ).addClass( 'show' );
    }

    /*
    function mixMemoryCards( shuffleDataArray ) {
        var tempItem = null;
        var counter = 0;
        var limit = shuffleDataArray.length;

        while( counter < limit ) {
            tempItem = shuffleDataArray.splice( Math.floor( Math.random() * shuffleDataArray.length ), 1 );
            shuffleDataArray.push( tempItem[ 0 ] );

            counter++;
        }
        return shuffleDataArray;
    }
    */
    function mixMemoryCards( shuffleDataArray ) {
        var tempArray = [];
        while( shuffleDataArray.length ) {
            tempArray.push( shuffleDataArray.splice( Math.floor( Math.random() * shuffleDataArray.length ), 1 )[ 0 ] );
        }
        return shuffleDataArray = shuffleDataArray.concat( tempArray );
    }
    function shuffleMemoryCards( arrayObj ) {
        var currentIndex =  arrayObj.length, temporaryValue, randomIndex;

        while( 0 !== currentIndex ) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue =  arrayObj[currentIndex];
             arrayObj[currentIndex] =  arrayObj[randomIndex];
             arrayObj[randomIndex] = temporaryValue;
        }
        return  arrayObj;
    }
    function gameDisplayStageCompleted( messageCompleted, timeoutCompleted ) {
        console.log( $( '#memoryMessageText' ) );
        memoryMessageTextUI.html( messageCompleted );
        memoryBoardModalUI.fadeIn( 500 );
        setTimeout( function() {
            memoryBoardModalUI.fadeOut( 500 );
        }, timeoutCompleted );
    }


    function gameGetTopic() {
        if( dirsImagesGroups.length === 0 ) return;

        var tempIndex = Math.floor( dirsImagesGroups.length * Math.random() );
        return dirsImagesGroups.splice( tempIndex, 1 )[ 0 ];
    }

    function gameSetStage( stageID ) {
        switch( stageID ) {
            case 0:
            case '0':
            case memoryGameStages.STAGE_ONE:
                memoryGameCurrentStage = memoryGameStages.STAGE_ONE;
                break;

            case 1:
            case '1':
            case memoryGameStages.STAGE_TWO:
                memoryGameCurrentStage = memoryGameStages.STAGE_TWO;
                break;

            case 2:
            case '2':
            case memoryGameStages.STAGE_THREE:
                memoryGameCurrentStage = memoryGameStages.STAGE_THREE;
                break;
        }
    }

    function gameGetStage() {
        return memoryGameCurrentStage;
    }


    function validateBoardCompleted() {
        if( memoryCardsMatches !== memoryCardsStacks ) return;

        var nextStage             = null;
        var messageStageCompleted = null;
        var modalTimeout          = 5000;

        switch( true ) {

            case gameGetStage() === memoryGameStages.STAGE_ONE:
                messageStageCompleted = /* playerName + */ ' Has completado la primera etapa.<br>Ahora pasa a la etapa 2.'
                nextStage = createStageBoardTwo.bind( null, memoryCardsUI );
                console.log( gameGetStage() );
                break;

            case gameGetStage() === memoryGameStages.STAGE_TWO:
                messageStageCompleted = /* playerName + */ ' Has completado la segunda etapa.<br>Ahora pasa a la etapa 3.'
                nextStage = createStageBoardThree.bind( null, memoryCardsUI );
                console.log( gameGetStage() );
                break;

            case gameGetStage() === memoryGameStages.STAGE_THREE:
                if( dirsImagesGroups.length > 0 ) {
                    messageStageCompleted = /* playerName + */ ' ¡Felicidades! Has completado la tercera etapa.<br>Terminaste el juego ¿quieres jugar otra vez?'
                    nextStage = loadDataMemoryBoard.bind( null, 'gallery-' + leadZeros( gameGetTopic(), 2 ) + '.json' , memoryCardsUI );
                }
                else {
                    modalTimeout = 10000;
                    messageStageCompleted = /* playerName + */ ' Has completado TODOS los niveles.';
                    nextStage = gameDisplayStageCompleted.bind( null, messageStageCompleted, modalTimeout );
                }
                break;
        }

        memoryCardsChrono.stop();
        // memoryMessageHeaderUI.text( '¡Felicidades ' + playerName  + '!' );
        
        // gameDisplayStageCompleted( messageStageCompleted );
        
        setTimeout( function() {
            console.log( 'BEFORE nextStage()', messageStageCompleted );
            gameDisplayStageCompleted( messageStageCompleted, modalTimeout );
            nextStage()
            // memoryBoardModalUI.fadeOut( 500 );
        }, modalTimeout );
        console.log( playerName );
    }

    function setCurrentCardsStage( stageID ) {
        switch( stageID ) {
            case 0:
            case '0':
            case memoryGameStages.STAGE_ONE:
                memoryCardsObjsStageCurrent = memoryCardsObjsStageOne;
                break;

            case 1:
            case '1':
            case memoryGameStages.STAGE_TWO:
                memoryCardsObjsStageCurrent = memoryCardsObjsStageTwo;
                break;

            case 1:
            case '1':
            case gameGetStage() === memoryGameStages.STAGE_THREE:
                memoryCardsObjsStageCurrent = memoryCardsObjsStageThree;
                break;
        }
        return memoryCardsObjsStageCurrent;
    }
    function getCurrentCardsStage() {
        return memoryCardsObjsStageCurrent;
    }

    function validateCardsMatch() {
        var memoryCardsObjsCurrentStage = getCurrentCardsStage();
        var cardOneObj   = memoryCardsObjsCurrentStage[ memoryCardsChoices[ 0 ] ];
        var cardTwoObj   = memoryCardsObjsCurrentStage[ memoryCardsChoices[ 1 ] ];
        var cardThreeObj = memoryCardsObjsCurrentStage[ memoryCardsChoices[ 2 ] ];

        var cardImageOne   = cardOneObj.image;
        var cardImageTwo   = cardTwoObj.image;
        var cardImageThree = cardThreeObj.image;

        var cardIdOne   = cardOneObj.id;
        var cardIdTwo   = cardTwoObj.id;
        var cardIdThree = cardThreeObj.id;


        var cardOneUI   = getCardFromID( memoryCardsChoices[ 0 ] );
        var cardTwoUI   = getCardFromID( memoryCardsChoices[ 1 ] );
        var cardThreeUI = getCardFromID( memoryCardsChoices[ 2 ] );

        console.log( 'cardsObjsImgs', cardImageOne, cardImageTwo, cardImageThree );
        console.log( 'cardsObjs', cardOneObj, cardTwoObj, cardThreeObj );
        console.log( 'cardsUIs', cardOneUI, cardTwoUI, cardThreeUI );

        var timeout = 3000;


        // console.log( cardOneObj, cardTwoObj );

        // if( ( cardImageOne === cardImageTwo ) &&
        //     ( cardImageTwo === cardImageThree ) &&
        //     ( cardImageOne === cardImageThree ) ) {
        if( ( cardIdOne === cardIdTwo ) &&
            ( cardIdTwo === cardIdThree ) &&
            ( cardIdOne === cardIdThree ) ) {
            memoryCardsMatches ++;

            // cardOneObj.matched = true;
            // console.log( cardOneObj, cardTwoObj);
            cardOneObj.matched = cardTwoObj.matched = cardThreeObj.matched = true;
            cardOneUI.addClass( 'matched' );
            cardTwoUI.addClass( 'matched' );
            cardThreeUI.addClass( 'matched' );
            timeout = 500;

            console.log( `%c cards matched `, 'background: #fb0; color: #fff;');
            validateBoardCompleted();
        }
        else {
            console.log( 'cards no matched' );
        }

        memoryCardsTimeout = setTimeout( function() {
            cardOneUI.removeClass( 'show' );
            cardTwoUI.removeClass( 'show' );
            cardThreeUI.removeClass( 'show' );
            memoryCardsTimeout = null;
            memoryCardsChoices.length = 0;

            console.log( 'time out', memoryCardsTimeout );
        }, timeout );
    }

    function validateCardChoice( currentCardID ) {
        console.log( gameGetStage() );
        console.log( '---- 1 ----' );
        // var memoryCardsObjsCurrentStage = getCurrentCardsStage();
        console.log( '---- 2 ----', 
            memoryCardsObjsStageCurrent,
            memoryCardsObjsStageOne,
            memoryCardsObjsStageTwo,
            memoryCardsObjsStageThree,
            memoryCardsObjsStageOne === memoryCardsObjsStageTwo,
            memoryCardsObjsStageTwo === memoryCardsObjsStageThree,
            memoryCardsObjsStageThree === memoryCardsObjsStageOne
         );

        // console.log( 
        //     currentCardID,
        //     memoryCardsChoices,
        //     memoryCardsChoices.length >= 3,
        //     memoryCardsChoices.indexOf( currentCardID ) >= 0,
        //     memoryCardsObjsCurrentStage,
        //     memoryCardsObjsCurrentStage[ currentCardID ].matched  )

        if( memoryCardsChoices.length >= 3 ||
            memoryCardsChoices.indexOf( currentCardID ) >= 0 ||
            memoryCardsObjsStageCurrent[ currentCardID ].matched  ) return;
        console.log( '---- 3 ----' );

        getCardFromID( currentCardID ).addClass( 'show' );

        memoryCardsChoices.push( currentCardID );
        if( memoryCardsChoices.length === 3 ) validateCardsMatch();
        // console.log( memoryCardsChoices );
    }

    function setGameTitle( dataTitle ) {
        memoryInfoTitleUI.html( dataTitle );
    }

    function getViewUI() {
        console.log("getting UI elements");
    }


    function setViewUI() {

        // -------------------------------------------------
        // Get External Data from Views
        playerName = window.MemoryApp.getPlayerName();
        gameLevelMode = window.MemoryApp.getGameLevel() || gameLevelMode;
        // gameLevelMode = memoryCardsLevels.GAME_LEVEL_EXPERT;
        console.log( playerName, gameLevelMode );

        // -------------------------------------------------
        // Get HTML Elements
        appHolder = $( '#appHolder' );
        apploadedViews = window.MemoryApp.loadedViews;

        memoryInfoTitleUI     = $( '#memoryInfoTitle' );
        memoryInfoCronoUI     = $( '#memoryInfoCrono' );
        memoryBoardUI         = $( '#memoryBoard' );
        memoryCardsUI         = memoryBoardUI.children( 'span.card' );
        // memoryCardsFacesUI    = memoryCardsUI.children( '.card-face' );
        memoryOptionsUI       = $( '#memoryOptions' );
        memoryBoardModalUI    = $( '#memoryBoardModal' );
        memoryMessageUI       = $( '#memoryMessage' );
        memoryMessageTextUI   = $( '#memoryMessageText' );
        memoryBtnMessageUI    = $( '#memoryBtnMessage' );
        memoryMessageHeaderUI = $( '#memoryMessageHeader' );
        memoryBtnGuideUI      = $( '#memoryBtnGuide' );
        memoryBtnResetUI      = $( '#memoryBtnReset' );
        memoryBtnHomeUI       = $( '#memoryBtnHome' );
        memoryGameGuideUI     = $( '#memoryGameGuide' );
        btnClosePDFUI         = $( '#btnClosePDF' );
        // nextBtnUI = $( '#loginBtnNext' );

        // -------------------------------------------------
        // Check Game Help Mode
        checkGameHelpmode();

        // Set Logic Object
        memoryCardsChrono = new SimpleChrono( memoryInfoCronoUI );

        // -------------------------------------------------
        // Set Init config
        appHolder.addClass( 'playing' );
        memoryBoardModalUI.hide();
        memoryGameGuideUI.hide();
        memoryCardsUI.removeClass( 'matched' );

        // -------------------------------------------------
        // Set EventHandlers
        // nextBtnUI.on( 'click', function() {
        //     appHolder.html( apploadedViews[ 'viewSetup' ].viewContent );
        //     window.ViewSetup.setViewUI();
        // });
        memoryBtnMessageUI.on( 'click', function() {
            memoryBoardModalUI.fadeOut( 500 );
        });

        // console.log( memoryCardsUI );

        // --------- Cards Handler ---------
        memoryBoardUI.delegate( 'span.card', 'click', function( e ) {
            var dataId = $( e.target ).attr( 'data-id' ) || $( e.target ).parent().attr( 'data-id' ) ;
            if( memoryCardsChrono.chronoStatus === 'iddle' && memoryBoardStarted !== true ) {
                memoryBoardStarted = true;
                memoryCardsChrono.reset();
                memoryCardsChrono.start();
            }

            if( dataId !== undefined ) validateCardChoice( dataId );
        });
        // memoryCardsFacesUI.undelegate();

        // --------- Lists Options Handler ---------
        /*
        memoryOptionsUI.delegate( '.memory-option', 'click', function( e ) {
            var num = leadZeros( parseInt( $( e.target ).attr( 'data-id' ) ) + 1, 2 );
            loadDataMemoryBoard( 'gallery-' + num + '.json' , memoryCardsUI );
        });
        */
        memoryBtnGuideUI.on( 'click', function( e ) {
            console.log( e.target.id );
            memoryGameGuideUI.fadeIn( 500 );
        });
        memoryBtnResetUI.on( 'click', function( e ) {
            console.log( e.target.id );
            // resetMemoryGame();
            // setViewUI();
            appHolder.html( apploadedViews[ 'viewMemory' ].viewContent );
            window.MemoryApp.ViewMemory.setViewUI();
        });
        memoryBtnHomeUI.on( 'click', function( e ) {
            console.log( e.target.id );
            appHolder.html( apploadedViews[ 'viewSetup' ].viewContent );
            window.MemoryApp.ViewSetup.setViewUI();
        });
        btnClosePDFUI.on( 'click', function( e ) {
            console.log( e.target.id );
            memoryGameGuideUI.fadeOut( 500 );
        });


        // -------------------------------------------------
        loadDataMemoryBoard( 'gallery-' + leadZeros( dirRandomIndex, 2 ) + '.json' , memoryCardsUI );
        // loadDataMemoryBoard( 'gallery-01.json' , memoryCardsUI );


        console.log( `%c SETTING ${ this.name } UI ELEMENTS`, 'background: gold; color: purple;');
    };

    // ================================================================
    function activateGameHelpmode() {
        memoryBoardUI.addClass( 'helpmode' );
    }
    function deactivateGameHelpmode() {
        memoryBoardUI.removeClass( 'helpmode' );
    }
    function checkGameHelpmode() {
        if( window.location.hash === '#helpmode' ) {
            activateGameHelpmode();
        }
        else {
            deactivateGameHelpmode();
        }
        return memoryBoardUI.hasClass( 'helpmode' );
    }


    // ================================================================
    function resetStageBoard() {
        // memoryBoardStarted = false;
        // memoryCardsChrono.reset( true, true, true );

        memoryCardsChoices.length = 0;
        memoryCardsMatches = 0;
        memoryCardsUI.removeClass( 'matched show' );
        memoryCardsMatches = 0;
    }

    function resetMatchedArray( arrayToReset ) {
        console.log( arrayToReset );
        for( var i in arrayToReset ) {
            arrayToReset[ i ].matched = false;
            console.log( i.matched );
        }
        for( var i = 0 , l =  arrayToReset.length; i < l ; i++ ) {
            arrayToReset[ i ].matched = false;
            console.log( i.matched );
        }
    }

    function resetBgCards() {
        memoryBoardUI.find( '.card-back' ).removeClass( 'especie accionpositiva consecuencia' )
            // .removeClass( 'especie' )
            // .removeClass( 'accionpositiva' )
            // .removeClass( 'consecuencia' )
            ;
        console.log( memoryBoardUI.find( '.card-back' ).length );
    }
    function setBgCards( imageFile, cardBack ) {
        console.log( 'setBgCards', imageFile, cardBack );
        switch( true ) {
            case imageFile.indexOf( '-p.png' ) >= 0:
                cardBack.addClass( 'accionpositiva' );
                break;

            case imageFile.indexOf( '-n.png' ) >= 0:
                cardBack.addClass( 'consecuencia' );
                break;

            default:
                cardBack.addClass( 'especie' );
                break;
        }
    }

    function createStageBoardOne( listCardsUI ) {
        console.log( 'CREATING BOARD ONE' );
        resetBgCards();

        gameSetStage( 0 );
        setCurrentCardsStage( 0 )
        setGameTitle( 'Etapa 1: Encuentra la especie (3 veces)' );
        resetStageBoard();

        // TEMPORAL VARS
        var cardElement = null;
        var cardFront = null;
        var cardBack = null;
        var temporalCards = null;
        temporalCards = memoryCardsData.gallery.concat( memoryCardsData.gallery ).concat( memoryCardsData.gallery );
        memoryCardsObjsStageOne = shuffleMemoryCards( temporalCards );
        resetMatchedArray( memoryCardsObjsStageOne );

        memoryCardsObjsStageCurrent = memoryCardsObjsStageOne;
        console.log( "==============", memoryCardsObjsStageCurrent, memoryCardsObjsStageOne );

        for( var i = 0, l = memoryCardsObjsStageOne.length; i < l; i++ ) {
            cardElement = $( listCardsUI[ i ] ).children( '.card-face' );
            cardFront = cardElement.eq( 0 );
            cardBack = cardElement.eq( 1 );

            cardFront.css( 'background-image',
                'url(' + imagespath + memoryCardsObjsStageOne[ i ].image + ')' );

            // cardBack.text( memoryCardsObjsStageOne[ i ].id );
            cardBack.attr( 'data-card', memoryCardsObjsStageOne[ i ].id );

            if( gameLevelMode === memoryCardsLevels.GAME_LEVEL_BEGINNER  ) {
                setBgCards( memoryCardsObjsStageOne[ i ].image, cardBack );
            }
        }
    }
    function createStageBoardTwo( listCardsUI ) {
        console.log( 'CREATING BOARD TWO' );
        resetBgCards();

        gameSetStage( 1 );
        setCurrentCardsStage( 1 )
        setGameTitle( 'Etapa 2: Encuentra la especie y el problema que causa (2 veces)' );
        resetStageBoard();

        // TEMPORAL VARS
        var cardElement           = null;
        var cardFront             = null;
        var cardBack              = null;
        var temporalCards         = null;
        var cardFrontImage        = memoryCardsMapStageTwo;
        var cardFrontCurrentImage = null;

        temporalCards = memoryCardsData.gallery.concat( memoryCardsData.gallery ).concat( memoryCardsData.gallery );
        // memoryCardsObjsStageTwo = shuffleMemoryCards( temporalCards );
        memoryCardsObjsStageTwo = mixMemoryCards( temporalCards );
        resetMatchedArray( memoryCardsObjsStageTwo );

        memoryCardsObjsStageCurrent = memoryCardsObjsStageTwo;
        console.log( "==============", memoryCardsObjsStageCurrent, memoryCardsObjsStageTwo );

        for( var i = 0, l = memoryCardsObjsStageTwo.length; i < l; i++ ) {
            cardFrontCurrentImage = memoryCardsObjsStageTwo[ i ].imagesStage2.splice( Math.floor( Math.random() * memoryCardsObjsStageTwo[ i ].imagesStage2.length ), 1 );

            cardElement = $( listCardsUI[ i ] ).children( '.card-face' );
            cardFront = cardElement.eq( 0 );
            cardBack = cardElement.eq( 1 );

            cardFront.css( 'background-image',
                'url(' + imagespath + memoryCardsObjsStageTwo[ i ][ cardFrontCurrentImage[ 0 ] ] + ')' );

            // cardBack.text( memoryCardsObjsStageTwo[ i ].id );
            cardBack.attr( 'data-card', memoryCardsObjsStageTwo[ i ].id );

            if( gameLevelMode === memoryCardsLevels.GAME_LEVEL_BEGINNER  ) {
                setBgCards( memoryCardsObjsStageTwo[ i ][ cardFrontCurrentImage[ 0 ] ], cardBack );
            }
        }
    }
    function createStageBoardThree( listCardsUI ) {
        console.log( 'CREATING BOARD THREE' );
        resetBgCards();

        gameSetStage( 2 );
        setCurrentCardsStage( 2 )
        setGameTitle( 'Etapa 3: Encuentra la especie, el problema que causa y su solución' );
        resetStageBoard();

        // TEMPORAL VARS
        var cardElement           = null;
        var cardFront             = null;
        var cardBack              = null;
        var temporalCards         = null;
        var cardFrontImage        = memoryCardsMapStageThree;
        var cardFrontCurrentImage = null;

        temporalCards = memoryCardsData.gallery.concat( memoryCardsData.gallery ).concat( memoryCardsData.gallery );
        // memoryCardsObjsStageThree = shuffleMemoryCards( temporalCards );
        memoryCardsObjsStageThree = mixMemoryCards( temporalCards );
        resetMatchedArray( memoryCardsObjsStageThree );

        memoryCardsObjsStageCurrent = memoryCardsObjsStageThree;
        console.log( "==============", memoryCardsObjsStageCurrent, memoryCardsObjsStageThree );

        for( var i = 0, l = memoryCardsObjsStageThree.length; i < l; i++ ) {
            cardFrontCurrentImage = memoryCardsObjsStageThree[ i ].imagesStage3.splice( Math.floor( Math.random() * memoryCardsObjsStageThree[ i ].imagesStage3.length ), 1 );

            cardElement = $( listCardsUI[ i ] ).children( '.card-face' );
            cardFront = cardElement.eq( 0 );
            cardBack = cardElement.eq( 1 );

            cardFront.css( 'background-image',
                'url(' + imagespath + memoryCardsObjsStageThree[ i ][ cardFrontCurrentImage[ 0 ] ] + ')' );

            // cardBack.text( memoryCardsObjsStageThree[ i ].id );
            cardBack.attr( 'data-card', memoryCardsObjsStageThree[ i ].id );

            if( gameLevelMode === memoryCardsLevels.GAME_LEVEL_BEGINNER  ) {
                setBgCards( memoryCardsObjsStageThree[ i ][ cardFrontCurrentImage[ 0 ] ], cardBack );
            }
        }
    }
    function chooseMemoryStage( jsonImages, listCardsUI ) {
        switch( true ) {
            case gameGetStage() === memoryGameStages.STAGE_ONE:
                createBoardStageOne();
                break;

            case gameGetStage() === memoryGameStages.STAGE_TWO:
                createBoardStageTwo();
                break;

            case gameGetStage() === memoryGameStages.STAGE_THREE:
                createBoardStageThree();
                break;
        }

    }
    function loadDataMemoryBoard( jsonImages, listCardsUI ) {

        // dirRandomIndex = gameGetTopic();

        memoryBoardStarted = false;
        memoryCardsChrono.reset( true, true, true );
        
        $.get( dirImagesJson + jsonImages, function( data, status ) {
            console.log( typeof data, data instanceof Object );
            var dataParsed = typeof data === 'string' ? JSON.parse( data ) : data;
            if( status === 'success' ) {
                memoryCardsData   = dataParsed;
                currentImagesDir  = memoryCardsData.directory + '/';
                imagespath        = dirImages + currentImagesDir;
                memoryCardsStacks = memoryCardsData.gallery.length;

                // INITIAL LEVEL
                // createStageBoardOne( memoryCardsObjsStageOne, listCardsUI );
                console.log( memoryCardsData.gallery );
                createStageBoardOne( listCardsUI );
                // createStageBoardTwo( listCardsUI );
                // createStageBoardThree( listCardsUI );

            }
        });        
    }





    console.log( `%c LOADING ${ this.name } `, 'background: #09f; color: #fff;');
    return {
        // Returns the ViewMemory function itself
        // name: ViewMemory,

        name: this.name,
        setViewUI: setViewUI
    };
})();
