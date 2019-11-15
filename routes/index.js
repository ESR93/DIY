const express = require("express");
const sneakerModel = require("./../models/Sneaker");
const tagModel = require("./../models/Tag");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/sneakers/collection", (req, res) => {
  const sneaker = sneakerModel.find();
  const tags = tagModel.find();

  Promise.all([sneaker, tags])
    .then(dbRes => {
      res.render("products", {
        sneakers: dbRes[0],
        tags: dbRes[1]
      });
    })
    .catch(asyncErr => console.log(asyncErr));
});

function switchView(cat, req, res) {
  sneakerModel
    .find({ category: cat })
    .populate("tag")
    .then(dbRes => {
      tagModel
        .find()
        .then(tagRes =>
          res.render("products", { sneakers: dbRes, tags: tagRes })
        );
    })
    .catch(err => {
      console.log(err);
    });
}

router.get(`/sneakers/men`, (req, res) => {
  switchView("men", req, res);
});

router.get("/sneakers/women", (req, res) => {
  switchView("women", req, res);
});

router.get("/sneakers/kids", (req, res) => {
  switchView("kids", req, res);
});

// router.get("/sneakers/collection", (req, res) => {
//   sneakerModel
//     .find()
//     .then(dbRes => {
//       res.render("products", { sneakers: dbRes });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

router.get("/one-product/:id", (req, res) => {
  sneakerModel
    .findOne({ _id: req.params.id })
    .then(dbRes => {
      res.render("one_product", { sneaker: dbRes });
    })
    .catch(dbErr => res.send(dbErr));
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

module.exports = router;
