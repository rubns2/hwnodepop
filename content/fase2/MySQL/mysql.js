/**
 * Created by Scheveningen on 9/26/15.
 */
"use strict";

//requerir el driver

var mysql = require('mysql');


//crear una conexion

var connection = mysql.createConnection({
   host :'didimo.es',
    user :'usuariocurso',
    password: 'us3r',
    database: 'cursonode'

});

//conectar

connection.connect();

//leer filas - query                        //limit 0,10 es para controlar, si los quitas igual funciona

connection.query('SELECT * FROM agentes limit 0,10', function(err, rows, fileds){     //cuando haces codigo asincrono usas callback!
    if (err) {
        throw err;      //con throw no hace falta return, no uses

                    //throw no lo debes usar cuando estas en el controlador de un site, en ese caso usa try catch
    }
    rows.forEach(function(row){         //si quitas estas linea los resultados salen igual
        console.log(row);

    });

    console.log(fileds);

});



/**connection.query('SELECT * FROM usuarios limit 0,10', function(err, rows, fileds){     //cuando haces codigo asincrono usas callback!
    if (err) {
        throw err;      //con throw no hace falta return, no uses

                    //throw no lo debes usar cuando estas en el controlador de un site, en ese caso usa try catch
    }
    rows.forEach(function(row){         //si quitas estas linea los resultados salen igual
        console.log(row);

    });

    console.log(fileds);


    connection.query('SELECT * FROM usuarios limit 0,10', function(err, rows, fileds){     //cuando haces codigo asincrono usas callback!
    if (err) {
        throw err;      //con throw no hace falta return, no uses

                    //throw no lo debes usar cuando estas en el controlador de un site, en ese caso usa try catch
    }
    rows.forEach(function(row){         //si quitas estas linea los resultados salen igual
        console.log(row);

    });

    console.log(fileds);


    connection.query('SELECT * FROM usuarios limit 0,10', function(err, rows, fileds){     //cuando haces codigo asincrono usas callback!
    if (err) {
        throw err;      //con throw no hace falta return, no uses

                    //throw no lo debes usar cuando estas en el controlador de un site, en ese caso usa try catch
    }
    rows.forEach(function(row){         //si quitas estas linea los resultados salen igual
        console.log(row);

    });

    console.log(fileds);



});**/