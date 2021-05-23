const Poi = require("../models/poi");
const Boom = require("@hapi/boom");
const utils = require("./utils.js");

const Pois = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const pois = await Poi.find().populate("contributor");
      return pois;
    },
  },
  findByContributor: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const pois = await Poi.find({ contributor: request.params.id });
      return pois;
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await Poi.deleteMany({});
      return { success: true };
    },
  },
};
module.exports = Pois;