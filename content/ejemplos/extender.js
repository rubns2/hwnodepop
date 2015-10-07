/**
 * Created by Scheveningen on 9/21/15.
 */
'use strict';

//definimos un objeto

var one = {
    id : 123,
    count : 41,
    desc : 'esto es la descripcion'

};

 var two = {
     name : 'el nombre',
     tagg : 'js',
     values: [1,2,3],
     id: 9

 };

var three = {
    count : 42,
    title : 'titulo',
    desc : null,
    values: [4,5,6]
};

//accedemos la libreria util, para extend

var util = require('util');

//var _extend = util._extend;


//'volcar las propieadades de dos en uno'           anade los contenidos que son distintos del array, y si lleva el mismo nombre reemplaza el valor!

//var extendido = _extend(one, two);

var extendido = util._extend(one, two);     //anado el .util, para verlo mas claaro , es lo mismo....


console.log(util._extend(extendido, three));


/**
 * terminal
 Scheveningen at Eisbach in ~/desktop/cursoKCNodejs/01_servidor_basico
 $ node extender.js
 { id: 123,
   count: 42,
   desc: null,
   values: [ 4, 5, 6 ],
   tagg: 'js',
   name: 'el nombre',
   title: 'titulo' }
 **/