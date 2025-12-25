const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/aerapackDB")
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch((err) => {
    console.log(err);
  });


module.exports = mongoose.connection