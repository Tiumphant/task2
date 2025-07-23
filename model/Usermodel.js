const mongoose = require("mongoose")
const  userSchema =  new mongoose.Schema({
     firsName: {type: String},
    lastName: {type: String},
    address: {type: String},
    email: {type: String,required: true ,unique: true},
    password: {type: String, required: true},
    assignedTo: {type: mongoose.Schema.Types.ObjectId, ref : "Employee"}
})
module.exports = mongoose.model("User", userSchema)