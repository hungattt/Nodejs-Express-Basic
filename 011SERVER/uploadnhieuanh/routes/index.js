var express = require('express');
const multer  = require('multer')
const mongoose = require('mongoose');
var uploadspModel=require('../model/uploadsp');
var router = express.Router();

mongoose.connect('mongodb://localhost:27017/sanpham');


var anhs=[];

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './anhsanpham')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Post uploadfile. */
router.post('/uploadfile',upload.any() ,function(req, res, next) {
  // console.log(req.files);
  //console.log(req.files[0].path);
  var tentamthoi=req.files[0].path;
  anhs.push(tentamthoi);
  console.log(anhs);
  res.status(200).send(req.files);
 
});

/* Up ten va gia san pham. */
router.post('/upsanpham', function(req, res, next) {
  var ten=req.body.ten;
  var gia=req.body.gia;
  console.log(anhs);
  console.log(ten);
  console.log(gia);

  var motdoituong={
    "ten":ten,
    "gia":gia,
    "anh":anhs
  }
  var dulieu = new uploadspModel(motdoituong);
  dulieu.save();
  res.render('thanhcong');
});

/* GET Xem du lieu. */
router.get('/xemsp', function(req, res, next) {
  
  uploadspModel.find({},function(err,dulieu){
    res.render('xemsp', { data:dulieu });
  });
  
});


module.exports = router;
