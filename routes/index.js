var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/next', function(req, res, next) {
  res.render('index', { title: '你现在进入了下一个页面' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  res.render('index',{title: 'my friend you have registered'});
});

router.get('/user/:id', function(req, res, next) {
  res.render('index',{title: req.params.id});
});

module.exports = router;
