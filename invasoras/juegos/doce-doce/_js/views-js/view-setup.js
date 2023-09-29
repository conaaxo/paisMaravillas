window.TwelveApp.ViewSetup = (function ViewSetup() {
    this.name = 'ViewSetup';

    var appHolder = null;
    var apploadedViews = null;
    var playerNameUI = null;
    var nextBtn = null;


    function setViewUI() {
        appHolder = $('#appHolder');
        apploadedViews = window.TwelveApp.loadedViews;
        playerNameUI = $('#setupPlayerName');
        nextBtn = $('#setupBtnNext');

        appHolder.removeClass('playing');

        nextBtn.on('click', function () {
            window.TwelveApp.setPlayerName(playerNameUI.val());
            console.log('WINDEX', window.TwelveApp.getPlayerName());

            appHolder.html(apploadedViews['viewTwelve'].viewContent);
            window.TwelveApp.ViewTwelve.setViewUI();

        });
        console.log(`%c SETTING ${this.name} UI ELEMENTS`, 'background: gold; color: purple;');
    };


    function getViewUI() {
        console.log("getting UI elements");
    }


    console.log(`%c LOADING ${this.name} `, 'background: #09f; color: #fff;');
    return {
        // Returns the ViewSetup function itself
        // name: ViewSetup,

        name: this.name,
        setViewUI: setViewUI
    };
})();
