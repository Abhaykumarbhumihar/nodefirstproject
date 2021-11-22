var event=require('events');
const { EventEmitter } = require('stream');

var eventEmitter=new event.EventEmitter();
EventEmitter.on("call event",function(name){
    console.log(name);

})

EventEmitter.EventEmitter("call event","Abhay");