const express = require("express");

const Employees = require("../models/employee.js");

const router = express.Router();

const Joi = require("joi");

//validation schema
const schema = Joi.object({
  full_name: Joi.string().trim().required(),
  initial_name: Joi.string().trim().required(),
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } }),
  mobile: Joi.string()
    .trim()
    .pattern(/^[0-9]+$/),
});

//Add new Employee'
router.post("/employee/add", async (req, res) => {
  try {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const newEmployee = await Employees.create(req.body);
    res.status(200).json({ success: "Employee saved successfully!!!" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

//get all employees
router.get("/employees", async (req, res) => {
  try {
    const employees = await Employees.find();
    res.status(200).json({ success: "True", existingEmployees: employees });
  } catch {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

//get single employee
router.get("/employee/:id", async (req, res) => {
  try {
    const employee = await Employees.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.status(200).json({ success: "true", employee });
  } catch {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

//update method
router.put("/employee/update/:id", async (req, res) => {
  try {
    const updatedEmployee = await Employees.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEmployee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.status(200).json({ success: "Employee updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

//delete employee
router.delete("/employee/delete/:id", async (req, res) => {
  try {
    const deletedEmployee = await Employees.findByIdAndRemove(req.params.id);
    if (!deletedEmployee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res
      .status(200)
      .json({ success: "Employee deleted successfully", deletedEmployee });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
