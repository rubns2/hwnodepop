/**
 * Created by Scheveningen on 9/26/15.
 */

'use strict';

var express = require('express');
var router = express.Router();

var leeDependencies = require('../lib/leeDependencies');

router.get('/', function(req, res, next) {       //puedes agregar un next, pero no es necesaruio

    leeDependencies(function(err, data){

        if (err) {


            console.log(err);
            return next(err);           //error que suele pasar muchas veces, olvidar el return, su funcion es evitar que se llegue a render
                                //o lo puedes poner elreturn aqui tambn
        }

            //paso los datos que me da el modelo a la vista dependencies
        res.render('dependencies', { data: data });
    });

});



module.exports = router;