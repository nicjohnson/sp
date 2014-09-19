var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	console.log(res.locals.user);
  res.render('index', { title: 'Express', user: res.locals.user });
});

module.exports = router;
