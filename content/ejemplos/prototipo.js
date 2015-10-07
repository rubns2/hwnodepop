"use strict";

//hacemos un constructor de objetos

var Persona = function(name)  {
    this.name = name;
}



//creamos un objeto

var persona = new Persona('Thomas');


//le asignamos un metodo a el objeto

persona.saluda = function() {
    console.log('hola soy ' + this.name);

};

persona.saluda();

//creamos otro objeto


var Luis = new Persona('Luis');



//veremos que no tiene el metodo


//Luis.saluda();      //no funciona, xq no tiene el metodo


//ponerle un metodo al prototipo


Persona.prototype.come = function() {
    console.log('nham nham');

};

//lo tienen todos

persona.come();
Luis.come();



//ejemplo slide prototipo herenecia

function Agente(name){
    Persona.call(this, name)
}

//heredamos las propiedades de prototipo
Agente.prototype = new Persona();       //heredaria name y saluda

var pepe = new Agente('Pepe');

pepe.come();                        //saluda no se puede heredar, porque no le hicistesprototype

