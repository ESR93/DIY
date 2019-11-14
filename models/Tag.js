const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tagSchema = new Schema({
  label: String
});

const tagModel = mongoose.odel("Tag", tagSchema);
module.exports = tagModel;
