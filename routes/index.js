var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const request = require('./api/connect');
var connection = mysql.createConnection({request});

function login(){
  connection.connect();
  console.log('me invocaron!');
  connection.close();
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Macrotec App' });
});
router.get('/home', function(req, res, next) {
  res.render('dashboard/home', { title: 'Home' });
});
router.get('/administracion/softwares-autodesk', function(req, res, next) {
  res.render('administracion/softwares-autodesk', { title: 'Softwares Autodesk' });
});
router.get('/administracion/cursos', function(req, res, next) {
  res.render('administracion/cursos', { title: 'Cursos' });
});
module.exports = router;
//https://www.youtube.com/watch?v=mAOxWf36YLo