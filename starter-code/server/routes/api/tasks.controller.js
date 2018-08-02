const express  = require('express');
const router   = express.Router();
const loggedIn = require('../../utils/isAuthenticated');
// const Project = require('../../models/project');
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
    taskDescription: req.body.description,
    project: req.body.project,
    assignedTo: req.body.assign,
    duedate: req.body.duedate,
    done: req.body.done
  });

  newTask.save((err) => {
    if (err)              { return res.status(500).json(err); }
    if (newThread.errors) { return res.status(400).json(newProject); }

    return res.status(200).json(newProject);
  });
});

router.put('/', (req, res, next) => {
    const taskId = req.body._id;
    const { Description, Project, AssignedTo, Duedate, Done } = req.body;
    let editedTask = { Description, Project, AssignedTo, Duedate, Done }

    editedTask = _.pickBy(editedTask, _.identity);

    Task.findByIdAndUpdate(taskId, editedTask, {new: true})
    .then(task => res.status(200).json(task))
    .catch(err => next(err))
})


router.delete('/', (req, res, next)=> {

  const taskId = req.body._id;

  Task.findByIdAndRemove(taskId)
  .then(() => {
    return res.status(200).json();
  })
  .catch(err => next(err))
})

module.exports = router;
