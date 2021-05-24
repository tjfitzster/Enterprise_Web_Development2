"use strict";

const Catagory = require("../models/catagory");
const Boom = require("@hapi/boom");

const Catagories = {
  find: {
    auth: false,
    handler: async function (request, h) {
      const catagories = await Catagory.find();
      return catagories;
    },
  },

  findOne: {
    auth: false,
    handler: async function (request, h) {
      try {
        const catagory = await Catagory.findOne({ _id: request.params.id });
        if (!catagory) {
          return Boom.notFound("No Catagory with this id");
        }
        return catagory;
      } catch (err) {
        return Boom.notFound("No Catagory with this id");
      }
    },
  },

  create: {
    auth: false,
    handler: async function (request, h) {
      const newCatagory = new Catagory(request.payload);
      const catagory = await newCatagory.save();
      if (catagory) {
        return h.response(catagory).code(201);
      }
      return Boom.badImplementation("error creating candidate");
    },
  },

  deleteAll: {
    auth: false,
    handler: async function (request, h) {
      await Catagory.remove({});
      return { success: true };
    },
  },

  deleteOne: {
    auth: false,
    handler: async function (request, h) {
      const response = await Catagory.deleteOne({ _id: request.params.id });
      if (response.deletedCount == 1) {
        return { success: true };
      }
      return Boom.notFound("id not found");
    },
  },
};

module.exports = Catagories;
