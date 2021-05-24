"use strict";
const POI = require("../models/poi");
const User = require("../models/user");
const Catagory = require("../models/catagory");
const Joi = require("@hapi/joi");

const Poi = {
  home: {
    handler: async function(request, h) {
      const catagories = await Catagory.find().lean();
      return h.view("home", { title: "Welcome to The POI Application", catagories: catagories });
    }
  },
  report: {
    handler: async function(request, h) {
      const pois = await POI.find().populate("contributor").populate("catagory").lean();
      return h.view("report", {
        title: "POIS to this  Date",
        pois: pois
      });
    }
  },
  addPoi: {
    validate: {
      payload: {
        amount: Joi.number().required(),
        method: Joi.string().required(),
        candidate: Joi.string().required(),
      },
      options: {
        abortEarly: false,
      },
      failAction: async function (request, h, error) {
        const catagories = await Catagory.find().lean();
        return h
          .view("home", {
            title: "Invalid Catagory",
            catagories: catagories,
            errors: error.details,
          })
          .takeover()
          .code(400);
      },
    },
    handler: async function(request, h) {
      try {
        const id = request.auth.credentials.id;
        const user = await User.findById(id);
        const data = request.payload;

        const rawCatagory = request.payload.catagory.split(",");
        const catagory = await Catagory.findOne({
          CatagoryName: rawCatagory[0],
          type: rawCatagory[1],
        });
        const newPoi = new POI({
          location: data.Location,
          description: data.Description,

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
