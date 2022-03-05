var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/start-style.chn', function(req, res, next) {
    res.send('Day la trang fashion > Start style');
  });
  
  router.get('/fashion-icon.chn', function(req, res, next) {
    res.send('Day la trang fashion > fashion-icon');
  });
  
  /* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Day la trang fashion Ban Dau');
  });
  
  module.exports = router;
  