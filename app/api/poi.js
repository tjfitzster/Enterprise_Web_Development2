const Poi = require("../models/poi");
const Boom = require("@hapi/boom");
const utils = require("./utils.js");

const Pois= {
  findAll: {
    auth: false,
    handler: async function (request, h) {
      const poi = await Poi.find().populate("contributor");
      return poi;
    },
  },
  findByContributor: {
    auth: false,
    handler: async function (request, h) {
      const poi = await Poi.find({ contributor: request.params.id });
      return poi;
    },
  },

  deleteAll: {
    auth: false,
    handler: async function (request, h) {
      await Poi.deleteMany({});
      return { success: true };
    },
  },
};
module.exports = Pois;