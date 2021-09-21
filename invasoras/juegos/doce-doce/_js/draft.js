$( document ).on( 'ready', function() {
    console.log( 'App Loaded...' );
    // $( '#appHolder' ).load( '../_html/views-html/view-login.html' );
    // $( '#appHolder' ).load( '../_html/views-html/view-setup.html' );
    // $( '#appHolder' ).load( '../_html/views-html/view-memory.html' );

    var viewsArray = [ 'view-login.html', 'view-setup.html', 'view-memory.html' ];
    var loadedViewsArray = [];

    for( var i = 0, l = viewsArray.length; i < l; i++ ) {
        $.get( "../_html/views-html/" + viewsArray[ i ], function( data, status ) {
            console.log( `%c PUSHING DATA ${ status } `, 'background: purple; color: #fff;');
            loadedViewsArray.push( data );
        });
    };

    console.log( loadedViewsArray );

});


