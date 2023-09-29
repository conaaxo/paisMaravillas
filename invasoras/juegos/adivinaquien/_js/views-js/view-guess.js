window.GuessApp.ViewGuess = (function ViewGuess() {
    this.name = "ViewGuess";

    // Main App DOM Views Holder
    // Main App OBJECTS Views Holder
    var appHolder = null;
    var apploadedViews = null;

    // Images & JSON Files firectories
    var dirImagesJson = '_imgs/views-imgs/view-guess/galleries-json/';
    var dirImages = '_imgs/views-imgs/view-guess/';
    var dirImagesCurrent = null;
    var gameImagespath = null;

    // Data from json files
    var guessCardsData = null;
    var guessCardsObjs = null;

    var guessCardsQuestions = null;

    var guessPlayerOneQuestions = null;
    var guessPlayerOneCharacters = null;
    var guessPlayerOneCharsFiltered = null;
    var guessPlayerOneAttempts = 0;

    var guessPlayerTwoQuestions = null;
    var guessPlayerTwoCharacters = null;
    var guessPlayerTwoCharsFiltered = null;
    var guessPlayerTwoAttempts = 0;
    var guessPlayerTwoActions = {
        'ACTION_ASKING': 'actionAsking',
        'ACTION_RESOLVING': 'actionResolving'
    };
    var guessPlayerTwoCurrentAction = null;
    var guessPlayerTwoCurrentQuestion = null;


    // VIEW UI DOM Elements
    var guessInfoTitleUI = null;
    var guessInfoCronoUI = null;
    var guessNotificationsHolderUI = null;

    var guessPlayerOneUI = null;
    var guessPlayerOneWinsUI = null;
    var guessPlayerOneOptsUI = null;
    var guessPlayerTwoUI = null;
    var guessPlayerTwoWinsUI = null;
    var guessPlayerTwoOptsUI = null;

    var btnGameStartUI = null;
    var btnGameShowResolveUI = null;
    var btnGameShowQuestionsUI = null;
    var btnGameDescartUI = null;
    var btnGameAutoDescartUI = null;
    var btnGameResolveUI = null;

    var guessQuestionsListUI = null;
    var guessQuestionsListOptsUI = null;
    var guessBoardUI = null;
    var guessCardsUI = null;

    var guessOptionsUI = null;
    var guessList = null;
    var guessBoardModalUI = null;
    var guessMessageModalUI = null;
    var guessHeadingModalUI = null;
    var guessBtnModalUI = null;
    var guessRestartModalUI = null;
    var guessBtnGuideUI = null;
    var guessBtnResetUI = null;
    var guessBtnHomeUI = null;
    var nextBtnUI = null;

    // GAME WIN/LOSE FLAGS
    var gameChosenCharOne = null;
    var gameChosenCharOneFrontUI = null;
    var gameChosenCharOneBackUI = null;
    var gameChosenCharTwo = null;
    var gameChosenCharTwoFrontUI = null;
    var gameChosenCharTwoBackUI = null;
    var gameCheckCharOne = null;
    var gameCheckCharTwo = null;
    var gameCheckCharTwoUI = null;
    var gameChosenDiscarted = [];
    var gameWinsPlayerOne = 0;
    var gameWinsPlayerOneUI = null;
    var guessPlayerOneRoundUI = null;
    var gameWinsPlayerTwo = 0;
    var gameWinsPlayerTwoUI = null;
    var guessPlayerTwoRoundUI = null;

    // GAME FLAGS
    var guessGameStates = {
        STATE_WAITING: 'WAITING',
        STATE_PLAYING: 'PLAYING',
        STATE_DESCARTING: 'DESCARTING',
        STATE_RESOLVING: 'RESOLVING',
        STATE_GUESSING: 'GUESSING'
    };
    var guessGameCurrentState = guessGameStates.STATE_WAITING;

    var guessRoundPlayer = {
        ROUND_PLAYER_ONE: 'roundPlayerOne',
        ROUND_PLAYER_TWO: 'roundPlayerTwo'
    };
    var guessGameCurrentRound = guessRoundPlayer.ROUND_PLAYER_ONE;


    var guessBoardStarted = false;
    var guessBoardCompleted = false;
    var guessCardsStacks = 0;
    var guessCardsMatches = 0;
    var guessCardsAttempts = 0;

    var guessCardsChrono = null;
    var guessCardsTimeout = null;
    var guessCardsChoices = [];
    var guessAnswerPlayerTwoUI = null;
    var guessActionPlayerTwoUI = null;
    var guessQuestionPlayerTwoUI = null;

    // External Data
    var playerName = null;
    var gameLimitRounds = null;


    function leadZeros(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    function getCardFromID(cardID) {
        // console.log( cardID );
        var tempcheck = cardID.split('/').reverse()[0].replace(/\(|\)|"|'/ig, '');
        console.log(tempcheck);
        return tempcheck;
    }

    function getCharacter(cardID) {

        return $(guessCardsUI[cardID]).addClass('show');
    }

    function shuffleGuessCards(arrayObj) {
        var currentIndex = arrayObj.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = arrayObj[currentIndex];
            arrayObj[currentIndex] = arrayObj[randomIndex];
            arrayObj[randomIndex] = temporaryValue;
        }
        return arrayObj;
    }

    function setRoundPlayer(roundPlayer) {
        switch (roundPlayer) {
            case 0:
            case '0':
            case guessRoundPlayer.ROUND_PLAYER_ONE:
                guessGameCurrentRound = guessRoundPlayer.ROUND_PLAYER_ONE;
                break;

            case 1:
            case '1':
            case guessRoundPlayer.ROUND_PLAYER_TWO:
                guessGameCurrentRound = guessRoundPlayer.ROUND_PLAYER_TWO;
                break;
        }
        return getRoundPlayer();
    }

    function getRoundPlayer() {
        return guessGameCurrentRound;
    }

    function interchangeRoundPlayer() {
        switch (true) {
            case getRoundPlayer() === guessRoundPlayer.ROUND_PLAYER_ONE:
                setRoundPlayer(1);
                break;

            case getRoundPlayer() === guessRoundPlayer.ROUND_PLAYER_TWO:
                setRoundPlayer(0);
                break;
        }
        console.log('INTERCHANGING PLAYER: ', getRoundPlayer());
        return getRoundPlayer();
    }

    function gameSetState(stateID) {
        switch (stateID) {
            case 0:
            case '0':
            case guessGameStates.STATE_WAITING:
                guessGameCurrentState = guessGameStates.STATE_WAITING;
                break;

            case 1:
            case '1':
            case guessGameStates.STATE_PLAYING:
                guessGameCurrentState = guessGameStates.STATE_PLAYING;
                break;

            case 2:
            case '2':
            case guessGameStates.STATE_DESCARTING:
                guessGameCurrentState = guessGameStates.STATE_DESCARTING;
                break;

            case 3:
            case '3':
            case guessGameStates.STATE_RESOLVING:
            case guessGameStates.STATE_GUESSING:
                guessGameCurrentState = guessGameStates.STATE_RESOLVING;
                break;
        }
    }

    function gameGetState() {
        return guessGameCurrentState;
    }

    function gameResetState() {
    }

    function gameRestart(playerWinner) {
        // RESET PLAYER COUNTERS AND COUNTERS UI
        gameWinsPlayerOne = 0;
        gameWinsPlayerTwo = 0;
        gameUpdatePlayersWins();

        // RESET GAME STATE
        gameSetState(0);

        // RESET TO PLAYER ONE ROUND
        setRoundPlayer(0);

        // SHOW WINNER PLAYER
        gameShowRestart(playerWinner)
    }

    function gameShowRestart(playerWinner) {
        // alert( playerWinner + ' has won the game' );
        // SHOW INITIAL WINDOW
        guessRestartModalUI.fadeIn(500);
        createGuessBoard('gallery-01.json', guessCardsUI);
        setTimeout(function () {
            createGuessBoard('gallery-01.json', guessCardsUI);
            guessRestartModalUI.fadeOut(500);
            gameShowStartUI()
        }, 5000);
    }


    function chooseDiscartCharacter(currentCard) {
        console.log('Choosing Discart Character');
        currentCard.parent().toggleClass('resolving chosen')
    }

    function validateDiscartCharacter() {
        if (guessBoardUI.children('span.chosen').length < 1) return gameUpdateNotifications({
            a: 'Selecciona al menos un personaje',
            b: ''
        });

        var chosencharacters = guessBoardUI.children('span.chosen').length;
        guessBoardUI.children('span.chosen').addClass('card-disabled');
        // guessBoardUI.children( 'span.chosen' ).removeClass( 'card' );
        // guessBoardUI.children( 'span.chosen' ).removeClass( 'resolving' );
        // guessBoardUI.children( 'span.chosen' ).removeClass( 'chosen' );
        guessBoardUI.children('span.chosen').removeClass('chosen resolving card');
        guessCardsUI.removeClass('resolving');

        // guessCardsUI.children( 'span.chosen' ).addClass( 'card-disabled' );
        // guessCardsUI.children( 'span.chosen' ).removeClass( 'card' );
        // guessCardsUI.children( 'span.chosen' ).removeClass( 'resolving' );
        // guessCardsUI.children( 'span.chosen' ).removeClass( 'chosen' );

        console.log(guessBoardUI.children('span.chosen').length);
        console.log(guessBoardUI.children('span.card-disabled').length);

        // gameUpdateNotifications({ a: 'Has descartado ' + chosencharacters + ' personaje(s)', b: '' });
        interchangeRoundPlayer();
        gamePTwoShowDeciding();
        // console.log( 'Validating Discart Character' );
    }

    function validateAutoDiscartCharacter() {
        // if( guessBoardUI.children( 'span.chosen' ).length < 1 ) return gameUpdateNotifications({ a: 'Selecciona al menos un personaje', b: '' });

        discardFilteredCardsUI(guessPlayerOneCharsFiltered);
        console.log('Validating AutoDiscart Character');
    }

    function chooseResolveCharacter(currentCard, dataId) {
        console.log('Choosing Resolve Character');
        if (gameCheckCharTwoUI !== null) {
            gameCheckCharTwoUI.parent().addClass('resolving');
            gameCheckCharTwoUI.parent().removeClass('chosen');
        }

        gameCheckCharTwo = guessCardsObjs[dataId];
        gameCheckCharTwoUI = currentCard;

        gameCheckCharTwoUI.parent().removeClass('resolving');
        gameCheckCharTwoUI.parent().addClass('chosen');
        // gameUpdateNotifications( { a:'Personaje seleccionado', b: getCardFromID( gameCheckCharTwoUI.css( 'background-image' ) ) } );
        console.log(gameCheckCharTwoUI.css('background-image'));
    }

    function validateResolveCharacter(somedata) {
        if (!gameCheckCharTwoUI) return;
        if (gameChosenCharTwo === gameCheckCharTwo) {
            console.log('WIN GAME');
            ++gameWinsPlayerOne;
            gameUpdateResults({
                mainMessage: '',
                subMessage: '¡' + playerName + ' has ganado la partida!',
                result: 'win'
            }, 0);
        } else {
            console.log('LOSE GAME');
            ++gameWinsPlayerTwo;
            gameUpdateResults({
                mainMessage: '',
                subMessage: '¡' + playerName + ' has perdido la partida...',
                result: 'lose'
            }, 0);
        }

        gameCheckCharTwoUI = null;
        console.log(gameChosenCharTwo, gameCheckCharTwo);
        console.log('Validating Resolve Character');
    }

    function gameUpdatePlayersWins() {
        gameWinsPlayerOneUI.html(playerName + ': ' + gameWinsPlayerOne);
        gameWinsPlayerTwoUI.html('Invasorín: ' + gameWinsPlayerTwo);
        guessPlayerOneAttempts = 0;
        guessPlayerTwoAttempts = 0;
        btnGameShowResolveUI.hide();
    }

    function gameUpdateResults(messageDetails, gameState) {
        gameUpdatePlayersWins();
        gameResetUIs();

        console.log(gameWinsPlayerOne, gameWinsPlayerTwo, gameLimitRounds);

        switch (true) {

            // case gameWinsPlayerOne === 0 && gameWinsPlayerTwo === 0:
            //     gameShowStartUI();
            //     break;

            case gameWinsPlayerOne === gameLimitRounds:
                gameShowResults({
                    mainMessage: '',
                    subMessage: playerName + ' ganaste ' + gameLimitRounds + ' partidas',
                    result: 'win'
                });
                break;

            case gameWinsPlayerTwo === gameLimitRounds:
                gameShowResults({
                    mainMessage: '',
                    subMessage: 'Invasorín ha ganado ' + gameLimitRounds + ' partidas',
                    result: 'lose'
                });
                break;

            default:
                gameShowResults(messageDetails);
        }


        if (gameState !== undefined) gameSetState(gameState);
    }

    function gameUpdateNotifications(message) {
        var labels = $('#guessInfoGaming span');
        labels.eq(0).html(message.a);
        labels.eq(1).html(message.b);
    }

    function gameUpdateAnswers(message) {
        var labels = $('#guessDescartOptions span.answer');
        labels.eq(0).html(message.a);
        labels.eq(1).html(message.b);
    }

    function gameShowResults(messageDetails) {
        // gameSetState( 0 );
        var bgWin = 'url(_imgs/views-imgs/view-guess/guess-assets/game-win-blank.png)'
        var bgLose = 'url(_imgs/views-imgs/view-guess/guess-assets/game-lose-blank.png)'
        var bgImg = messageDetails.result === 'win' ? bgWin : bgLose;
        console.log(messageDetails.result);
        console.log(bgImg);

        guessMessageModalUI.children('h2').html(messageDetails.mainMessage);
        guessMessageModalUI.children('h3').html(messageDetails.subMessage);
        guessMessageModalUI.css('background-image', bgImg);

        guessBoardModalUI.fadeIn(500);
        setTimeout(uiHandlerModal, 3000);

        console.log(guessBoardModalUI);
    }


    function setPlayerCharacters(charactersArray, imagespath) {
        // Reset Characters is Needed
        gameChosenCharOne = null;
        gameChosenCharTwo = null;

        var currentGameImagespath = imagespath !== undefined ? imagespath : gameImagespath;

        gameChosenCharOne = gameChosenCharOne !== null ? gameChosenCharOne : charactersArray[Math.floor(Math.random() * charactersArray.length)];
        gameChosenCharTwo = gameChosenCharTwo !== null ? gameChosenCharTwo : charactersArray[Math.floor(Math.random() * charactersArray.length)];

        // console.log( gameChosenCharOne, gameChosenCharTwo );
        // gameChosenCharOneBackUI.css( 'background-image', 'url(' + currentGameImagespath + 'a-' + gameChosenCharOne.image + ')' );
        // gameChosenCharTwoBackUI.css( 'background-image', 'url(' + currentGameImagespath + 'a-' + gameChosenCharTwo.image + ')' );

        gameChosenCharOneFrontUI
            .css('background-image', 'url(' + currentGameImagespath + 'v-' + gameChosenCharOne.image + ')')
            .attr('data-name', gameChosenCharOne.name);

        if (window.location.hash === '#helpmode') {
            gameChosenCharTwoFrontUI
                .css('background-image', 'url(' + currentGameImagespath + 'v-' + gameChosenCharTwo.image + ')');
        }

        var bgPlayerOne = gameChosenCharOneFrontUI.css('background-image').indexOf('undefined') >= 0;
        var bgPlayerTwo = gameChosenCharTwoFrontUI.css('background-image').indexOf('undefined') >= 0;

        console.log(bgPlayerOne, bgPlayerTwo);
        return gameChosenCharTwo !== gameChosenCharOne ? 'OK' : setPlayerCharacters(charactersArray);
    }

    function validateBoardCompleted() {
        if (guessCardsMatches !== guessCardsStacks) return;

        // timer.stop()
        guessCardsChrono.stop();
        guessHeadingModalUI.text('¡Felicidades ' + playerName + '!');
        guessBoardModalUI.fadeIn(500);
        setTimeout(uiHandlerModal, 3000);
        console.log(playerName);
    }

    function validateCardsMatch() {
    }

    function validateCardChoice(currentCardID) {
        gameGetState();
    }

    function discardFilteredCardsUI(charactersArray) {

        for (var i = 0, l = charactersArray.length; i < l; i++) {
            $('[data-check=' + charactersArray[i].id + ']').addClass('card-disabled');
            $('[data-check=' + charactersArray[i].id + ']').removeClass('card');
            console.log($('[data-check=' + charactersArray[i].id + ']'));
        }
        guessCardsUI.removeClass('resolving');

        // gameUpdateNotifications({ a: 'Has descartado ' + charactersArray.length + ' personaje(s)', b: '' });
        interchangeRoundPlayer();
        gamePTwoShowDeciding();
        console.log('discardFilteredCardsUI', charactersArray);
    }

    function filterCharacters(charactersArray, propertyFilter, critetia) {
        return charactersArray.filter(function (element) {
            return element[propertyFilter] === critetia;
        });
    }

    function validateFilterCharacter(charactersArray, questionText, currentCharacter, currentProp) {
        gameUpdateAnswers({a: questionText, b: currentCharacter[currentProp] ? 'Sí' : 'No'});
        var currentCharactersFiltered = filterCharacters(charactersArray, currentProp, !currentCharacter[currentProp]);

        if (guessPlayerOneCharacters === charactersArray) {
            guessPlayerOneCharsFiltered = currentCharactersFiltered;
        } else {
            guessPlayerTwoCharsFiltered = currentCharactersFiltered;
        }

        console.log(currentCharactersFiltered, charactersArray);

        gameShowDiscardUI();
        console.log(currentCharacter);

    }

    function checkTimerStatus() {
        if (guessCardsChrono.chronoStatus === 'iddle' && guessBoardStarted !== true) {
            guessBoardStarted = true;
            guessCardsChrono.reset();
            guessCardsChrono.start();
        }
    }

    // QUESTIONS UI HANDLERS
    // UI for Player One
    function gameHidePlayerRound(playerRound) {
        switch (true) {
            case playerRound === 0:
                // gameWinsPlayerOneUI.addClass( 'show-round' );
                // gameWinsPlayerTwoUI.removeClass( 'show-round' );

                guessPlayerOneRoundUI.addClass('show-round');
                guessPlayerTwoRoundUI.removeClass('show-round');
                break;

            case playerRound === 1:
                // gameWinsPlayerOneUI.removeClass( 'show-round' );
                // gameWinsPlayerTwoUI.addClass( 'show-round' );

                guessPlayerOneRoundUI.removeClass('show-round');
                guessPlayerTwoRoundUI.addClass('show-round');
                break;

            case playerRound === undefined:
                // gameWinsPlayerOneUI.removeClass( 'show-round' );
                // gameWinsPlayerTwoUI.removeClass( 'show-round' );

                guessPlayerOneRoundUI.removeClass('show-round');
                guessPlayerTwoRoundUI.removeClass('show-round');
        }
    }

    function gameHideUIs() {
        guessNotificationsHolderUI.children('.guess-notifications-list')
            .removeClass('show');
        guessQuestionsListUI
            .removeClass('show');

        console.log(guessPlayerOneUI);
    }

    function gameResetUIs() {
        guessQuestionsListOptsUI.removeClass('made');
        guessBoardUI.children('span').addClass('card');
        guessBoardUI.children('span').removeClass('card-disabled resolving chosen');
    }

    function gameShowStartUI() {
        gameResetUIs()
        gameHidePlayerRound();
        gameHideUIs();
        guessNotificationsHolderUI.addClass('show');
        $('#guessStartRound').addClass('show');
    }

    function gameShowChooseUI() {
        gameHidePlayerRound(0);
        gameHideUIs();
        guessNotificationsHolderUI.addClass('show');
        $('#guessChooseOptions').addClass('show');
        // gameWinsPlayerOneUI.addClass( 'show-round' );
        guessPlayerOneRoundUI.addClass('show-round');
        console.log(gameWinsPlayerOneUI);

        gameSetState(1);
    }

    function gameShowResolveUI() {
        // ++guessPlayerOneAttempts;
        gameHideUIs();

        // if( guessPlayerOneAttempts >= 2 ) { btnGameShowResolveUI.show() }
        guessNotificationsHolderUI.addClass('show');
        $('#guessResolveOptions').addClass('show');
        gameSetState(3);
        guessCardsUI.addClass('resolving');
    }

    function gameShowQuestionsUI() {
        ++guessPlayerOneAttempts;
        gameHideUIs();

        if (guessPlayerOneAttempts >= 2) {
            btnGameShowResolveUI.show()
        }
        guessNotificationsHolderUI.removeClass('show');
        $('#guessChooseOptions').addClass('show');
        $('#guessQuestionsList').addClass('show');
    }

    function gameShowDiscardUI() {
        gameHideUIs();
        guessNotificationsHolderUI.addClass('show');
        $('#guessDescartOptions').addClass('show');
        gameSetState(2);
        guessCardsUI.addClass('resolving');
    }

    // --------------------------------------------------------
    // UI for Player Two
    function gamePTwoSetAction(validateOption) {
        switch (validateOption) {
            case 0:
            case '0':
            case guessPlayerTwoActions.ACTION_ASKING:
                guessPlayerTwoCurrentAction = guessPlayerTwoActions.ACTION_ASKING;
                break;

            case 1:
            case '1':
            case guessPlayerTwoActions.ACTION_RESOLVING:
                guessPlayerTwoCurrentAction = guessPlayerTwoActions.ACTION_RESOLVING;
                break;
        }
    }

    function gamePTwoGetAction() {
        return guessPlayerTwoCurrentAction;
    }

    function gamePTwoSelectQuestion() {
        gamePTwoSetAction(0);
        return guessPlayerTwoQuestions[Math.floor(Math.random() * guessPlayerTwoQuestions.length)];
    }

    function gamePTwoSelectGuessChar() {
        gamePTwoSetAction(1);
        return guessPlayerTwoCharacters[Math.floor(Math.random() * guessPlayerTwoCharacters.length)];
    }

    function gamePTwoValidateAsking(dataUI) {
        console.log('Player Two Asking');
        console.log(gameChosenCharOne, gameChosenCharTwo);
        interchangeRoundPlayer();
        gameShowChooseUI();
    }

    function gamePTwoValidateResolving(dataUI) {
        console.log('Player Two Resolving');
        // console.log( gameChosenCharOne, gameChosenCharTwo, gameChosenCharOne.id === gameChosenCharTwo.id );

        console.log(gameChosenCharOne, guessPlayerTwoCurrentQuestion);

        // gameChosenCharOne = { id: 10 };
        // gameCheckCharOne = { id: 10 };
        console.log(gameChosenCharOne, guessPlayerTwoCurrentQuestion, gameChosenCharOne.id === guessPlayerTwoCurrentQuestion.id);

        if (gameChosenCharOne.id === guessPlayerTwoCurrentQuestion.id) {
            console.log(true);
            ++gameWinsPlayerTwo;
            gameUpdateResults({
                mainMessage: '',
                subMessage: '¡Invasorín ha ganado la partida!',
                result: 'win'
            }, undefined);
        } else {
            console.log(false);
            ++gameWinsPlayerOne;
            gameUpdateResults({
                mainMessage: '',
                subMessage: 'Invasorín ha perdido la partida...',
                result: 'lose'
            }, undefined);
        }
    }

    function gamePTwoShowRemovingMatches(dataUI) {
        gameHideUIs();
        $('#guessDescartingPlayerTwo').addClass('show');

        // guessActionPlayerTwoUI.html( dataUI.action );
        // guessQuestionPlayerTwoUI.html( dataUI.question );
        setTimeout(function () {
            gameHideUIs();
            gameShowChooseUI()
            // gameSetState( 0 );

        }, 3000);
    }

    function gamePTwoShowAnswering(dataUI) {
        gameHideUIs();
        gameSetState(0);
        $('#guessAnswerPlayerTwo').addClass('show');

        guessActionPlayerTwoUI.html(dataUI.action);
        guessQuestionPlayerTwoUI.html(dataUI.question);
    }

    function gamePTwoShowDeciding() {
        gameHidePlayerRound(1);
        gameHideUIs();
        gameSetState(0);
        $('#guessRoundPlayerTwo').addClass('show');

        var waitingUI = Math.ceil(Math.random() + 2000) + 3000;

        // true: Questions, false: Resolve
        var playerTwoAction = guessPlayerTwoAttempts <= 2 ? true : Math.random() > 0.5;
        ++guessPlayerTwoAttempts;
        // var playerTwoAction = true; // true: Questions
        // var playerTwoAction = false; // false: Resolve
        console.log(playerTwoAction, guessPlayerTwoAttempts);

        var dataUI = null;

        console.log(waitingUI);

        setTimeout(function () {
            if (playerTwoAction) {
                guessPlayerTwoCurrentQuestion = gamePTwoSelectQuestion();
                dataUI = {action: 'pregunta', question: guessPlayerTwoCurrentQuestion.label};
            } else {
                guessPlayerTwoCurrentQuestion = gamePTwoSelectGuessChar();
                dataUI = {
                    action: 'ha decidido adivinar personaje',
                    question: '¿Tu personaje es ' + guessPlayerTwoCurrentQuestion.article + ' ' + guessPlayerTwoCurrentQuestion.name + '?'
                };
            }
            gamePTwoShowAnswering(dataUI);
        }, waitingUI);
    }

    // --------------------------------------------------------
    // HANDLER FOR UI ELEMENTS
    function uiHandlerModal(e) {
        console.log('RESOLVING');
        console.log(interchangeRoundPlayer());
        console.log(gameWinsPlayerOne, gameWinsPlayerTwo, gameWinsPlayerOne === gameLimitRounds, gameWinsPlayerTwo === gameLimitRounds);

        guessBoardModalUI.fadeOut(500);

        switch (true) {
            case gameWinsPlayerOne === gameLimitRounds || gameWinsPlayerTwo === gameLimitRounds:
                gameRestart(gameWinsPlayerOne === gameLimitRounds ? 'PlayerOne' : 'PlayerTwo');
                break;

            case getRoundPlayer() === guessRoundPlayer.ROUND_PLAYER_ONE:
                gameShowChooseUI();
                break;

            case getRoundPlayer() === guessRoundPlayer.ROUND_PLAYER_TWO:
                gamePTwoShowDeciding();
                break;
        }

        setPlayerCharacters(guessCardsData.gallery, dirImagesCurrent);
    }

    function uiHandlerQuestions(e) {
        var datamodule = null;
        console.log($(e.target)[0].nodeName);

        var currentElement = $(e.target)[0].nodeName === 'LI' ? $(e.target) : $(e.target).parent();

        currentElement.addClass('made');

        datamodule = parseInt(currentElement.attr('data-module'));
        console.log(datamodule % 2);
        if (window.location.hash === '#helpmode') {
            if ((datamodule % 2) === 0) {
                $('[data-module=' + datamodule + ']').addClass('made');
                $('[data-module=' + (datamodule + 1) + ']').addClass('made');
            } else {
                $('[data-module=' + datamodule + ']').addClass('made');
                $('[data-module=' + (datamodule - 1) + ']').addClass('made');
            }
        }

        var currentGroup = $(e.target).attr('data-group') ||
            $(e.target).parent().attr('data-group');

        var currentProp = $(e.target).attr('data-prop') ||
            $(e.target).parent().attr('data-prop');

        var currentOption = $(e.target).attr('data-option') ||
            $(e.target).parent().attr('data-option');

        var currentQuestion = $(e.target) || $(e.target).children('em');

        console.log(currentGroup, currentProp, currentOption);
        validateFilterCharacter(guessPlayerOneCharacters, $(e.target).text(), gameChosenCharTwo, currentProp);
    }

    function uiHandlerPlayerOne(e) {
        var dataState = $(e.target).attr('data-state')
            /* || $( e.target ).parent().attr( 'data-state' ) */;

        // gameSetState( dataState )

        switch (gameGetState()) {
            // case guessGameStates.STATE_DESCARTING:
            //     console.log( gameGetState() );
            //     break;

            case guessGameStates.STATE_RESOLVING:
                console.log(gameGetState());
                break;
        }
    }

    function uiHandlerPlayerTwo(e) {
        var dataAnswer = Boolean(Number($(e.target).attr('data-answer')));
        console.log(dataAnswer, gamePTwoGetAction(), guessPlayerTwoCurrentQuestion);

        switch (true) {
            case guessPlayerTwoCurrentAction === guessPlayerTwoActions.ACTION_ASKING:
                gamePTwoValidateAsking()
                break;

            case guessPlayerTwoCurrentAction === guessPlayerTwoActions.ACTION_RESOLVING:
                gamePTwoValidateResolving()
                break;
        }
    }

    // --------------------------------------------------------
    // SET GET UI
    function getViewUI() {
        console.log("getting UI elements");
    }


    function setViewUI() {

        // -------------------------------------------------
        // Get External Data from Views
        playerName = window.GuessApp.getPlayerName();
        gameLimitRounds = window.GuessApp.getGameRounds();
        console.log(gameLimitRounds);

        // -------------------------------------------------
        // Get HTML Elements
        appHolder = $('#appHolder');
        apploadedViews = window.GuessApp.loadedViews;

        guessInfoTitleUI = $('#guessInfoTitle');
        guessInfoCronoUI = $('#guessInfoCrono');
        guessNotificationsHolderUI = $('#guessNotificationsHolder');

        guessPlayerOneUI = $('#guessPlayerOne');
        gameChosenCharOneFrontUI = $('#gameChosenCharOneFront');
        gameChosenCharOneBackUI = $('#gameChosenCharOneBack');
        guessPlayerOneWinsUI = guessPlayerOneUI.children('.action-card-wins');
        guessPlayerOneOptsUI = guessPlayerOneUI.children('.action-card');

        guessPlayerTwoUI = $('#guessPlayerTwo');
        gameChosenCharTwoFrontUI = $('#gameChosenCharTwoFront');
        gameChosenCharTwoBackUI = $('#gameChosenCharTwoBack');
        guessPlayerTwoWinsUI = guessPlayerTwoUI.children('.action-card-wins');
        guessPlayerTwoOptsUI = guessPlayerTwoUI.children('.action-card');


        guessQuestionsListUI = $('#guessQuestionsList');
        guessQuestionsListOptsUI = guessQuestionsListUI.children('li');
        guessBoardUI = $('#guessBoard');
        guessCardsUI = guessBoardUI.children('span.card');

        btnGameStartUI = $('#btnGameStart');
        btnGameShowResolveUI = $('#btnGameShowResolve');
        btnGameShowQuestionsUI = $('#btnGameShowQuestions');
        btnGameDescartUI = $('#btnGameDescart');
        btnGameAutoDescartUI = $('#btnGameAutoDescart');
        btnGameResolveUI = $('#btnGameResolve');

        gameWinsPlayerOneUI = $('#gameWinsPlayerOne');
        gameWinsPlayerTwoUI = $('#gameWinsPlayerTwo');
        guessPlayerOneRoundUI = $('#guessPlayerOneRound');
        guessPlayerTwoRoundUI = $('#guessPlayerTwoRound');

        guessOptionsUI = $('#guessOptions');

        guessBoardModalUI = $('#guessBoardModal');
        guessMessageModalUI = guessBoardModalUI.children('#guessMessageModal');
        guessHeadingModalUI = $('#guessHeadingModal');
        guessBtnModalUI = $('#guessBtnModal');

        guessRestartModalUI = $('#guessRestartModal');

        guessAnswerPlayerTwoUI = $('#guessAnswerPlayerTwo');
        guessActionPlayerTwoUI = $('#guessActionPlayerTwo');
        guessQuestionPlayerTwoUI = $('#guessQuestionPlayerTwo');
        guessBtnGuideUI = $('#guessBtnGuide');
        guessBtnResetUI = $('#guessBtnReset');
        guessBtnHomeUI = $('#guessBtnHome');
        // nextBtnUI = $( '#loginBtnNext' );

        // -------------------------------------------------
        // Set Logic Object
        guessCardsChrono = new SimpleChrono(guessInfoCronoUI);

        // -------------------------------------------------
        // Set Init config
        appHolder.addClass('playing');
        guessBoardModalUI.hide();
        guessRestartModalUI.hide();
        btnGameShowResolveUI.hide();
        guessCardsUI.removeClass('matched');

        gameWinsPlayerOneUI.html(playerName + ': ' + gameWinsPlayerOne);
        gameWinsPlayerTwoUI.html('Invasorín: ' + gameWinsPlayerTwo);

        // -------------------------------------------------
        // Set EventHandlers
        // nextBtnUI.on( 'click', function() {
        //     appHolder.html( apploadedViews[ 'viewSetup' ].viewContent );
        //     window.ViewSetup.setViewUI();
        // });

        guessBtnModalUI.on('click', function (e) {
            uiHandlerModal(e);
        });

        // console.log( guessCardsUI );

        // --------- Lists Questions Handler ---------
        // :not(.first-bar)
        guessQuestionsListUI.delegate('li:not(.made)', 'click', function (e) {
            uiHandlerQuestions(e);
        });

        // --------- PLAYERS ACTION BUTTONS ---------
        guessPlayerOneUI.delegate('.action-card', 'click', function (e) {
            uiHandlerPlayerOne(e);
        });

        // --------- PLAYERS ACTION BUTTONS ---------
        guessAnswerPlayerTwoUI.delegate('.btn-ok', 'click', function (e) {
            uiHandlerPlayerTwo(e);
        });

        // --------- Game UI Handlers ---------
        btnGameStartUI.on('click', function (e) {
            console.log(e.target);
            gameShowChooseUI();
        });
        btnGameShowResolveUI.on('click', function (e) {
            console.log(e.target);
            gameShowResolveUI();
        });
        btnGameShowQuestionsUI.on('click', function (e) {
            console.log(e.target);
            gameShowQuestionsUI();
        });
        btnGameDescartUI.on('click', function (e) {
            console.log(e.target);
            validateDiscartCharacter();
        });
        btnGameAutoDescartUI.on('click', function (e) {
            console.log(e.target);
            validateAutoDiscartCharacter();
        });
        btnGameResolveUI.on('click', function (e) {
            console.log(e.target);
            validateResolveCharacter(e.target);
        });

        $(document).on('click', function (e) {
            // if( guessBoardModalUI.is( ':hidden' ) ) return;
            // uiHandlerModal( );
            // console.log( e.type, guessBoardModalUI.is( ':visible' ), guessBoardModalUI.is( ':hidden' ) );
        });

        // --------- Cards Handler ---------
        guessBoardUI.delegate('.card', 'click', function (e) {
            var dataId = $(e.target).attr('data-id') || $(e.target).parent().attr('data-id');

            switch (gameGetState()) {
                case guessGameStates.STATE_WAITING:
                    console.log('WAITING STATE');
                    break;

                case guessGameStates.STATE_PLAYING:
                    console.log('PLAYING STATE');
                    break;

                case guessGameStates.STATE_DESCARTING:
                    console.log('DESCARTING STATE');
                    chooseDiscartCharacter($(e.target));
                    break;

                case guessGameStates.STATE_RESOLVING:
                    console.log('RESOLVING STATE');
                    chooseResolveCharacter($(e.target), dataId);
                    break;
            }

            // if( gameGetState() === guessGameStates.STATE_PLAYING ) return console.log( 'DIFFERENT GAME STATE' );

            checkTimerStatus();
            if (dataId !== undefined) validateCardChoice(dataId);
        });

        // --------- Lists Options Handler ---------
        /*
        guessOptionsUI.delegate( '.guess-option', 'click', function( e ) {
            var num = leadZeros( parseInt( $( e.target ).attr( 'data-id' ) ) + 1, 2 );
            createGuessBoard( 'gallery-' + num + '.json' , guessCardsUI );
        });
        */

        // --------- Lists Options Handler ---------
        guessBtnGuideUI.on('click', function (e) {
            console.log(e.target.id);
        });
        guessBtnResetUI.on('click', function (e) {
            console.log(e.target.id);
            appHolder.html(apploadedViews['viewGuess'].viewContent);
            window.GuessApp.ViewGuess.setViewUI();
        });
        guessBtnHomeUI.on('click', function (e) {
            console.log(e.target.id);
            appHolder.html(apploadedViews['viewSetup'].viewContent);
            window.GuessApp.ViewSetup.setViewUI();
        });


        // -------------------------------------------------
        createGuessBoard('gallery-01.json', guessCardsUI);

        console.log(`%c SETTING ${this.name} UI ELEMENTS`, 'background: gold; color: purple;');
    };

    function updateGameBoardTitle(messageTitle) {
        switch (gameLimitRounds) {
            case 7:
                guessInfoTitleUI.html('Jugando Nivel 3: Debes adivinar ' + gameLimitRounds + ' veces al personaje');
                break;
            case 5:
                guessInfoTitleUI.html('Juego largo: Adivina  ' + gameLimitRounds + ' veces el personaje oculto por Invasorín');
                break;
            case 3:
                guessInfoTitleUI.html('Juego corto: Adivina ' + gameLimitRounds + ' veces el personaje oculto por Invasorín');
                break;
        }
    }

    function createGuessBoard(jsonImages, listCards) {
        var currentImagesDir = null;
        var imagespath = null;
        var temporalCards = null;

        // TEMPORAL VARS
        var cardElement = null;
        var cardsChildren = null;
        var cardFront = null;
        var cardBack = null;

        guessBoardStarted = false;
        guessCardsChrono.reset(true, true, true);
        guessCardsUI.removeClass('matched show');
        guessCardsMatches = 0;

        updateGameBoardTitle();

        $.get(dirImagesJson + jsonImages, function (data, status) {
            console.log(typeof data, data instanceof Object);
            var dataParsed = typeof data === 'string' ? JSON.parse(data) : data;
            if (status === 'success') {
                guessCardsData = dataParsed;
                guessCardsQuestions = guessCardsData.questions;
                guessPlayerOneQuestions = guessCardsData.questions.slice(0);
                guessPlayerTwoQuestions = guessCardsData.questions.slice(0);
                guessPlayerOneCharacters = guessCardsData.gallery.slice(0);
                guessPlayerTwoCharacters = guessCardsData.gallery.slice(0);
                console.log(
                    '\n-Questions ', guessCardsQuestions,
                    '\n-QnP1 ', guessPlayerOneQuestions,
                    '\n-QnP2 ', guessPlayerTwoQuestions,
                    '\n-ChP1 ', guessPlayerOneCharacters,
                    '\n-ChP2 ', guessPlayerTwoCharacters,
                    '\n-QnP1 === QnP2 ', guessPlayerOneQuestions === guessPlayerTwoQuestions,
                    '\n-ChP1 === ChP2 ', guessPlayerOneCharacters === guessPlayerTwoCharacters
                );

                currentImagesDir = guessCardsData.directory + '/';
                imagespath = dirImages + currentImagesDir;
                gameImagespath = imagespath;
                dirImagesCurrent = imagespath;
                guessCardsStacks = guessCardsData.gallery.length;

                // temporalCards = guessCardsData.gallery.concat( guessCardsData.gallery ).concat( guessCardsData.gallery );
                // guessCardsObjs = shuffleGuessCards( temporalCards );
                guessCardsObjs = shuffleGuessCards(guessCardsData.gallery.slice(0));

                console.log("=== guessCardsData ===", guessCardsData);
                console.log("=== guessCardsQuestions ===", guessCardsQuestions);
                console.log("=== guessCardsObjs ===", guessCardsObjs);
                setPlayerCharacters(guessCardsData.gallery, imagespath);

                for (var i = 0, l = guessCardsObjs.length; i < l; i++) {

                    cardElement = $(listCards[i]);
                    cardElement.attr('data-check', guessCardsObjs[i].id);
                    cardsChildren = cardElement.children('.card-face');
                    cardFront = cardsChildren.eq(0);
                    cardBack = cardsChildren.eq(1);
                    cardFront.css('background-image', 'url(' + imagespath + (i % 2 === 0 ? 'a-' : 'v-') + guessCardsObjs[i].image + ')');
                    cardFront.attr('data-name', guessCardsObjs[i].name);
                    cardBack.text(guessCardsObjs[i].name);
                }

                // shows the start UI for playing
                gameShowStartUI();
            }
        });
    }

    console.log(`%c LOADING ${this.name} `, 'background: #09f; color: #fff;');
    return {
        // Returns the ViewGuess function itself
        // name: ViewGuess,

        name: this.name,
        setViewUI: setViewUI
    };
})();
