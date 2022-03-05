var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/tin-tuc', function(req, res, next) {
  res.render('tin', { title: 'tin tuc' });
});

/* GET home page. */
router.get('/san-pham', function(req, res, next) {
  res.render('sanpham', { title: 'san pham',noidung:'hung qua dep trai can bao ton' });
});


/* GET home page. */
router.get('/sinh-vien', function(req, res, next) {

  var dulieu={danhsachsv :["hung","linh","dong","long"]}
  res.render('sinhvien', { title: 'sinh vien',danhsach:dulieu});
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});

/* GET home page. */
router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'about'});
});

/* GET home page. */
router.get('/post.html', function(req, res, next) {
  res.render('post', { title: 'Post'});
});

// /* GET home page. */
// router.get('/sp/:chisosanpham', function(req, res, next) {
//   res.send('Day la trang san pham')
// });

/* GET home page. */
router.get('/sp/:chisosanpham-:gia', function(req, res, next) {
  res.send('Day la trang san pham '+ req.params.chisosanpham + 'gia san pham la ' + req.params.gia)
});

/* GET home page. */
router.get('/fedu?vn', function(req, res, next) {
  res.send('Test');
});

/* GET home page. */
router.get('/fe(du)?vn', function(req, res, next) {
  res.send('Test');
});

/* GET home page. */
router.get('/zing*vn', function(req, res, next) {
  res.send('Test zing vn');
});

/* GET home page. */
router.get('/*.:mabaiviet', function(req, res, next) {
  res.send('Test link kieu tinh te vn' + req.params.mabaiviet);
});


module.exports = router;
