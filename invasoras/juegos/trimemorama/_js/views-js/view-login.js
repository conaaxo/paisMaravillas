window.MemoryApp.ViewLogin = (function ViewLogin() {
    this.name = "ViewLogin";

    var appHolder = null;
    var apploadedViews = null;

    var playerNameUI = null;
    var nextBtnUI = null;


    function setViewUI() {
        appHolder = $( '#appHolder' );
        apploadedViews = window.MemoryApp.loadedViews;

        playerNameUI = $( '#playerName' );
        nextBtnUI = $( '#loginBtnNext' );

        playerNameUI.on( 'keyup', function( e ) {
            // playerName = playerNameUI.val();
            window.MemoryApp.setPlayerName( playerNameUI.val() );
            console.log( window.MemoryApp.getPlayerName() );
        });

        nextBtnUI.on( 'click', function( e ) {
            appHolder.html( apploadedViews[ 'viewSetup' ].viewContent );
            window.MemoryApp.ViewSetup.setViewUI();

            // appHolder.html( apploadedViews[ 'viewMemory' ].viewContent );
            // window.MemoryApp.ViewMemory.setViewUI();
        });
        console.log( `%c SETTING ${ this.name } UI ELEMENTS`, 'background: gold; color: purple;');
    };


    console.log( `%c LOADING ${ this.name } `, 'background: #09f; color: #fff;');
    return {
        // Returns the ViewLogin function itself
        // name: ViewLogin,

        name: this.name,
        setViewUI: setViewUI
    };
})();
