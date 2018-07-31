const express  = require('express');
const router   = express.Router();
const loggedIn = require('../../utils/isAuthenticated');
const Employee = require('../../models/employee');

router.get('/', (req, res, next) => {
  Employee
    .find({})
    .exec( (err, employees) => {
      if (err) { return res.status(500).json(err); }

      return res.status(200).json(employees);
    });
});

router.get('/:id', (req, res, next) => {
  Employee
    .findById(req.params.id)
    .exec( (err, employee) => {
      if (err)     { return res.status(500).json(err); }
      if (!thread) { return res.status(404).json(err); }

      return res.status(200).json(employee);
    });
});

module.exports = router;
