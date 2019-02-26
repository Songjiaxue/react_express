var express = require('express');
var md5 = require('md5');
var router = express.Router();
var sql = require('../config/sql-com');
var mapping = require('../config/sql-mapping');

/*
** randomWord 产生任意长度随机字母数字组合
** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
*/
 
function randomWord(randomFlag, min, max){
    let str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 
    // 随机产生
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(let i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}

module.exports.login = function(req, res) {
    const { userName, password, } = req.body;
    sql._fun.query(mapping.user.query_user, function(err, rows) {
        if (err) {
            console.log(err);
            sql._fun.failure(err, function(result) {
                res.json(result);
            });
        } else {
            sql._fun.success(rows, function(result) {
                const isUser = rows.filter(v => v.userName === userName && v.password === password);
                console.log(rows);
                const r = isUser.length ? {
                    code: 200,
                    message: '登录成功',
                    data: {
                        token: randomWord(false,43),
                        userInfo: Object.assign({},isUser[0],{password: undefined,}),
                    },
                } : {
                    code: 401,
                    message: '用户名或密码错误',
                    data: null,
                };
                res.json(r);
            });
        }
    });
};