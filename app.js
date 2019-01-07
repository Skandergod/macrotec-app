var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var mysql = require('mysql');
const request = require('./routes/api/connect');
var connection = mysql.createConnection({request});

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;



passport.use(new LocalStrategy(
  function(username, password, done) {

    connection.connect();
    connection.query('SELECT username, password FROM users WHERE username = '+ username +' AND password = '+ password +';',
    function(err,rows){
      if (err)
          return done(err);
       if (!rows.length) {
          return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
      } 

    if (!( rows[0].password == password))
      return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

    
    connection.close();
    return done(null, rows[0]);
  });

}));


  
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('*/assets',express.static(path.join(__dirname, 'public/assets')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
