var  http=require('http');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
res.write("hii how are you i am fine");
res.end();
}).listen(5000)