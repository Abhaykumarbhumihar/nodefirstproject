var data=[{"name":"Abhay",
"emali":"abhay@gmail.com",
"course":"Android"},
{"name":"Abhay",
          "emali":"abhay@gmail.com",
          "course":"Android"},
          {"name":"Abhay",
          "emali":"abhay@gmail.com",
          "course":"Android"},
          {"name":"Abhay",
          "emali":"abhay@gmail.com",
          "course":"Android"},
          {"name":"Abhay",
          "emali":"abhay@gmail.com",
          "course":"Android"},
          {"name":"Abhay",
          "emali":"abhay@gmail.com",
          "course":"Android"}]

var http=require('http');
var os=require('os');
const dns = require('dns');  


dns.lookup('www.javatpoint.com', (err, addresses, family) => {  
    console.log('addresses:', addresses);  
    console.log('family:',family);  
    add=addresses;
  });  
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'application\json'});
res.write(JSON.stringify(data));


console.log(add);
console.log(__dirname);
res.end();
}).listen(38000)


