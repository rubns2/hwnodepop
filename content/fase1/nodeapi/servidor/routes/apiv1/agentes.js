/**
 * Created by Scheveningen on 10/3/15.
 */
"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Agente = mongoose.model('Agente');    //var Agente = require ('../models/Agente') / var Agente = mongoose.model('Agente')

router.get('/', function(req, res) {             //gracias a esto es que puedes hacer el post desde postman


    Agente.lista({name:"Jones"}, function (err, lista) {    //si pones name:"Jones", filtras los jones en el output, cuando veas uncriterio para buscar tienes que casquera un indice, xq si no cuando tengas burda de clientes tu app se va a poner lenta progresivamente
        if (err) {
            console.log(err);
            return res.json({ok: false, err: err});
        }

        res.json({ok: true, data: lista});
    });

});

router.get('/:id', function(req, res) {             //lo anadi dia 5 s2 too este bloque
                                                            //nos devuelve el mismo agente para mostrar que elagente es un metodo de instancia
    var id = req.params.id;

    var agente = new Agente({name: 'Instancia', age: 33});

    agente.get(id, function(err, data){
        if (err){
            console.log(err);
            return res.json({ok: false, err: err});
        }
        res.json({ok: true, data: data});
    });

 });

//crea un agente
// POST  /apiz1/agentes
router.post('/', function(req, res, next) {              //meter esto en un get va a dar un problema dijo el tio, npi

    var nuevo = req.body;


    //crear un registro de agente

    var agente = new Agente(nuevo);  //    var agente = new Agente({name:'Nuevo' , age:18});

    agente.save( function(err, creado){
        if (err) {
            console.log(err);
            return res.json({ok:false, err: err});
        }
        //devolver una confirmacion
        res.json({ok:true, agente: creado});        //ok:true es para decir 'operacion ha sido bien'
    });

    //res.send('respond with a resource');
});

    module.exports = router;