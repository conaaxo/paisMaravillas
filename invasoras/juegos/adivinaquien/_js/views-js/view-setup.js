window.GuessApp.ViewSetup = (function ViewSetup() {
    this.name = 'ViewSetup';

    var appHolder = null;
    var apploadedViews = null;
    var playerNameUI = null;
    var nextBtn = null;


    function setViewUI() {
        appHolder = $('#appHolder');
        apploadedViews = window.GuessApp.loadedViews;
        playerNameUI = $('#setupPlayerName');
        nextBtn = $('#setupBtnNext');
        appHolder.removeClass('playing');

        nextBtn.on('click', function () {
            window.GuessApp.setGameRounds(Number($('input[name=level]:checked').val()));

            window.GuessApp.setPlayerName(playerNameUI.val());
            console.log(window.GuessApp.getPlayerName());

            appHolder.html(apploadedViews['viewGuess'].viewContent);
            window.GuessApp.ViewGuess.setViewUI();
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
