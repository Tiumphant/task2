const User = require('../model/Usermodel')
const express = require("express")
const route = express.Router();
const bcrypt = require("bcryptjs")
route.use(express.json())

route.get("/user", async(req, res)=>{
    try{
        let result = await  User.find().populate("assignedTo")
        res.status(201).json({message: "successfuly get", result})

    }catch{
        res.status(404).send("internal server error")
    }
})

route.post("/user" ,async(req,res)=>{
    try{
        const {firstName, lastName, address, email ,password, assignedTo} = req.body
        const previousUser =  await User.findOne({email})
        if(previousUser){
            return res.status(400).json({message: "Email alredy registed"})
        }
        const hashed = await bcrypt.hash(password, 10)

        const result = new  User({
            firstName, lastName, email, password: hashed, address, assignedTo
        })
        await result.save()
        res.status(201).json({message:" employee posted", result})
    }catch(error){
        res.status(500).json({message: "error in employee", error})
    }
}
)

route.put("/user/:id", async()=>{
    try{
         const {firstName, lastName, address, email ,password, assignedTo} = req.body
         const user = await user.findById(req.params.id)
         user.firstName, user.lastName, user.email, user.email, user.address
        const result = await user.save()
       res.json({message: "updated successfully", user: result})
    
    }catch(error){
        res.status(500).json({message: "error in updat data", error})
    }
})

route.delete("/user/:id", async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.json({message: "succesfulyu delted"})
    }catch(error){
        res.status(500).json({message: "successfully delted"})
    }
})
module.exports = route


