const mongoose = require("mongoose");
const Sneaker = require("../models/Sneaker");

const sneakers = [
  {
    name: "Nike",
    ref: "img_20",
    sizes: "43",
    description: "Running shoes",
    price: 80,
    category: ["men"]
  },
  {
    name: "Adidas",
    ref: "img_10",
    sizes: "46",
    description: "Running shoes",
    price: 60,
    category: ["men"]
  },
  {
    name: "Reebok",
    ref: "img_35",
    sizes: "44",
    description: "Running shoes",
    price: 105,
    category: ["men"]
  },
  {
    name: "Air Jordan",
    ref: "img_40",
    sizes: "36",
    description: "Running shoes",
    price: 150,
    category: ["women"]
  },
  {
    name: "SuperCourt",
    ref: "img_50",
    sizes: "39",
    description: "Sportswear shoes",
    price: 89,
    category: ["women"]
  },
  {
    name: "FreeRun",
    ref: "img_ 70",
    sizes: "40",
    description: "Running shoes",
    price: 100,
    category: ["women"]
  },
  {
    name: "Air Jordan",
    ref: "img_56",
    sizes: "35",
    description: "sportwear shoes",
    price: 75,
    category: ["kids"]
  },
  {
    name: "SuperCourt",
    ref: "img_90",
    sizes: "33",
    description: "Sportswear shoes",
    price: 69,
    category: ["kids"]
  },
  {
    name: "Converse",
    ref: "img_ 24",
    sizes: "34",
    description: "Running shoes",
    price: 55,
    category: ["kids"]
  }
];

mongoose
  .connect("mongodb://localhost/diy", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Sneaker.insertMany(sneakers)
  .then(dbresult => {
    console.log("the sneakers have been inserted");
  })
  .catch(dbErr => console.log(dbErr));
