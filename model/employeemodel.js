const mongoose = require("mongoose")
const EmployeeSchma = new mongoose.Schema({
  name : {type : String},
  email: {type: String, requried: true},
  role : {type: String}
})

module.exports = mongoose.model("Employee", EmployeeSchma)