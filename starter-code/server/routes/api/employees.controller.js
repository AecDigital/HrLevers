const express = require("express");
const router = express.Router();
const loggedIn = require("../../utils/isAuthenticated");
const Employee = require("../../models/employee");
const EmployeeExperience = require("../../models/employee_experience");
const ActionPlan = require("../../models/actionPlans");

router.get("/", (req, res, next) => {
  Employee.find({}).exec((err, employees) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(employees);
  });
});

router.get("/:id", (req, res, next) => {
  Employee.findById(req.params.id).then(employee => {
      EmployeeExperience.findOne({ Employee: employee._id }).then(exp => {
        ActionPlan.findOne({ Employee: employee._id }).then(train => {
          console.log(train);
          return res.status(200).json({ employee, exp, train });
        });
      });
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
