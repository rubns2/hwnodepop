/**
 * Created by Scheveningen on 9/20/15.
 */
"use strict";

var Coche = function(marca) {
    this.name = marca;
};

var coche = new Coche('Tesla');

console.log(coche.name);


// Coche es una instancia un objeto que hemos construido,
// new Coche representa simplemente constructor de objeto , es este caso con Coche
// y coche es el objeeto que hemos construido