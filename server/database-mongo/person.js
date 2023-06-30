const mongoose = require("mongoose");
const db = require("./index.js");

const personSchema = new mongoose.Schema({
  name: String,
  ImageUrl:String,
  Number:Number,
  gender:String,
  date:{
    type: Date,
    required: true,
    default: Date.now
 }
});

const person = mongoose.model("Person", personSchema);

module.exports = person;