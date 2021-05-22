"use strict";
//const Donation = require("../models/donation");
const POI = require("../models/poi");
const User = require("../models/user");
const Joi = require("@hapi/joi");
const ImageStore = require('../utils/image-store');

const Poi = {
  home: {
    handler: async function(request, h) {
      const allImages = await ImageStore.getAllImages();
      return h.view("home", {
        title: "Welcome to The POI Application",
        images: allImages});
    }
  },
  report: {
    handler: async function(request, h) {
      const pois = await POI.find().populate("contributor").lean();
      return h.view("report", {
        title: "POIS to this  Date",
        pois: pois
      });
    }
  },
  addPoi: {
    handler: async function(request, h) {
      try {
        const id = request.auth.credentials.id;
        const user = await User.findById(id);
        const data = request.payload;

        const newPoi = new POI({
          location: data.Location,
          description: data.Description,
          catagory: data.catagory,
          contributor: user.id
        });
        await newPoi.save();
        return h.redirect("/report");
      } catch (err) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    }
  }
};

module.exports = Poi;
