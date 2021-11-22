const express=require('express');
const app=express();

const bodyparser=require('body-parser');
var urlencoded=bodyparser.urlencoded();

app.set('view engine','ejs')

app.get("/login",urlencoded,function(req,res){
    
    console.log(req.query)
res.render('Login')
})

app.get("/About",function(req,res){
    res.render('About')
})

app.get("/",function(req,res){
    res.render('Home')
})

app.get("/submitreq",urlencoded,function(req,res){
console.warn(req.query.email)
    res.render('senddetailpage')
})


app.listen(3200)


