var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'businet-web.com',
    database     : 'fsanmcbx_macrotecApp',
    user : 'fsanmcbx_macrote',
    password : 'appcontraseña'
  });

  module.exports = connection;
