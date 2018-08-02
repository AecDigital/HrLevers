const express  = require('express');
const router   = express.Router();
const loggedIn = require('../../utils/isAuthenticated');
const ActionPlan = require('../../models/actionPlans')


router.get('/', (req, res, next) => {
  ActionPlan
    .find({})
    .exec( (err, actionPlans) => {
      if (err) { return res.status(500).json(err); }

      return res.status(200).json(actionPlans);
    });
});


router.post('/', loggedIn, (req, res, next) => {
  const newActionPlan = new ActionPlan({
    Employee: req.body._id,
    Name: req.body.name,
    Description: req.body.description
  });

  newProject.save((err) => {
    if (err)              { return res.status(500).json(err); }
    if (newThread.errors) { return res.status(400).json(newProject); }

    return res.status(200).json(newProject);
  });
});

module.exports = router;
