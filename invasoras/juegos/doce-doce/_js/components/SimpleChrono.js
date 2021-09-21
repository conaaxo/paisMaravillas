'use strict';

function SimpleChrono( chronoDisplay ) {
    this.chronoStatus = 'iddle';
    this.chronoDisplay  = chronoDisplay;
    this.chronoCounter  = 0;
    // this.chronoElapse   = ( timetoAmount || 60 ) * 1000;
    this.chronoInterval = null;
    this.chronoDisplay.html( this.chronoCounter );
}

SimpleChrono.prototype.start = function start() {
    this.chronoStatus = 'running';
    this.chronoInterval = setInterval( this.tick.bind( this ) , 1000 );
    console.log( this )
};

SimpleChrono.prototype.stop = function stop() {
    this.cleanup( true, true, false );
    console.log( 'Timer Stopped' );
};

SimpleChrono.prototype.reset = function reset() {
    this.cleanup( true, true, true );
    console.log( 'Timer Resetted' );
};

SimpleChrono.prototype.cleanup = function cleanup( cleanStatus, cleanInterval, cleanCounter ) {
    this.chronoStatus = cleanStatus ? 'iddle' : this.chronoStatus;
    if( cleanInterval ) {
        clearInterval( this.chronoInterval );
        this.chronoInterval = null;
    }
    if( cleanCounter ) {
        this.chronoCounter = 0;
        this.chronoDisplay.html( this.chronoCounter );
    }
};

SimpleChrono.prototype.tick = function tick() {
    this.chronoCounter++;
    this.chronoDisplay.html( this.chronoCounter );
    // console.log( this.chronoCounter );
    // console.log( 'ON tick ', this.chronoCounter );
    // if( this.chronoCounter <= 0 ) {
    //     clearInterval( this.chronoInterval );
    //     this.chronoInterval = null;
    //     console.log( 'Timer completed' );
    // }
};
