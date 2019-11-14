

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on("connected", () => console.log("yay mongodb connected :)"));

mongoose.connection.on("error", () => console.log("nay db error sorry :("));

// ++++|||CLASS MATERIAL MAY BE USEFUL TO TAKE A GLANCE|||++++

// const mongoose = require("mongoose");
// // hey express, i would like to use mongoose to get a connection to my mongodb server
// mongoose
// .connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(dbConnectionResult =>
//   // everything is good ^^
//   console.log(`Connected to Mongo! Database name: "${dbConnectionResult.connections[0].name}"`)
// )
// .catch(err => {
//   // an error occured
//   console.error("Error connecting to mongo", err)
// });


/// npm install mongoose !!!