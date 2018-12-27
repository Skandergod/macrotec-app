var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'admin',
    database : 'Progress'
  });

  module.exports = connection;
