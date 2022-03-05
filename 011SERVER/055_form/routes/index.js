var express = require('express');
var router = express.Router();
var multer = require('multer')

// chi ra duong dan upload va ten file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname + '-' + uniqueSuffix)
  }
})

//check chi cho up anh
function checkFileUpload (req, file, cb) {

  if(!file.originalname.match(/\.(jpg|png|gif|jpeg)$/)){
    cb(new Error('ban chi dc upload file anh!'));
  }else{
    cb(null,true)
  }

  // You can always pass an error if something goes wrong:
  //cb(new Error('I don\'t have a clue!'))

}
const upload = multer({ storage: storage ,fileFilter:checkFileUpload})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Lay du lieu tu trang chu. */
router.post('/',upload.single('anhsp'), function(req, res, next) {
  var tieude= req.body.tdsp;
  res.send('Da nhan duoc du lieu nhe , tieu de la : '  + tieude);
});

module.exports = router;
