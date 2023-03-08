const express = require("express");

const Employees = require("../models/employee.js");

const router = express.Router();

//Add new Employee'
router.post("/employee/add", async (req, res) => {
  try {
    const newEmployee = await Employees.create(req.body);
    res.status(200).json({ success: "Employee saved successfully!!!" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

router.get("/employees", async (req, res) => {
  //   Employees.find().exec((err, employees) => {
  //     if (err) {
  //       return res.status(400).json({ error: err });
  //     }
  //     return res.status(200).json({
  //       success: true,
  //       existingEmployees: employees,
  //     });
  //   });
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
// router.put("/employee/update/:id", async (req, res) => {
//     Employees.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       (err, employee) => {
//         if (err) {
//           return res.status(400).json({ error: err });
//         }
//         return res.status(200).json({ success: "updated successfully" });
//       }
//     );

// });
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

router.delete("/employee/delete/:id", async (req, res) => {
  //   Employees.findByIdAndRemove(
  //     req.params.id,
  //     exec((err, deletedEmployee) => {
  //       if (err) {
  //         return res.status(400).json({
  //           message: "Delete Unsuccessfull",
  //         });
  //       }
  //       return res.status(200).json({
  //         message: "Delete Successfull",
  //         deletedEmployee,
  //       });
  //     })
  //   );

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
