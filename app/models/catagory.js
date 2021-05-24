"use strict";

const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const catagorySchema = Schema({
  CatagoryName: String,
  Type: String
});

module.exports = Mongoose.model("Catagory", catagorySchema);
