var http = require('http');
var app=require('./4.js')
http.createServer(app.load_router).listen(3000)