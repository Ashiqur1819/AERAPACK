const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/aerapackDB")

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isadmin: Boolean,
    products: {
        type: Array,
        default: []
    },
    contact: Number,
    image: String
})

module.exports = mongoose.model("user", userSchema)