const express=require('express');
const app=express();
app.get("/profile",function(req,res){

    res.sendFile(__dirname+"/First.html")
})

app.listen(4600);

