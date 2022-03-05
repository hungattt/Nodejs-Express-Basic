var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/suadau/:sdt', function(req, res, next) {
  res.cookie('dt',req.params.sdt,{maxAge:300000});
  res.send('so dien thoai la ' + req.params.sdt);
});

router.get('/banhran', function(req, res, next) {
  
  res.send('so dien thoai luu o cookie la : ' + req.cookies.dt);
});

router.get('/xoa', function(req, res, next) {
  res.clearCookie('dt');
  res.send('da xoa cookie roi !!!!');
});

router.get('/taosession', function(req, res, next) {
  req.session.monan="bun rieu cua";
  res.send('da tao session roi !!!!');
});

router.get('/laysession', function(req, res, next) {
 
  res.send('session la : '+ req.session.monan);
});

router.get('/huysession', function(req, res, next) {
 req.session.destroy(function(err){
   console.log(err);
 });
  res.send('session da huy !!');
  res.end();
});


module.exports = router;
