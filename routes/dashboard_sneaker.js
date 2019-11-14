const express = require("express"); // import express in this module
const sneakerModel = require("./../models/Sneaker");
const tagModel = require("./../models/Tag");

const router = express.Router(); // create an app sub-module (router)

router.get("/prod-add", (req, res) => {
  console.log(res);
  tagModel.find()
  .then(dbRes => {
    res.render("products_add",{tag:dbRes})
  })
  .catch(err => console.log(err));;
});

router.post("/prod-add", (req, res) => {
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

router.get("/prod-manage", (req, res) => {
  sneakerModel.find()
  .then(dbRes => {
    res.render("products_manage",{sneakers:dbRes})
  })
});

router.get("/prod-edit", (req, res) => {
  res.render("product_edit")
});