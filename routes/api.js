var express = require('express');
var router = express.Router();
var api = require('../api/user');

/* GET users listing. */
router.post('/login', function(req, res, next) {
    api.login(req, res);
});
module.exports = router;