window.TwelveApp.ViewLogin = (function ViewLogin() {
    this.name = "ViewLogin";

    var appHolder = null;
    var apploadedViews = null;

    var playerNameUI = null;
    var nextBtnUI = null;


    function setViewUI() {
        appHolder = $('#appHolder');
        apploadedViews = window.TwelveApp.loadedViews;

        playerNameUI = $('#playerName');
        nextBtnUI = $('#loginBtnNext');

        playerNameUI.on('keyup', function (e) {
            // playerName = playerNameUI.val();
            window.TwelveApp.setPlayerName(playerNameUI.val());
            console.log('WINDEX', window.TwelveApp.getPlayerName());
        });

        nextBtnUI.on('click', function (e) {
            // appHolder.html( apploadedViews[ 'viewSetup' ].viewContent );
            // window.TwelveApp.ViewSetup.setViewUI();

            appHolder.html(apploadedViews['viewTwelve'].viewContent);
            window.TwelveApp.ViewTwelve.setViewUI();
        });
        console.log(`%c SETTING ${this.name} UI ELEMENTS`, 'background: gold; color: purple;');
    };


    console.log(`%c LOADING ${this.name} `, 'background: #09f; color: #fff;');
    return {
        // Returns the ViewLogin function itself
        // name: ViewLogin,

        name: this.name,
        setViewUI: setViewUI
    };
})();
