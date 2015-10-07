"use strict";

//Los valores false, 0 (cero), y "" (cadena vacía) son equivalentes:

var c = (false == 0); // true
var d = (false == ""); // true
var e = (0 == ""); // true

//Los valores null y undefined no son equivalentes con nada, excepto con ellos mismos:
    var f = (null == false); // false
var g = (null == null); // true
var h = (undefined == undefined); // true
var i = (undefined == null); // true

//Y por último, el valor NaN no es equivalente con nada, ni siquiera consigo mismo:
    var j = (NaN == null); // false
var k = (NaN == NaN); // false