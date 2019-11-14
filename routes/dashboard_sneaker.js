const express = require("express"); // import express in this module
const sneakerModel = require("./../models/Sneaker");
const router = express.Router(); // create an app sub-module (router)

router.get("/prod-add", (req, res) => {
  console.log(res);
  sneakerModel.find()
  .populate("tag")
  .then(dbRes => {
    res.render("products_add",tags:)
  })
  .catch(err => console.log(err));;
});

router.post("/prod-add", protectAdminRoute, (req, res) => {
  const sneak = req.body
  const newSneaker = {
    name: sneak.name,
    ref: sneak.ref,
    sizes: sneak.size,
    description: sneak.descr,
    price: sneak.price,
    category: sneak.category,
    tag: sneak.id_tags
  };
  sneakerModel
    .create(newSneaker)
    .then(() => {
      res.redirect("/");
    })
    .catch(dbErr => console.error(dbErr));
});

module.exports = router;
