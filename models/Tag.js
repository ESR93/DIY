const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tagSchema = new Schema({
  label: String
});

const tagModel = mongoose.Model("Tag", tagSchema);
module.exports = tagModel;
