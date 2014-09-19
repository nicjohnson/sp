var express = require('express');
var stormpath = require('express-stormpath');
var router = express.Router();

/* GET users listing. */
router.get('/', stormpath.loginRequired, function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
