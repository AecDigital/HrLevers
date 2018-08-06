const express = require("express");
const router = express.Router();
const loggedIn = require("../../utils/isAuthenticated");
const Employee = require("../../models/employee");
const employeeSkill = require("../../models/employeeSkills");
const positionSkill = require("../../models/positionsSkills");
const position = require('../../models/positions');
const _ = require('lodash');

router.get("/:id", (req, res, next) => {
  Employee.findById(req.params.id).then(employee => {
    employeeSkill.findOne( {employee: employee._id} ).then(employeeskills => {
      position.findOne( {_id: employee.Role}).then(position => {
        return res.status(200).json({position});
      })
    });
})
});

module.exports = router;




