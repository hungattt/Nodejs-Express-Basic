const e = require('express');
var express = require('express');
var router = express.Router();
var contactModel=require('../model/contact.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  contactModel.find({},function(err,dulieu){
    console.log('oki');
    console.log(dulieu);
    res.render('index', { title: 'home',data:dulieu });
  })
  
  });

// /* GET home page. */
// router.get('/*.:idsanpham', function(req, res, next) {
//   var idsp =req.params.idsanpham;
//   if(!req.session.sanphamdaxem)
//   {
//     req.session.sanphamdaxem=[];
//   }
//   if(req.session.sanphamdaxem.indexOf(idsp)==-1)
//   {
//     req.session.sanphamdaxem.push(idsp);
//   }
//   if(req.session.sanphamdaxem.indexOf(idsp) !=-1)
//   {
//     req.session.sanphamdaxem.pop(idsp);
//   }

//   contactModel.find({},function(err,dulieu){

//     res.render('chi-tiet-san-pham', {idsanpham:req.params.idsanpham,danhsach:req.session.sanphamdaxem,data:dulieu});
//   })
  
  
// });



/* GET Chi tiet viet them */
router.get('/chi-tiet-san-pham/:idsanpham', function(req, res, next) {
  var id2 = req.params.idsanpham;

  if(!req.session.sanphamdaxem)
  {
    req.session.sanphamdaxem=[];
  }
  if(req.session.sanphamdaxem.indexOf(id2)==-1)
  {
    req.session.sanphamdaxem.push(id2);
  }
  if(req.session.sanphamdaxem.indexOf(id2) !=-1)
  {
    req.session.sanphamdaxem.pop(id2);
  }
  
  contactModel.find({_id:id2},function(err,dulieu){
    console.log(dulieu);
    res.render('chi-tiet-san-pham',{data:dulieu});
  });
  });


/* GET home page. */
router.get('/ds', function(req, res, next) {
  console.log('gia tri cua session : ');
  console.log(req.session.sanphamdaxem);
  res.render('ds', { danhsach:req.session.sanphamdaxem });
});


/* GET danh sach sua lai. */
// router.get('/ds', function(req, res, next) {
//   var danhsach=[]
//   danhsach=req.session.sanphamdaxem;
//   danhsach.forEach(function(id3){
//   console.log(id3);
//   contactModel.find({_id:id3},function(err,dulieu){
//     console.log(dulieu);
//     res.render('ds',{data:dulieu});
//   });
// });
// });

module.exports = router;
