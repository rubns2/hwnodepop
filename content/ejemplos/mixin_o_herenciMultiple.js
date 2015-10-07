/**
 * Created by Scheveningen on 9/21/15.
 */
'use strict';

var Persona = function ( nombre, apel) {
    this.nombre = nombre;
    this.apellido = apel;
};

var trinity = new Persona('Trinity ');

// hacer que herede de un objeto de un obj, uy despues de otro


//creamos el mixin, que se basicamento un objeto que tiene unos metodos

var matrixMixin = {
    vuela: function () {
        console.log(this.nombre + 'vuela');
    },

    esquivaBalas: function () {
        console.log(this.nombre + 'esquiva balas');

    }

    };

//para acceder el _extend de la libreria
var util = require('util');

//extend 'machuca' y hace posible el compartimiento..
Persona.prototype = util._extend(Persona.prototype, matrixMixin);

var neo = new Persona('Thomas ', 'Anderson ');

neo.vuela();
trinity.vuela();

neo.esquivaBalas();
neo.vuela();


//creaste  trinity que no hacia nada, hicistes el mixin, y despues le pasaste la funcion a todos los personajes
//date cuento que trinity la creaste primero que mixin, y igual ve  mixin.

//con estos tambien puedes hacer herencia multiple, recuerdaque tecnicament javascript no tiene herencia multiple