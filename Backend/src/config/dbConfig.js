const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'mariadb',
  user: 'steve',
  password: 'stevedarius',
  database: 'DreamWorld',
  port: 3306,
  connectionLimit: 10
});

module.exports = pool.promise(); 
