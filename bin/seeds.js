const mongoose = require("mongoose");
const Sneaker = require("../models/Sneaker");

const sneakers = [
  {
    name: "Nike",
    ref: "123456",
    sizes: "43",
    description: "Running shoes",
    price: 80,
    category: ["men"],
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQx2-VgRX8SY_X7P1hYhm3Tr7ULve3ayZapBfUiEEJXjGOfHeoQRHTb7L83-eFBmQfCi-KIV6P3_go&usqp=CAc"
  },
  {
    name: "Adidas",
    ref: "123459",
    sizes: "46",
    description: "Running shoes",
    price: 160,
    category: ["men"],
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRURZFw1LRaV2bA1Ne5u6_O8JSo6usOxJPYU3LmzTaTqGZHY-GzPdSM2U-4VEu0lHBQfrI29IVpNzw&usqp=CAc"
  },
  {
    name: "Reebok",
    ref: "123450",
    sizes: "44",
    description: "Running shoes",
    price: 105,
    category: ["men"],
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTPIV8s4tlg1Z4LLwiQGwYPfSESiKANp_QQnLuQjCKnnpfMNbvSYjDqTUEuMFj7811GItuS5ew47g&usqp=CAc"
  },
  {
    name: "Air Jordan",
    ref: "123457",
    sizes: "36",
    description: "Running shoes",
    price: 150,
    category: ["women"],
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRQwnn0SiZ_yR41PPoB1BqG7McfK6au_ZPUeSkk_VDhD5lIetoTyTV0gk2W82aNMoDUQXkvxRbEwb4&usqp=CAc"
  },
  {
    name: "SuperCourt",
    ref: "123458",
    sizes: "39",
    description: "Sportswear shoes",
    price: 89,
    category: ["women"],
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRYyncrv8NGmsCFdQc9GBx0mKz2Zr_CuOdKUvypIXJOAyfEpqiHFqmkGjvm2DRmuhIwuqdzuOpHmSc&usqp=CAc"
  },
  {
    name: "FreeRun",
    ref: "123453",
    sizes: "40",
    description: "Running shoes",
    price: 100,
    category: ["women"],
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZ18gCxsShR4-1rtfAJzevOeKsIgW62P2suaq2-FmoB4tjN9bNJX3x8pnIfs9Bz-u55KrvSl_yXX4&usqp=CAc"
  },
  {
    name: "Air Jordan",
    ref: "123452",
    sizes: "35",
    description: "sportwear shoes",
    price: 75,
    category: ["kids"],
    image:
      "data:image/png;base64,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"
  },
  {
    name: "SuperCourt",
    ref: "123451",
    sizes: "33",
    description: "Sportswear shoes",
    price: 59,
    category: ["kids"],
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTuYCg4DtraHWY2fyvgPw-JSyPIANKsUK4fery7Umtbp-61k59ztupXm3E1CbLGz8n7rxUk4E8RSiQ&usqp=CAc"
  },
  {
    name: "Converse",
    ref: "123453",
    sizes: "34",
    description: "Running shoes",
    price: 55,
    category: ["kids"],
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTlJ3rD8ZPo_oXKGEYtEh9BZqdnJXQVMkX4-oIUbEnjcGbA41vINoxigRHgSTdnoKHdhbtwcNZUGGGb&usqp=CAc"
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
