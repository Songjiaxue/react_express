var mysql = require('./mysql'); // 获取数据库连接配置

var _fun = {
    query: function(sqlMapping, callback) {
        mysql.sql.getConnection(function(err, connection) {
            // Use the connection
            connection.query(sqlMapping, function(err, rows) {
                callback(err, rows);
                connection.release(); //释放链接
            });
        });
    },
    success: function(res, callback) {
        var result = {
            result: res,
            success: true,
            code: 200
        };
        callback(result);
    },
    failure: function(res, callback) {
        var result = {
            result: res.code,
            success: false,
            code: res.errno
        }
        callback(result);
    }

}
module.exports._fun = _fun;