const express = require("express");
const router = express.Router();
const loggedIn = require("../../utils/isAuthenticated");
const Employee = require("../../models/employee");
const Skill = require("../../models/positionsSkills");
const _ = require('lodash');

router.get("/", (req, res, next) => {
  Skill
  .find({})
  .exec((err, skills) => {
    if (err) { return res.status(500).json(err); }
    return res.status(200).json(skills);
  });
});


module.exports = router;
