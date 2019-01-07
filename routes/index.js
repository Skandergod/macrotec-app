var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const request = require('./api/connect');
var connection = mysql.createConnection({request});

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


  app.configure(function() {
    app.use(express.static('public'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.session({ secret: 'keyboard cat' }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
  });

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

app.post('/',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

  app.post('/',
  passport.authenticate('local', { successRedirect: '/dashboard',
                                   failureRedirect: '/',
                                   failureFlash: true })
);

app.get('/api/users/me',
  passport.authenticate('basic', { session: true }),
  function(req, res) {
    res.json({ id: req.user.id, username: req.user.username });
  });


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
module.exports = router;
//https://www.youtube.com/watch?v=mAOxWf36YLo