var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var routes = ;
//var users = ;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(   path.join(__dirname, 'public')    ));

  //podemos poner mas carpetas de estaticos min 81.08 screeshot

app.use(function(req, res,next){   //para aclarar concepto de middleware d5s2min57    , anade '/libro', antes des function para que ej min2450 d5s2 funcione, o la url en ese momento
  console.log('Nos llama: ', req.headers.host);    //podemos comprobar sim el que nos llama lo hace de un mobil, y puedes ver si es android apple
  // pedir a express dato de una cabezera
  var esAndroid = req.get('user-Agent').match(/Android/i); //en cualquier parte de la cadena sea mayuscula o minusc
  if (esAndroid) {
    console.log(req.get('user-Agent'));

  }
  req.Android= esAndroid;
  next();
});

var dbMysql = require('./lib/dbMysql');   //no hace falta crear var xq no lo vas a usar para mas nada, puedes escribir require('./lib/db');
var dbMongo = require('./lib/dbMongo');     //si quieres puedes borrar la parte var dbMongo =, xq no es necesario aqui,
var Agente = require('./models/Agente.js');   //si quieres puedes borrar la parte var Agente =, xq no es necesario aqui,
console.log(__dirname);       //esto lo anadiste en min 85:50 dia3s1, pinta la ruta de donde estamos    eso-->/Users/Scheveningen/Desktop/cursoKCNodejs/01_servidor_basico/ejemplos_node/pruebaDia3/nodeapi/servidor

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/mysql', require('./routes/mysql'));
app.use('/agentes', require('./routes/agentes'));

// API Version 1

app.use('/apiv1/agentes', require('./routes/apiv1/agentes'));

//API Version 2

//app.use('/apiv2/agentes', require('./routes/apiv2/agentes'));

// anadimos nuevo controlador para /dependencies
app.use('/dependencies', require('./routes/dependencies'));


//Zona de admin

//con basic auth
app.use('/admin', require('./routes/admin'));

// con JSON web token   vid 5s2min83

app.use('/apiv1/admin2', require('./routes/apiv1/admin2'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
