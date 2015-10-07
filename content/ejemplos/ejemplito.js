/**
 * Created by Scheveningen on 9/20/15.
 */


/**ejemplo de hoisting**/

/**
 var valor = 'hola';
 function pinta() {
    console.log(valor);
    var valor = 'adios';
}
pinta();


 **/
// javascript hace hoisting de      vars y functions

// esto es lo que hace javascript when hoisting,  toma la var y la pone al principio,
    //como valor se le da valor depues de console.log, te va a dar undefined


//por el hoisting en javascript puedes llamar una funcion antes de declararla


"use strict";

var valor = 'hola';

function pinta() {
    var valor;
    console.log(valor);
    valor = 'adios';
}
pinta();
