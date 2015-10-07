/**
 * Created by Scheveningen on 9/27/15.
 */
"use strict";
var express = require('express');
var router = express.Router();


var dbMysql = require('../lib/dbMysql');

router.get('/',function(req, res){      //res es response
    db.query('SELECT* FROM agentes', function(err, rows){           //puedes agragar campos ",fileds"  , el tipo escribio fileds envez de fields.. me confundion eso

        res.render('mysql', {title:'agentes mysql', rows: rows});
    });

});



/*var connection = mysql.createConnection({
    host :'didimo.es',
    user :'usuariocurso',
    password: 'us3r',
    database: 'cursonode'

});
    */

module.exports = router;