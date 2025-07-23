const Admin = require("../model/adminModel")
const express = require("express")
const route = express.Router();
const bcrypt = require("bcryptjs")
route.use(express.json())

route.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body
        const previousUser = await Admin.findOne({ email })
        if (previousUser) {
            return res.status(400).json({ message: "Email already registered" })
        }
        const hashed = await bcrypt.hash(password, 10)
        const result = new Admin({ email, password: hashed })
        await result.save()
        res.status(201).json({ message: "Admin registered", result })
    } catch (error) {
        res.status(500).json({ message: "Error in admin registration", error })
    }
})

route.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        const previousUser = await Admin.findOne({ email })
        if (!previousUser) {
            return res.status(400).json({ message: "Admin not found" })
        }
        const isMatch = await bcrypt.compare(password, previousUser.password)
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" })
        }
        res.status(200).json({ message: "Login successful", previousUser })
    } catch (error) {
        res.status(500).json({ message: "Error in admin login", error })
    }
})


module.exports = route;
