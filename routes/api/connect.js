var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'businet-web.com',
    user     : 'fsanmcbx_macrotecApp',
    password : 'fsanmcbx_macrote',
    database : 'appcontraseña'
  });

  module.exports = connection;
