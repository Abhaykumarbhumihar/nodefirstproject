const express=require('express');
const app=express();

app.set('view engine','ejs');

//todo---ejs se html me dynamic data set kr skte hai.
//ejs install krne k liye -->

app.get("/profile/:name",function(req,res){

    //res.sendFile(__dirname+'/First.html')
    //render is belong from ejs pacakage()

    console.warn(req.params);
    res.render('Profileejs',)
})

app.listen(4900)