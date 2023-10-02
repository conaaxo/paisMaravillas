/***********************
 * Adobe Edge Animate Composition Actions
 *
 * Edit this file with caution, being careful to preserve
 * function signatures and comments starting with 'Edge' to maintain the
 * ability to interact with these actions from within Adobe Edge Animate
 *
 ***********************/
(function ($, Edge, compId) {
    var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

    //Edge symbol: 'stage'
    (function (symbolName) {


    })("stage");
    //Edge symbol end:'stage'

    //=========================================================

    //Edge symbol: 'libeula_symbol_1'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 112, function (sym, e) {
            // insert code here
            // Play the timeline at a label or specific time. For example:
            // sym.play(500); or sym.play("myLabel");
            sym.play(0);

        });
        //Edge binding end

    })("libeula_symbol_1");
    //Edge symbol end:'libeula_symbol_1'

    //=========================================================

    //Edge symbol: 'libeula2_symbol_1'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 112, function (sym, e) {
            // insert code here
            // Play the timeline at a label or specific time. For example:
            // sym.play(500); or sym.play("myLabel");
            sym.play(0);

        });
        //Edge binding end

    })("libeula2_symbol_1");
    //Edge symbol end:'libeula2_symbol_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-25246453");
