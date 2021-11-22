var nodemailer=require('nodemailer');

var transport=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'greetingcards914@gmail.com',
        pass:'Kapil#111'
    }
});
var mailoptions={
    from:'greetingcards914@gmail.com',
    to:'greetingcards914@gmail.com',
    subject:'fsdfdsf',
    text:'sdfdsfsfds'
}
transport.sendMail(mailoptions,function(err,info){
    if(err){
        console.log(err.message);
    }else{
        console.log("email has been sent");
    }
})