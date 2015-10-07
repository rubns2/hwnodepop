/**
 * Created by Scheveningen on 10/6/15.
 */
/**
 * Created by Scheveningen on 10/4/15.
 */
"use strict";

var express = require('express');
var router = express.Router();
var basicAuth = require('basic-auth');

//basic authentication
router.use( function(req, res, next){
    //al cargarlo es este router, carga a todas las rutas de este router
    //cargar el usuario de la cabecera
    var user = basicAuth(req);

    //comprobamos si existe el usuario
    if (!user || user.name !== 'registrado' || user.pass !== 'registrado'){
        //si no existe, devolver el error


        //ponemos cabecera de basic auth

        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');

        res.send(401);      //para que express entienda

        return;
    }
    //si existe next

    next();


});







/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Zona dee administracion');
});



module.exports = router;        //hmmmm