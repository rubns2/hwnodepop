/**
 * Created by Scheveningen on 9/19/15.
 */


"use strict";

var http = require('http');

var server = http.createServer( function(request, response){
    response.writeHead(200, {'Content-type': 'text/html'});
    response.end('HALLO' );

});

server.listen(1337, '127.0.0.1');

console.log('servidor arrancado en http://127.0.0.1:1337');


