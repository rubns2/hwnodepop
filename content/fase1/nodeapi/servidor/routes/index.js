var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Nodepop',  //cambie eltitulo from express a nodeapi
    dinge: '<h2>Anuncios de articulos</h2>',
    dinge1: '<h2>Articulos en venta</h2>',
    dinge2: '<h2>Se busca</h2>',
    listaTags: ['Work', 'lifestyle', 'motor','mobile'],
    listaCategorias: ['Articulos en venta', 'Se Busca'],
    anuncio1: ['llave', '50$', ],
    lista1: ['cosa', 'cosa', 'cosa'],
    lista2: ['uno', 'dos', 'tres'],
    par: (new Date()).getSeconds() % 2 === 0 ? 'par' : 'impar'    //intentar coger la fecha del sistema, y ver los segundos actuales son pare o impares, y va a devolver si es par o impar. date de la fecha actual
  });
});

module.exports = router;
