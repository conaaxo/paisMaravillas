'use strict';

function SimpleTimer(timetoAmount) {
    this.timeCounter = timetoAmount;
    this.timetoElapse = (timetoAmount || 60) * 1000;
    this.timeInterval = null;
}

SimpleTimer.prototype.start = function start() {
    this.timeInterval = setInterval(this.tick.bind(this), 1000);
    console.log(this)
};

SimpleTimer.prototype.tick = function tick() {
    this.timeCounter--;
    console.log('ON tick ', this.timeCounter);
    if (this.timeCounter <= 0) {
        clearInterval(this.timeInterval);
        this.timeInterval = null;
        console.log('Timer completed');
    }
};


var mt1 = new SimpleTimer(10);
// var mt2 = new SimpleTimer( 20 );
// var mt3 = new SimpleTimer( 5 );

mt1.start();
// mt2.start();
// mt3.start();
