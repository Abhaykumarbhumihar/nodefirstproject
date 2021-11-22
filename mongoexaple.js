const express = require('express');
const app = express();
const mongos = require('mongoose');
const bodyparser = require('body-parser'); 
const User = require('./usermodel')
var jsonparser=bodyparser.json();
var urlencoded = bodyparser.urlencoded();
app.set('view engine', 'ejs')

var mongoData = [];
mongos.connect('mongodb+srv://abhay:f3ZjpM7jPyXQc6ZT@cluster0.zi5ni.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',

    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });


function getData() {

    User.find({}, function (err, data) {

        console.log("QUERY HIT");

        if (err) console.warn(err);
        console.log(data);
        mongoData = data.map(function (a) { return a.email; });

        console.log(mongoData);
        console.log("Testing");

    });
}




function inserData(name, email, address) {
    const iUser = new User({
        _id: new mongos.Types.ObjectId(),
        name: name,
        email: email,
        address: address
    })
    iUser.save().then((result) => {
        console.warn("Data add");
        console.warn(result);
    });
}



app.get("/dashboard", urlencoded, function (req, res) {
    
    inserData(req.query.name,req.query.email,req.query.address)
    res.render('dashboardpage')
});


app.get("/getmongodata", function (req, res) {
    getData();
    setTimeout(function () {
        console.log('boo')
        res.render('Showdata', { data: mongoData })
      }, 100)
});



// post api, it will give name in response in postman
app.post('/users',jsonparser,function(req,res){
console.warn("DDDDDDDD");
  inserData(req.body.name,req.body.email,req.body.address)
    res.end(req.body.name+" "+req.body.email+" "+req.body.address);   
})

app.delete('/user/email:',function(res,req){
    console.warn("DIIIIIIIIIIIIII");
User.deleteMany({email:req.params.email}).then((result)=>{
    console.log("delete data");
res.status(200).json(result)
}).catch((err)=>{
    console.warn("DDLFKL:DKFL:DKSL:FKDLS:KFL:DSk")

})
})

app.listen(3491)


