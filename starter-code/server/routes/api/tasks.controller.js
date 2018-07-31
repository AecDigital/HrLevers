const express  = require('express');
const router   = express.Router();
const loggedIn = require('../../utils/isAuthenticated');
const Project = require('../../models/project');
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
  console.log(req.body)
    const taskId = req.body._id;
    const { Description, Project, AssignedTo, Duedate, Done } = req.body;
    let editedTask = { Description, Project, AssignedTo, Duedate, Done }

    editedTask = _.pickBy(editedTask, _.identity);
console.log(editedTask)

    Task.findByIdAndUpdate(taskId, editedTask, {new: true})
    .then(task => res.status(200).json(task))
    .catch(err => next(err))
})


// router

// const removeTask = (req, res, next) => {
//     const taskId = req.params.id;

//     Task.findByIdAndRemove(TaskId)
//     .then(task => {
//         return project.findById(task.project).lean();
//     })
//     .then(project => {
//         project.tasks.splice(project.tasks.indexOf(taskId), 1);
//         return Project.findByIdAndUpdate(project._id, {tasks: project.tasks});
//     })
//     .then(() => {
//         res.status(200).json({ message: "Task Removed OK" });
//     })
//     .catch(err => next(err))
// }

// module.exports = { createCard,editCard,transfe


module.exports = router;
