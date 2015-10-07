/**
 * Created by Scheveningen on 9/27/15.
 */
"use strict";

var mysql = require('mysql');

var connection = mysql.createConnection({
    host :'didimo.es',
    user :'usuariocurso',
    password: 'us3r',
    database: 'cursonode'

});

connection.connect(function(err, data){
    if (err) {
        console.log(err);
        process.exit(1);
        return;                    // no hace falta pero asi el que lo lee lo entiende mejor
    }
    console.log('conectado a mysql'+ data);     //puede poner ",data"   con +, daobject object enel terminal ...npi


});

module.exports = connection;        //es importatant que pongas esto, si no no vasa dar esa info
