const mongoose = require('mongoose');
const sanpham = new mongoose.Schema({title: 'string',bigImage:'string',productImage:'Mixed',des:'string',client:'string',role:'string' ,cat:'string',link:'string',duongDanSeo:'string'},{collection:'sanpham'});
module.exports= mongoose.model('sanpham', sanpham);
