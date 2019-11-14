const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  name: String,
  ref: String,
  price: Number,
  category: ["men", "woment", "kids"],
  id_tags: {
    type: Schema.Types.ObjectId,
    ref: "Tags"
  }
});

const sneakerModel = mongoose.Model("Sneaker", sneakerSchema);
module.exports = sneakerModel;
