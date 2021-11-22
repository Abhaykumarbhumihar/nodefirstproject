const express=require('express');
const appp=express();
const router=express.Router();


// const checkurl = function(req,res,next){
//  console.log("Curent route is ", req.path)
//     next();
// }

const checkurl=require('./middleware');


appp.use(checkurl)

router.get('/user',checkurl,function(req,res){
    
    res.send("THIS is user page")
})

appp.get('/user1',function(req,res){
    //file ya page ya koi html file load krwane k liye
    res.sendFile(__dirname+"/First.html");
});

appp.get('/login',function(req,res){
    
    res.send("Youvxcvxc are on login page")
})


appp.get('/dashboard',function(req,res){
    res.send("<p>Hii you are on dashboard</p>")
})


appp.post('/login1',function(req,res){
    res.send("post rout here hit")
})


appp.put('/update',function(req,res){
    res.send("Put for update ");
});


appp.use('/',router);
appp.listen(4500);


