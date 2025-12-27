const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    image: String
})

const User = mongoose.models.user || mongoose.model("user", userSchema);

module.exports =  User;