"use strict";

const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const poiSchema = new Schema({
  location: String,
  description: String,
  catagory: String,
  contributor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }
});

module.exports = Mongoose.model("POI", poiSchema);
