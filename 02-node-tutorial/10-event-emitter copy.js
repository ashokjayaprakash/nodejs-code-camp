const EventEmitter = require('events');

// https://nodejs.org/api/events.html

const event = new EventEmitter()

event.emit("user_created", { id: 10})

event.once("app_started", (data)=>{
    console.log("app_started")    
})


event.on("user_created", (data)=>{
    if(data.id == 25) {
        // console.log
        
    }
    console.log(data)
    // sendEmail()
})

event.emit("user_created", { id: 11, email: "app.grr.la"})

event.emit("app_started")
event.emit("app_started")
event.emit("app_started")

event.emit("user_created", { id: 25, email: "app.grr.la"})

event.off("user_created", (data)=>{
    console.log("Removed", data)
})
event.removeAllListeners()
event.emit("user_created", { id: 24, email: "app.grr.la"})
event.emit("user_created", { id: 23, email: "app.grr.la"})


// event.removeListener("app_started")





/*
Publisher/ Emitter -> Subscriber/ Listener

-> Create User /user
        userService=> DB Store, Email
-> 

*/