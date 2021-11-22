const express=require('express');
const appp=express();
appp.get('/',function(req,res){
    res.send("Hello this is my first day in Express js")
}).listen(4500);