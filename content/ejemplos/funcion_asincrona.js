/**
 * Created by Scheveningen on 9/19/15.
 */
"use strict";

/**console.log('empiezo');

var escribeTras2Segundos = function(texto, callBack) {
    setTimeout( function(){
        console.log(texto);
        callBack();
    }, 2000);
}

escribeTras2Segundos('texto1', function(){
    console.log('he escrito el 1')
});

escribeTras2Segundos('texto2', function(){
    console.log('he escrito el 2');

});

console.log('he terminado');
**/
/**
console.log('empiezo');

var escribeTras2Segundos = function(texto, callBack) {
    setTimeout( function(){
        console.log(texto);
        callBack();
    }, 2000);
}

escribeTras2Segundos('texto1', function(){
    console.log('he escrito el 1');
    escribeTras2Segundos('texto2', function() {
        console.log('he escrito el 2');

        console.log('he terminado');
    });
});
**/

console.log('empiezo');

var escribeTras2Segundos = function(texto, callBack) {
    setTimeout( function(){
        console.log(texto);
        callBack();
    }, 500);
}



function serie(n, func, callBackFin) {

    if (n > 0) {
        n--;    //n--  --->  n = n-1

        func('texto', function() {
            serie(n, func, callBackFin);
        });
    } else {
            callBackFin();

    }
}
    serie(5, escribeTras2Segundos, function(){
        console.log('he terminado');


    });

