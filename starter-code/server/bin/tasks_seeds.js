const ActionPan = require('../models/actionPlans');
const Task = require('../models/task');
const mongoose     = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DBURL);

const tasks = [
  {
  "TaskDescription": "Task1",
  "ActionPlan":"5b62b70ff80544043ce1e98c",
  "Duedate":"",
  "Done":""
  },
  {
    "Name": "Task1",
    "TaskDescription": "Task2",
    "ActionPlan":"5b62b70ff80544043ce1e98c",
    "Duedate":"",
    "Done":""
  },
  {
    "Name": "Task2",
    "TaskDescription": "Task3",
    "ActionPlan":"5b62b70ff80544043ce1e98d",
    "Duedate":"",
    "Done":""
  },
  {
    "Name": "Task3",
    "TaskDescription": "Task4",
    "ActionPlan":"5b62b70ff80544043ce1e98d",
    "Duedate":"",
    "Done":""
  },
  {
    "Name": "Task4",
    "TaskDescription": "Task5",
    "ActionPlan":"5b62b70ff80544043ce1e98f",
    "Duedate":"",
    "Done":""
  },
  {
    "Name": "Task5",
    "TaskDescription": "Task6",
    "ActionPlan":"5b62b70ff80544043ce1e990",
    "Duedate":"",
    "Done":""
  },
  {
    "Name": "Task6",
    "TaskDescription": "Task7",
    "ActionPlan":"5b62b70ff80544043ce1e990",
    "Duedate":"",
    "Done":""
  },
  {
    "Name": "Task7",
    "TaskDescription": "Task8",
    "ActionPlan":"5b62b70ff80544043ce1e98e",
    "Duedate":"",
    "Done":""
  },
  {
    "Name": "Task8",
    "TaskDescription": "Task9",
    "ActionPlan":"5b62b70ff80544043ce1e98e",
    "Duedate":"",
    "Done":""
  },
  {
    "Name": "Task9",
    "TaskDescription": "Lorem ipsum...",
    "ActionPlan":"5b62b70ff80544043ce1e994",
    "Duedate":"",
    "Done":""
  }
]

Task.create(tasks, (err, tasks) => {
  if (err){ throw(err) }
  console.log("Success", tasks);
  mongoose.connection.close();
})

