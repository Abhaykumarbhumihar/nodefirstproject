module.exports= function(req,res,next){
    console.log("Curent route is ", req.path)
       next();
   }
   