window.MemoryApp.ViewSetup = (function ViewSetup() {
    this.name = 'ViewSetup';

    var appHolder = null;
    var apploadedViews = null;
    var playerNameUI = null;
    var nextBtn = null;


    function setViewUI() {
        appHolder = $('#appHolder');
        apploadedViews = window.MemoryApp.loadedViews;
        playerNameUI = $('#setupPlayerName');
        nextBtn = $('#setupBtnNext');

        appHolder.removeClass('playing');

        nextBtn.on('click', function () {
            window.MemoryApp.setGameLevel($('input[name=level]:checked').val());
            console.log('WINDEX', window.MemoryApp.getGameLevel());

            window.MemoryApp.setPlayerName(playerNameUI.val());
            console.log('WINDEX', window.MemoryApp.getPlayerName());

            appHolder.html(apploadedViews['viewMemory'].viewContent);
            window.MemoryApp.ViewMemory.setViewUI();
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
