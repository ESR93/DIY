const express = require("express"); // import express in this module
const sneakerModel = require("./../models/Sneaker");
const router = express.Router(); // create an app sub-module (router)

router.get("/prod-add", (req, res) => {
  console.log(res);
  sneakerModel;
  res.render("products_add").catch(err => console.log(err));
});

module.exports = router;
