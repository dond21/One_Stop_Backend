const mongoose = require("mongoose");
const validator = require("validator");

const eventSchema = new mongoose.Schema({
  title: {},

  author: {},
  body: {},
  createdAt: {
    type: Date,
    default: Date.now(),
  }, 
});

const Schema = new mongoose.model("Schema", eventSchema);

module.exports = Schema;
