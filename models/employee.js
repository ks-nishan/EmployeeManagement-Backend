const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  initial_name: {
    type: String,
    required: true,
  },
  display_name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  joined_date: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Employees", employeeSchema);
