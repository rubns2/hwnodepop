/**
 * Created by Scheveningen on 9/22/15.
 */
"use strict";

//la carpeta pruebaExpres tine npm install express

var express  = require('express');

// Crear una aplicaion de express

var app = express();

// le vamos a deecir que escuche peticioines en /

app.get('/', function(req, response){
    console.log('peticion');

    // vamos a responder las peticiones
    response.send('Was geht ab! wir haben viele leute heute!');                //envie algo .send

});

//para arrancar la app
var server = app.listen(3000, function(){
    var port = server.address().port;    //para ver el puerto
    console.log('servidor express arrancado en el puerto ' + port);
});

