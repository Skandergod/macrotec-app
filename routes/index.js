var express = require('express');
var router = express.Router();

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
module.exports = router;
//https://www.youtube.com/watch?v=mAOxWf36YLo