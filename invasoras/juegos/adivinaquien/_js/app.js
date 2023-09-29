window.GuessApp = (function () {

    this.name = "GuessApp";
    this.somemethod = function (argument) {
        console.log("Private");
    }

    var playerName = 'Jugador invitado';
    var gameLimitRounds = 3;

    function getPlayerName() {
        return playerName;
    }

    function setPlayerName(newName) {
        if (!newName) return;
        playerName = newName;
    }

    function getGameRounds() {
        return gameLimitRounds;
    }

    function setGameRounds(numRounds) {
        gameLimitRounds = numRounds;
    }


    var dirTemplates = '_html/views-html/';

    var viewLoginRef = {
        viewAlias: 'viewLogin',
        viewFileName: 'view-login.html',
        viewContent: ''
    };
    var viewSetupRef = {
        viewAlias: 'viewSetup',
        viewFileName: 'view-setup.html',
        viewContent: ''
    };
    var viewGuessRef = {
        viewAlias: 'viewGuess',
        viewFileName: 'view-guess.html',
        viewContent: ''
    };
    var viewsArray = [
        viewLoginRef,
        viewSetupRef,
        viewGuessRef
    ];
    var loadedViewsArray = [];

    function loadViews() {
        for (var i = 0, l = viewsArray.length; i < l; i++) {
            // console.log( i );
            console.log(`%c SOME MESSAGE ${i}  `, 'background: #09f; color: #fff;');

            $.get(dirTemplates + viewsArray[i], function (data, status) {
                console.log(`%c PUSHING DATA ${status} `, 'background: purple; color: #fff;');
                loadedViewsArray.push(data);
                if (i === viewsArray.length - 1) {
                    console.log(`%c LOADED`, 'background: teal; color: #fff;');
                }
                ;
            });
        }
        ;
    }

    function loadViewTemplate(viewRef, showView) {
        var viewReference = viewRef;
        $.get(dirTemplates + viewReference.viewFileName, function (data, status) {

            if (status === 'success') {
                viewReference.viewContent = data;
                loadedViewsArray[viewReference.viewAlias] = viewReference;
                if (!!showView) {
                    $('#appHolder').html(loadedViewsArray[viewReference.viewAlias].viewContent);

                    // window.GuessApp.ViewLogin.getViewUI()
                    // console.log( window.ViewLogin.setViewUI );
                    // window.GuessApp.ViewLogin.setViewUI();

                    // ================================================================
                    // THIS IS FOR DEVELOPMENT
                    // COMMENT THIS REFERENCE
                    window.GuessApp.ViewSetup.setViewUI();
                    // window.GuessApp.ViewGuess.setViewUI();
                    // ================================================================

                    console.log(`%c LOADED VIEW: ${loadedViewsArray[viewReference.viewAlias].viewAlias} `, 'background: #288; color: #fff;');
                }
            }
        });
    }

    // Load default View ( true )
    loadViewTemplate(viewLoginRef, !true);
    loadViewTemplate(viewSetupRef, !!true);
    loadViewTemplate(viewGuessRef, !true);

    // console.log( loadedViewsArray );
    console.log(`%c RUNNING ${this.name} `, 'background: #cf0; color: teal;');

    return {
        // this.name : this.name
        loadedViews: loadedViewsArray,
        loadViewTemplate: loadViewTemplate,
        getPlayerName: getPlayerName,
        setPlayerName: setPlayerName,

        getGameRounds: getGameRounds,
        setGameRounds: setGameRounds
    };
})();
