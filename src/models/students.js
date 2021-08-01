//here we create schema and collection
const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
});
// creating new collection
const Student = new mongoose.model("Student", studentSchema);
// export collection
module.exports = Student;
