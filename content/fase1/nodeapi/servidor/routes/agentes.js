/**
 * Created by Scheveningen on 10/3/15.
 */
"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Agente = mongoose.model('Agente');     //var Agente = require ('../models/Agente') / var Agente = mongoose.model('Agente')


/* GET users listing. */
router.get('/', function(req, res, next) {              //meter esto en un get va a dar un problema dijo el tio, npi





    //crear un registro de agente

    var agente = new Agente({name:'Nuevo', age:18});

    agente.save( function(err, creado){
        if (err) {
            console.log(err);
            return next(err);
        }
        console.log(creado)
    });

//res.send('respond with a resource');
//});



//
//crear un registro de anuncio

var anuncio = new Anuncio({  nombre: 'Vendo x',
    venta: true,
    precio: 500,
    foto: String,
    tags: [work, motor, lifestyle]      //fck no rrecuerdo si van en ''
});

anuncio.save( function(err, creado){
    if (err) {
        console.log(err);
        return next(err);
    }
    console.log(creado)
});

//res.send('respond with a resource');
//});


//creamos un usuario
var usuario = new Usuario({  nombre: 'nadine',
    email: 'nadine@unemail.com',
    clave: 'nadine'
});

usuario.save( function(err, creado){
    if (err) {
        console.log(err);
        return next(err);
    }
    console.log(creado)
});

//res.send('respond with a resource');
//});



//le creamos una var al pusktoken para poder listarlo luego, creo quee esto no debe ir aqui
var pushToken = new PushToken({
    plataforma: {type: String, enum: ['ios', 'android']},
    token: String,
    usuario: String
});

pushToken.save( function(err, creado){
    if (err) {
        console.log(err);
        return next(err);
    }
    console.log(creado)
});

res.send('respond with a resource');
});



module.exports = router;
//module.exports = Agente;
