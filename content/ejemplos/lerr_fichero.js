
//Created by Scheveningen on 9/20/15.
"use strict";
/**

var fs = require('fs');

var path = require('path');

//abrir un fichero

var fichero = path.join('./', 'pruebas.js');

console.log('abrir' + fichero);

//fs.readFile('./pruebas.js', function(err, data){            //abrir unn fichero en modo lectura


fs.readFile(fichero, {encoding: 'utf8'}, function(err, data) {
    if (err) {

    console.log(err);
    return;
}
    //console.log(data);
    //var objeto = JSON.parse(data);

    console.log(data);

});

//convertit su contenido (JSON)en objeto

// el objeto lo usamos

**/




var fs = require('fs');

var path = require('path');

//abrir un fichero

var fichero = path.join('./', 'pruebas.js');

console.log('abrir' + fichero);

//fs.readFile('./pruebas.js', function(err, data){            //abrir unn fichero en modo lectura


fs.readFile(fichero, {encoding: 'utf8'}, function(err, data) {
    if (err) {

        console.log(err);
        return;
    }
    //console.log(data);                            //estas tres lineas cambian, ahora ves solo nombre y no edad
    var objeto = JSON.parse(data);

    console.log(objeto.nombre);

});

//convertit su contenido (JSON)en objeto

// el objeto lo usamos








//siempre de beria usar version asincrona
// no fs.readfileSync   , si fs.writeFile

//una vez que empiezes a hacer peticiones, deberias convertir tod lo que sea syn a asincrona!
//excepto cuando estas incializando, la parte de tu aplicacion cuando arranca, ahi podeis usar syncrona, porque no nos importa bloquear node cuando estamos en ese proceso