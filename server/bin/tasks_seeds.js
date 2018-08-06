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
  "Status":"Pending"
  },
  {
    "Name": "Task1",
    "TaskDescription": "Task2",
    "ActionPlan":"5b62b70ff80544043ce1e98c",
    "Duedate":"",
    "Status":"Pending"
  },
  {
    "Name": "Task2",
    "TaskDescription": "Task3",
    "ActionPlan":"5b62b70ff80544043ce1e98d",
    "Duedate":"",
    "Status":"Pending"
  },
  {
    "Name": "Task3",
    "TaskDescription": "Task4",
    "ActionPlan":"5b62b70ff80544043ce1e98d",
    "Duedate":"",
    "Status":"Done"
  },
  {
    "Name": "Task4",
    "TaskDescription": "Task5",
    "ActionPlan":"5b62b70ff80544043ce1e98f",
    "Duedate":"",
    "Status":"Done"
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
    "Status":"Pending"
  },
  {
    "Name": "Task7",
    "TaskDescription": "Task8",
    "ActionPlan":"5b62b70ff80544043ce1e98e",
    "Duedate":"",
    "Status":"Done"
  },
  {
    "Name": "Task8",
    "TaskDescription": "Task9",
    "ActionPlan":"5b62b70ff80544043ce1e98e",
    "Duedate":"",
    "Status":"Done"
  },
  {
    "Name": "Task9",
    "TaskDescription": "Lorem ipsum...",
    "ActionPlan":"5b62b70ff80544043ce1e994",
    "Duedate":"",
    "Status":"Pending"
  }
]

Task.create(tasks, (err, tasks) => {
  if (err){ throw(err) }
  console.log("Success", tasks);
  mongoose.connection.close();
})

