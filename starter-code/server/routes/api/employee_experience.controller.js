const express  = require('express');
const router   = express.Router();
const loggedIn = require('../../utils/isAuthenticated');
const EmployeeExperience = require('../../models/employee_experience');


router.get('/', (req, res, next) => {
  EmployeeExperience
    .find({})
    .exec( (err, employee_experiences) => {
      if (err) { return res.status(500).json(err); }

      return res.status(200).json(employee_experiences);
    });
});


router.post('/', loggedIn, (req, res, next) => {
  const newProject = new Project({
    title: req.body.title,
    client: req.body.client
  });

  newProject.save((err) => {
    if (err)              { return res.status(500).json(err); }
    if (newThread.errors) { return res.status(400).json(newProject); }

    return res.status(200).json(newProject);
  });
});

module.exports = router;