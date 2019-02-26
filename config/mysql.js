var mysql = require('mysql');
var sql = mysql.createPool({
    user: 'root',
    password: 'root',
    database: 'qwerty',
    dateStrings: true
});
module.exports.sql = sql;