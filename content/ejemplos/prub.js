/**
 * Created by Scheveningen on 9/22/15.
 */
"use strict";
/**
 {
     "nombre":"raul",
     "edad":"20"
 }
 **/

/**
 var Coche = function(name){
    this.name = name;
    this.saluda = function() {
        console.log('hola soy ' + this.name);
    }

};
 //creamos un objeto

 var tesla = new Coche('tesla');

 //llamamos al metodo
 tesla.saluda();

 //otro llama al metodo

 //setTimeout(tesla.saluda, 1000);         //aki setTimeout llama a saluda

 //setTimeout(tesla.saluda(), 1000);         //aki tesla llama a saluda,


 //setTimeout(tesla.saluda.saluda, 1000);          //npi


 setTimeout(tesla.saluda.bind(tesla), 1000); //para poder asignar un this que nosotros queramos, cuando veas que se nos escapa


 **/

var Coche = function(name){
    this.name = name;
    this.saluda = function() {
        console.log('hola soy ' + this.name);
    }

};

var tesla = new Coche('tesla');

var planta = function(name) {
    this.name = name;
    this.crece = tesla.saluda;      //reutiliza el metodo
    this.crece1 = function() {
        tesla.saluda();
    }


}
//setTimeout(tesla.saluda.bind(tesla), 1000); //para poder asignar un this que nosotros queramos, cuando veas que se nos escapa

var planta = new planta('flor');
console.log(planta.crece)
planta.crece();                     //dice hola soy flor, this cambia
planta.crece1();                //hola soy tesla


