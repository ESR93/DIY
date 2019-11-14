const mongoose = require("mongoose")
const Sneaker = require("../models/Sneaker")

const sneakers = [
    {
        name: "Nike", 
        ref: "img_20", 
        sizes: "43", 
        description: "Running shoes", 
        price: 80, 
        category:["men"]
    },
    {
        name: "Adidas", 
        ref: "img_10", 
        sizes: "46", 
        description: "Running shoes", 
        price: 60, 
        category:["men"]
    },
    {
        name: "Reebok", 
        ref: "img_35", 
        sizes: "44", 
        description: "Running shoes", 
        price: 105, 
        category:["men"]
    },
]

mongoose.connect('mongodb://localhost/diy', { useNewUrlParser: true })
.then(() => {
  console.log('Connected to Mongo!');
}).catch(err => {
  console.error('Error connecting to mongo', err);
});  

Sneaker.insertMany(sneakers).then(dbresult => {
    console.log("the sneakers have been inserted")})
    .catch(dbErr => console.log(dbErr))