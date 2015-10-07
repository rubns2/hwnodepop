"use strict";

// hacer un funcion que desuelve otra
//la segunda tendra acceso al scope de su madre

function creaClosure(name) {
    return function () {
        console.log(name);
    }
}


//creamos el closure

var closure = creaClosure('tesla');

var closure2 = creaClosure('tesla2');

//usamos el closure

closure();          //tesla
closure2();         //tesla2





