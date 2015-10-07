/**
 * Created by Scheveningen on 10/4/15.
 */
"use strict";

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


//middleware que comprueba cada peticion y verifica que el token que nos es valido                                                               con .get evitas que pida autenticacion aqui...
router.get('/', function(req, res, next){

    //coger el token que nos da el usuario
    var token = req.body.token ||
                req.query.token ||
                req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, 'clavedeservidorsupersecreta', function(err, decoded) {
            if (err){
            return res.status(401).json({ok: false, error: 'Token no valido'});
        }

        req.decoded = decoded;
        //el usuario esta autenticado y puede seguir con la peticion de otros middlewares
        next();

    });
 } else {

    return res.status(401).json({ok: false, error: 'Token requerido'});
}

});



router.post('/authenticate', function(req,res){
    var user = req.body.user;
    var pass = req.body.pass;

    // buscar el usuario en la base de datos
    // ... simulado

    var found = {_id:'123', name:'Smith', password: 'ds87ds78ds'};

    //si no lo encrotamos
    //return res.status(401).json({ok:false, error: 'Usuario no encontrado'});


    //encrotado
    if (found.password != pass) {
        return res.status(401).json({ok: false, error: 'Contrasena no es correcta'});
    }

    //creamos un token
    var token = jwt.sign(found, 'clavedeservidorsupersecreta',{
        expireInMinutes: 60 * 24 * 2
    });

//se lo devolvemos al usuario
    res.json({ ok: true, toke: token});
});



/* GET home page. */
router.get('/', function(req, res, next) {

    console.log('decode', req.decoded);

    res.send('Zona de admin');
});

//midleware que comprueba el token


module.exports = router;