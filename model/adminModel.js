const mongoose = require("mongoose")
const adminSchma = new mongoose.Schema(
    {
        email : {type: String, required:true,unique: true},
        password: {type: String, unique: true},
        
    }
)

module.exports = mongoose.model("Admin", adminSchma)

