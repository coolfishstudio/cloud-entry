var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/game', function(req, res) {
  res.render('game', { title: 'Express' });
});
router.get('/app', function(req, res) {
  res.render('application', { title: 'Express' });
});
module.exports = router;
