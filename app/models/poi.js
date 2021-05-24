"use strict";

const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const poiSchema = new Schema({
  location: String,
  description: String,
  contributor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  catagory: {
    type: Schema.Types.ObjectId,
    ref: "Catagory",
  },
});

module.exports = Mongoose.model("Poi", poiSchema);
