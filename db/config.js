const mongoose = require("mongoose")
module.exports =  mongoose.connect("mongodb://localhost:27017/task")
.then(()=>{
    console.log("mongoose is connected")
}).catch((error)=>{
    console.log("connection error")
})