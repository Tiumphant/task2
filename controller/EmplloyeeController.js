
const Employee = require("../model/employeemodel")
const express = require("express")
const route = express.Router();
const bcrypt = require("bcryptjs")
route.use(express.json())

route.get("/employee", async(req, res)=>{
    try{
        let result = await Employee.find()
        res.status(201).json({message: "successfuly get", result})

    }catch{
        res.status(404).send("internal server error")
    }
})

route.post("/employee", async (req, res) => {
  try {
    const result = await Employee(req.body)
    await result.save()
    res.status(201).json({ message: "Employee posted", result })
  } catch (error) {
    res.status(500).json({ message: "Error in employee", error: error.message })
  }
})

route.put("/employee/:_id", async(req, res)=>{
    try{
        const result = await Employee.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json({message: "updated succefuly", result})
    
    }catch(error){
        res.status(500).json({message: "error in updat data", error})
    }
})

route.delete("/employee/:id", async(req,res)=>{
    try{
        await Employee.findByIdAndDelete(req.params.id)
        res.json({message: "succesfulyu delted"})
    }catch(error){
        res.status(500).json({message: "successfully delted"})
    }
})
module.exports = route

