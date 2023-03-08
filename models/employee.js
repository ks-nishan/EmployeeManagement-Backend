const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  full_name: {
    type: String,
    require: true,
  },
  initial_name: {
    type: String,
  },
  display_name: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
  },
  dob: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  designation: {
    type: String,
  },
  type: {
    type: String,
  },
  joined_date: {
    type: String,
  },
  experience: {
    type: String,
  },
  salary: {
    type: String,
  },
  notes: {
    type: String,
  },
});

module.exports = mongoose.model("Employees", employeeSchema);
