var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'businet-web.com',
    user     : 'fsanmcbx_macrotecApp',
    password : 'fsanmcbx_macrote',
    database : 'appcontraseñ@'
  });

  module.exports = connection;
