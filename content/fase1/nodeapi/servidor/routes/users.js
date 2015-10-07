var express = require('express');
var router = express.Router();

/* GET users listing. */
//router.get('/:cochesid', function(req, res, next) {     //
  //res.send('respond with a resource');                  //
//});                                                     //

//recibiendo prametros min99

router.get('/:cochesid?', function(req, res, next) {

  console.log('params:', req.params);
  console.log('query:', req.params);

  var coches = req.params.coches;     //una formaa de recibir parametros, min 97 dia3 s1

  var edad = req.query.coches;        //min 100

  res.send('respond with a resource');
});

// peticion con body
router.post('/:id', function(req, res){
  "use strict";

  console.log('body:', req.body);

  res.send('cogido el body!');

});


module.exports = router;




/**router.get('/:coches', function(req, res, next) {

  console.log(req.params);

  var coches = req.params.coches;     //una formaa de recibir parametros, min 97 dia3 s1

  res.send('respond with a resource');
});**/