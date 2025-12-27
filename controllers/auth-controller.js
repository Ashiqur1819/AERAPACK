const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const user = await userModel.findOne({ email: email });

    if (user) return res.status(401).send("You already have and account");

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        const createdUser = await userModel.create({
          fullname,
          email,
          password: hash,
        });

        res.send(createdUser);
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = registerUser;
