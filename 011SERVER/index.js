var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/plain;charset=utf-8"});
    res.write("hung qua dep trai !")
    res.end()
}).listen(3000)