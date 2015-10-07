/**
 * Created by Scheveningen on 9/22/15.
 */
/**
 * Created by Scheveningen on 9/22/15.
 */
'use strict';
//necesitamos libreria de para los eventos

var events = require('events');

var myEventEmitter = new events.EventEmitter();

myEventEmitter.on('suena telefono', function(quien){
    if (quien === 'madre'){

        return;
    }
    console.log('ring ring');

});

myEventEmitter.on('suena telefono', function(){
    console.log('brr brr');

});

//aqui emites, y llamas tu dos callback
//myEventEmitter.emit('suena telefono');

            //ring ring
            //brr brr

myEventEmitter.emit('suena telefono', 'madre');
