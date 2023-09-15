$(document).ready(function () {
    iniciales("cc");
    audiojs.events.ready(function () {
        var as = audiojs.createAll();
    });
    $("section").stick_in_parent({offset_top: 0});
})
