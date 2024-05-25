const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'steve',
  password: 'stevedarius',
  database: 'DreamWorld',
  port: 3306,
  connectionLimit: 10
});

module.exports = pool.promise(); 
