var events = require('events');


var eventEmitter=new events.EventEmitter();

eventEmitter.on("watch",function(name){
    console.log(name,"ABhay");
 
})

eventEmitter.emit("watch","Abhay");