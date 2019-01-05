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

module.exports = router;
//https://www.youtube.com/watch?v=mAOxWf36YLo