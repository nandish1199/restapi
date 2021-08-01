// here we create database
const mongoose = require("mongoose");
//creating database Students-api
mongoose
  .connect("mongodb://localhost:27017/Students-api", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => {
    console.log("error not connected to database");
  });
