const express = require("express"); // import express in this module
const sneakerModel = require("./../models/Sneaker");
const tagModel = require("./../models/Tag");

const router = express.Router(); // create an app sub-module (router)

router.get("/prod-add", (req, res) => {
  console.log(res);
  tagModel
    .find()
    .then(dbRes => {
      res.render("products_add", { tags: dbRes });
    })
    .catch(err => console.log(err));
});

router.post("/prod-add", (req, res) => {
  const sneak = req.body;
  if (sneak.name) {
    console.log(sneak.id_tags);
    const newSneaker = {
      name: sneak.name,
      ref: sneak.ref,
      sizes: sneak.size,
      description: sneak.descr,
      price: sneak.price,
      category: sneak.category,
      id_tags: sneak.id_tags
    };
    console.log(newSneaker);
    sneakerModel
      .create(newSneaker)
      .then(() => {
        res.redirect("/sneakers/collection");
      })
      .catch(dbErr => console.error(dbErr));
  } else if (sneak.label) {
    const newTag = {
      label: sneak.label
    };
    tagModel
      .create(newTag)
      .then(() => {
        res.redirect("/prod-add");
      })
      .catch(dbErr => console.error(dbErr));
  }
});

module.exports = router;

router.get("/prod-manage", (req, res) => {
  sneakerModel.find().then(dbRes => {
    res.render("products_manage", { sneakers: dbRes });
  });
});
router.post("/product-edit/:id", (req, res) => {
  const sneak = req.body;
  console.log(sneak.id_tags);
  const newSneaker = {
    name: sneak.name,
    ref: sneak.ref,
    sizes: sneak.size,
    description: sneak.description,
    price: sneak.price,
    category: sneak.category,
    id_tags: sneak.id_tags
  };
  sneakerModel
    .findByIdAndUpdate(req.params.id, newSneaker)
    .then(dbRes => {
      res.redirect("/prod-manage");
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/product-edit/:id", (req, res) => {
  const sneaker = sneakerModel.findOne({ _id: req.params.id });
  const tags = tagModel.find();
  Promise.all([sneaker, tags]).then(dbRes => {
    console.log(dbRes);
    res.render("product_edit", { sneaker: dbRes[0], tags: dbRes[1] });
  });
});

// router.post("/product-edit/:id", (req, res) => {
//   sneakerModel
//     .findByIdAndUpdate(req.params.id)
//     .then(dbRes => {
//       res.redirect("/prod-manage");
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

router.get("/prod-delete/:id", (req, res) => {
  sneakerModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.redirect("/prod-manage");
      // console.log(dbRes);
    })
    .catch(err => {
      console.log(err);
    });
});
