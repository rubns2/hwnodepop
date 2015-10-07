/**
 * Created by Scheveningen on 9/21/15.
 */
/**
 * Created by Scheveningen on 9/21/15.
 */
/**
 * Created by Scheveningen on 9/21/15.
 */
'use strict';


//cargamos async

var async = require('async');


//definir un array

var arr  = ['uno', 'dos', 'tres'];


//definir un iterador
                                               //cuando termines todos lo eventos haces esto y despues esto, cosa de que si te pasan un array de un conazo de elementos, nuestro prog no se cuelge, por eso anadimos el setTimeout!
var iterador = function(elemento, callback) {
    setTimeout(function(){                      //
    if (elemento === 'dos') {
        return callback(null);              //con el return garantizas q el callbackse no se extienda
    }
    //}else{u
        elemento = elemento + '-procesado';

        callback(null, elemento);
        return;

    }, 0);

};


//procesar el array


async.concat(arr, iterador, function(err, resultados){
    //mostrar resultados
    console.log(resultados);
});



