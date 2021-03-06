const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  name: String,
  ref: String,
  sizes: Number,
  descripiton: String,
  price: Number,
  category: ["men", "woment", "kids"],
  image: String,
  id_tags: {
    type: Schema.Types.ObjectId,
    ref: "Tag"
  }
});

const sneakerModel = mongoose.model("Sneaker", sneakerSchema);
module.exports = sneakerModel;
