const express = require("express")
const router = express.Router()
const ownerModel = require("../models/owner-model")

router.get("/", (req, res) => {
    res.send("Hello world from Owner.")
})

router.post("/create", async(req, res) => {
    const owner = await ownerModel.find()

    if(owner.length > 0){
        return res.status(500).send("You have don't permission to create owner.")
    }

    const {fullname, email, password} = req.body

    const createdOwner = await ownerModel.create({
    fullname,
    email,
    password
    })

    res.send(createdOwner)
})

router.get("/create", async(req, res) => {
    const owner = await ownerModel.find()

    res.send(owner)
})

module.exports = router