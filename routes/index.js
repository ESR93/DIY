const express = require("express");
const sneakerModel = require("./../models/Sneaker");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

function switchView(cat, req, res) {
  sneakerModel
    .find({ category: cat })
    .populate("tag")
    .then(dbRes => {
      res.render("products", { sneakers: dbRes, tags: dbRes });
    })
    .catch(err => {
      console.log(err);
    });
}

router.get(`/sneakers/men`, (req, res) => {
  switchView("men", req, res);
});

router.get("/one-product/:id", (req, res) => {
  res.render("one_products");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

module.exports = router;
