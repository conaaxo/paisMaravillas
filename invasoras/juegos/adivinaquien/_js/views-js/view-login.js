window.GuessApp.ViewLogin = (function ViewLogin() {
    this.name = "ViewLogin";

    var appHolder = null;
    var apploadedViews = null;

    var playerNameUI = null;
    var nextBtnUI = null;


    function setViewUI() {
        appHolder = $('#appHolder');
        apploadedViews = window.GuessApp.loadedViews;

        playerNameUI = $('#playerName');
        nextBtnUI = $('#loginBtnNext');

        playerNameUI.on('keyup', function (e) {
            // playerName = playerNameUI.val();
            window.GuessApp.setPlayerName(playerNameUI.val());
            console.log(window.GuessApp.getPlayerName());
        });

        nextBtnUI.on('click', function (e) {
            appHolder.html(apploadedViews['viewSetup'].viewContent);
            window.GuessApp.ViewSetup.setViewUI();
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
