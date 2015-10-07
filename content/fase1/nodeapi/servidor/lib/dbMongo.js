/**
 * Created by Scheveningen on 10/3/15.
 */
"use strict";

var mongoose = require('mongoose');

var db = mongoose.connection;

//handler de error de conexion

db.on('error', function(err) {

    condsole.log(err);
    process.exit(1);
});

//handler de conexion

db.once('open', function() {
    console.log('conectando a mongodb');
});

//conectamos

mongoose.connect('mongodb://localhost/prueba');

