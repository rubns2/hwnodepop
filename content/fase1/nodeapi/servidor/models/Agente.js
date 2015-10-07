/**
 * Created by Scheveningen on 10/3/15.
 */
"use strict";

var mongoose = require('mongoose');

//definir esquema de agente

var agenteSchema = mongoose.Schema({
   name: String,
    age: Number
});



var anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});

var usuarioSchema = mongoose.Schema({
    nombre: String,
    email: String,
    clave: String
});


var pushTokenSchema = mongoose.Schema({
    plataforma: {type: String, enum: ['ios', 'android']},
    token: String,
    usuario: String
});



// metodoestatico
agenteSchema.statics.lista = function( criterios, callback){



    //uso  .find sin el callback para que me devuelva un objeto query sin ejecutar

    var query = Agente.find(criterios);

    query.sort('name');

    query.exec( function(err, rows){
        if (err) {
            return callback(err);

        }
        return callback(null, rows);
    });
};

//metodo de instancia                                       //dia 5 s2
agenteSchema.methods.get = function(idAgente, callback) {
    console.log(this);
    return callback(null, this);        //el null dice que no hay errores
};

//metodo de instancia                            //cuando hacer esto si accionque quiero que haga el modelo es de un agente que ya lo tengo --> entoncesmetodo instancia
                                                 //si no tengo ese agente y quiero que mongoose lo coja de la base de datos, o coja varios y busque uno, o que guarde uno nuevo -->un estatico!
agenteSchema.methods.sumaEdad = function(cuanto) {
    this.age = this.age + cuanto;
    return this;
};





















//exportar

var Agente = mongoose.model('Agente', agenteSchema);
var Agente = mongoose.model('Agente', agenteSchema);
var Agente = mongoose.model('Agente', agenteSchema);
var Agente = mongoose.model('Agente', agenteSchema);

module.exports = Agente;        //es opcional aqui