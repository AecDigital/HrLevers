const express  = require('express');
const router   = express.Router();
const loggedIn = require('../../utils/isAuthenticated');
const Employee = require("../../models/employee");
const Task = require('../../models/task')
const _ = require('lodash');


router.get('/', (req, res, next) => {
  Task
    .find({})
    .exec( (err, tasks) => {
      if (err) { return res.status(500).json(err); }

      return res.status(200).json(tasks);
    });
});

router.post('/', loggedIn, (req, res, next) => {
  const newTask = new Task({
    Name: req.body.Name,
    TaskDescription: req.body.Description,
    ActionPlan: req.body.ActionPlan,
    Duedate: req.body.Duedate
  });

  newTask.save((err) => {
    if (err)              { return res.status(500).json(err); }
    if (newTask.errors) { return res.status(400).json(newTask); }

    return res.status(200).json(newTask);
  });
});

router.put('/edit/:id', (req, res, next) => {
  console.log(req.body)
    const {Name, Description, Duedate, Status } = req.body;
    let editedTask = { Name, TaskDescription:Description, Duedate, Status }
    editedTask = _.pickBy(editedTask);
    console.log(editedTask);

    Task.findByIdAndUpdate(req.params.id, editedTask,{new: true})
    .then(task => res.status(200).json(task))
    .catch(err => console.log(err))
})


router.delete('/delete/:id', (req, res, next)=> {

  const taskId = req.params.id;

  Task.findByIdAndRemove(taskId)
  .then(() => {
    console.log('delete!')
    return res.status(200).json();
  })
  .catch(err => next(err))
})

module.exports = router;
