/**
 * Created by Scheveningen on 9/20/15.
 */
"use strict";

// hacer un funcion que desuelve otra
//la segunda tendra acceso al scope de su madre

function creaUsuario(name) {
    var surName = 'Anderson';
    return {
        login: function() {
            console.log(name + ' ha hecho login');
        },
        setName: function(newName){
            name = newName;
        },

        logout: function() {
            console.log(name + ' ha hecho logout');
        },
        getSurname: function() {
            return surName;
        }
    };
}


//creamos el closure

var user = creaUsuario('tesla');

//usamos el closure

user.login();
user.setName('neo');
//user.logout();

setTimeout(user.logout, 1000);

console.log(user.getSurname());


