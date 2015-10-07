/**
 * Created by Scheveningen on 9/26/15.
 */
'use strict';

//abrir un fichero package.json

var fs = require('fs');

function leeDependencies( cb ){

    fs.readFile(__dirname + '/../package.json', function(err, data) {
        if (err) {
         return cb(err);

    }

                  //para comprobar si algo es sincrono

    //parsearlo
    try {
        var packageJson = JSON.parse(data);



    } catch (e) {
        return cb(e);
    }

    //devolver las dependencias

    return cb(null, Object.getOwnPropertyNames(packageJson.dependencies));
});






}
    module.exports = leeDependencies;