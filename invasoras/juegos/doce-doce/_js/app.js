window.TwelveApp = (function () {

    this.name = 'TwelveApp';
    this.somemethod = function (argument) {
        console.log('Private');
    }

    var playerName = 'Jugador invitado';

    function getPlayerName() {
        return playerName;
    }

    function setPlayerName(newName) {
        if (!newName) return;
        playerName = newName;
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
    var viewTwelveRef = {
        viewAlias: 'viewTwelve',
        viewFileName: 'view-twelve.html',
        viewContent: ''
    };
    var viewsArray = [
        viewLoginRef,
        viewSetupRef,
        viewTwelveRef
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

                    // window.TwelveApp.ViewLogin.getViewUI()
                    // window.TwelveApp.ViewLogin.setViewUI();

                    // ================================================================
                    // THIS IS FOR DEVELOPMENT
                    // COMMENT THIS REFERENCE
                    // window.TwelveApp.ViewLogin.setViewUI();
                    window.TwelveApp.ViewSetup.setViewUI();
                    // window.TwelveApp.ViewTwelve.setViewUI();
                    // ================================================================

                    console.log(`%c LOADED VIEW: ${loadedViewsArray[viewReference.viewAlias].viewAlias} `, 'background: #288; color: #fff;');
                }
            }
        });
    }

    loadViewTemplate(viewLoginRef, !true);
    loadViewTemplate(viewSetupRef, !!true);
    loadViewTemplate(viewTwelveRef, !true);

    // console.log( loadedViewsArray );
    console.log(`%c RUNNING ${this.name} `, 'background: #cf0; color: teal;');

    return {
        // this.name : this.name
        loadedViews: loadedViewsArray,
        loadViewTemplate: loadViewTemplate,
        getPlayerName: getPlayerName,
        setPlayerName: setPlayerName
    };
})();
