const express = require("express");
const router = express.Router();
const loggedIn = require("../../utils/isAuthenticated");
const Employee = require("../../models/employee");
const EmployeeExperience = require("../../models/employee_experience");
const ActionPlan = require("../../models/actionPlans");
const Tasks = require("../../models/task");
const _ = require('lodash');

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
        ActionPlan.find({ Employee: employee._id }).then(trains => {

          let tasks = Promise.all(
            trains.map(doc => Tasks.find({ActionPlan: doc._id}))
          ).then(tasks=>{
              tasks = _.flattenDeep(tasks)
              return res.status(200).json({ employee, exp, trains, tasks });
          })

          /* trains.forEach(doc => {
            Tasks.find({ActionPlan: doc._id}).then(tasks => {
              console.log(trains)
            })
          }) */



        });
      });
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
