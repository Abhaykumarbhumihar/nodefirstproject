const express=require('express');
const app=express();

app.set('view engine','ejs')
app.get("/newprofile/:name",function(req,res){
data={name:'abhay',
      email:'abhay@gmail.com',
      phoneno:'8574185',
    skills:['Android','Flutter','Kotlin','java']}
    res.render('Profileejs',{name:req.params.name,data:data})
})

app.listen(3400)