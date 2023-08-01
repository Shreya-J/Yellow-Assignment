const mongoose = require("mongoose");
const addSchema=new mongoose.Schema({
  address:String
})
const History =mongoose.model("History", addSchema)

module.exports=History