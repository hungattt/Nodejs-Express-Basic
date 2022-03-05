var express = require('express');
var router = express.Router();

const MongoClient  = require('mongodb').MongoClient;
var chuyenthanhObjectId=require('mongodb').ObjectId;

const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

//Database Name
const dbName='contact'

// MongoClient.connect(url,function(err,client){
//   assert.equal(null,err);
//   console.log("ket noi thanh cong");

//   const db =client.db(dbName);

//   client.close();
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET them du lieu. */
router.get('/them', function(req, res, next) {
  res.render('them', { title: 'them moi du lieu' });
});

/* POST them du lieu. */
router.post('/them', function(req, res, next) {
  var duLieu01={
    "ten":req.body.ten,
    "dienthoai":req.body.dt
  }

  const insertDocuments=function(db,callback){
    const collection =db.collection('nguoidung');
    collection.insert(duLieu01,function(err,result){
      assert.equal(err,null);
      
      console.log("Them du lieu thanh cong");
      callback(result);
    });
  }

   MongoClient.connect(url,function(err,client){
      assert.equal(null,err);
      console.log("ket noi thanh cong");
    
      const db =client.db(dbName);
      insertDocuments(db,function(){
        client.close();
      });
     
    });

  res.redirect('/them');

});

/* GET xem. */
router.get('/xem', function(req, res, next) {

  const findDocuments=function(db,callback){
    const collection=db.collection('nguoidung');
    collection.find({}).toArray(function(err,docs){
      assert.equal(err,null);
      callback(docs);
    });
  }

  MongoClient.connect(url,function(err,client){
    assert.equal(null,err);
    console.log("ket noi thanh cong");
  
    const db =client.db(dbName);
    findDocuments(db,function(dulieu){
      res.render('xem', { title: 'xem du lieu' ,data:dulieu});
      console.log(dulieu)
      client.close();
    });
   
  });

});

/* xoa du lieu. */
router.get('/xoa/:idcanxoa', function(req, res, next) {
  var idcanxoa = chuyenthanhObjectId(req.params.idcanxoa);
  // ham xoa
  const xoacontact= function(db,callback){
    const collection =db.collection('nguoidung');
    collection.deleteOne({_id:idcanxoa} , function(err, result){
        assert.equal(err,null);
        console.log("xoa thanh cong");
        callback(result);
    });
  }

  // ket noi mongo de xoa
  MongoClient.connect(url,function(err,client){
    assert.equal(null,err);
  
    const db =client.db(dbName);
    xoacontact(db,function(){

      client.close();
    });
  });


  res.redirect('/xem')
  //res.render('index', { title: 'Express' });
});

/* Sua du lieu. */
router.get('/sua/:idcansua', function(req, res, next) {
  var idcansua = chuyenthanhObjectId(req.params.idcansua);
  //res.render('index', { title: 'Express' });
  
  const findDocuments = function(db,callback){
    const collection = db.collection('nguoidung');
    collection.find({_id : idcansua}).toArray(function(err,docs){
      assert.equal(err,null);
      console.log('Tim thay');
      callback(docs);
    });
  }

  MongoClient.connect(url,function(err,client){
    assert.equal(null,err);
    console.log("ket noi thanh cong");
  
    const db =client.db(dbName);
    findDocuments(db,function(dulieu){
      res.render('sua', { title: 'sua du lieu' ,data:dulieu});
      console.log(dulieu)
      client.close();
    });
   
  });
});

/* POST Sua. */
router.post('/sua/:idcansua', function(req, res, next) {
  var idcansua = chuyenthanhObjectId(req.params.idcansua);

  var duLieu01={
    "ten":req.body.ten,
    "dienthoai":req.body.dt
    }
    
    const updateDocument = function(db,callback){
      const collection=db.collection('nguoidung');

      collection.updateOne({_id:idcansua}
        ,{$set:duLieu01},function(err,result){
            assert.equal(err,null);
            callback(result);
        });
    }

    MongoClient.connect(url,function(err,client){
      assert.equal(null,err);
    
      const db =client.db(dbName);
      updateDocument(db,function(){
  
        client.close();
        res.redirect('/xem');
      });
    });


});


module.exports = router;
