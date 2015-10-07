/**
 * Created by Scheveningen on 10/4/15.
 */
"use strict";

//definir una funcion asincrona que devuelva una promesa en veez de un callback

function espera(milis){
    //var promise = new Promise(function(resolve, reject){      mas cod falta si usas esta
    return new Promise(function(resolve, reject){

        setTimeout(function() {
            console.log('hecho');
            resolve(milis);

        }, milis);

    });

}

//llamar a la funcion
espera(1000)
    .then(espera)
    .then(espera)
    .then(espera)
    .then(function(result) {
        console.log(result);        //noo me imprime el 1000 despues de los 4 hechos :S, sale otrohecho

    })
    .catch(function(err){
        console.log('Hubo un erro:', err);
});