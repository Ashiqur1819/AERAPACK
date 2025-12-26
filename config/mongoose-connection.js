const mongoose = require("mongoose");
const config = require("config")
const dbgr = require("debug")("development:mongoose");

mongoose
  .connect(`${config.get("MONGODB_URI")}/aerapackDB`)
  .then(() => {
    dbgr("MongoDB Connected Done");
  })
  .catch((err) => {
    dbgr("MongoDB Error:", err);
  });

module.exports = mongoose.connection
