const mongoose = require("mongoose");
const validator = require("validator");

const eventSchema = new mongoose.Schema({
  title: {},

  author: {},
  body: {},
});

const Schema = new mongoose.model("Schema", eventSchema);

module.exports = Schema;
