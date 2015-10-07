/**
 * Created by Scheveningen on 10/4/15.
 */

"use strict";

var mongoskin = require('mongoskin');

var db = mongoskin.db('mongodb://localhost:27017/prueba');

db.collection('agentes').find().toArray(function(err, results){     //hacer una consulta, callback siempre son function(err, results)
    if (err) {
        throw err;
    }
    console.log(results);

});