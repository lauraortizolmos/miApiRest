const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'sql3.freemysqlhosting.net',
  user: 'sql3340376',
  password: 'vrpXdZV74T',
  database: 'sql3340376',
  multipleStatements: true

});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
  

