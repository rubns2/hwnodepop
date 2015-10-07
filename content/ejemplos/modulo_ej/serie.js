/**
 * Created by Scheveningen on 9/22/15.
 */


//no puedes anadir varios modules exports, solo UNO
    
// si quieres exportar varias cosas, haces que te de un array,
// o un objeto con propiedades y  metodos



/**     //si activas este bloque, veras que te dara error cuando intentes exportar algo de aqui

var serie = function(){             //primer bloque
    "use strict";
    return 'resultado de funcion';
};

module.exports = serie;

**/

/**

module.exports = {                  //2do bloque
    vuela :function() {
        "use strict";
        return 'resultado de expoortar funcion vuela';
    },

    esquivaBAlas: function(){
        "use strict";
        return 'resultado de expoortar funcion esquivaBalas';

    }
};

**/

                                    //tercer bloque
module.exports.objeto = {
    vuela: function() {
        "use strict";
        return 'resultado de expoortar funcion vuela';
    },

    esquivaBAlas: function(){
        "use strict";
        return 'resultado de expoortar funcion esquivaBalas';

    }
};

