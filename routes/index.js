var express = require('express');
var router = express.Router();
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/');
    }
}
function loggedInHome(req, res, next) {
  if (req.user) {
    res.redirect('/home');
  } else {
    next();
  }
}
/* GET home page. */
router.get('/',loggedInHome, function(req, res, next) {
  res.render('index', { title: 'Macrotec App' });
});
router.get('/home',loggedIn, function(req, res, next) {
  res.render('dashboard/home', { title: 'Home' });
});
router.get('/administracion/softwares-autodesk', function(req, res, next) {
  res.render('administracion/softwares-autodesk', { title: 'Softwares Autodesk' });
});
router.get('/administracion/cursos', function(req, res, next) {
  res.render('administracion/cursos', { title: 'Cursos' });
});


router.post('/login',
  passport.authenticate('local', { successRedirect: '/home',
                                    failureRedirect: '/',
                                    failureFlash: true })  
);

module.exports = router;
//https://www.youtube.com/watch?v=mAOxWf36YLo