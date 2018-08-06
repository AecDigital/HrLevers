const ActionPlan = require('../models/actionPlans');
const Task = require('../models/task');
const mongoose     = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DBURL);

const actionPlans = [
  {
    "Employee": "5b60288f4a634307629535f8",
    "Name": "ActionPlan 1",
    "Description": "Development plan for personal skills",
    "Tasks": []

  },
  {
    "Employee": "5b60288f4a634307629535f8",
    "Name": "ActionPlan 2",
    "Description": "Development plan for technical skills",
    "Tasks": []
  },
  {
    "Employee": "5b60288f4a634307629535f7",
    "Name": "ActionPlan 3",
    "Description": "Development plan for personal skills",
    "Tasks": []
  },
  {
    "Employee": "5b60288f4a634307629535f7",
    "Name": "ActionPlan 4",
    "Description": "Development plan for technical skills",
    "Tasks": []
  },
  {
    "Employee": "5b60288f4a634307629535f7",
    "Name": "ActionPlan 5",
    "Description": "Development plan for personal skills",
    "Tasks": []
  },
  {
    "Employee": "5b60288f4a634307629535f9",
    "Name": "ActionPlan 6",
    "Description": "Development plan for technical skills",
    "Tasks": []
  },
  {
    "Employee": "5b60288f4a634307629535f6",
    "Name": "ActionPlan 7",
    "Description": "Development plan for personal skills",
    "Tasks": []
  },
  {
    "Employee": "5b60288f4a634307629535f6",
    "Name": "ActionPlan 8",
    "Description": "Development plan for technical skills",
    "Tasks": []
  },
  {
    "Employee": "5b60288f4a634307629535f9",
    "Name": "ActionPlan 9",
    "Description": "Development plan for personal skills",
    "Tasks": []
  },
  {
    "Employee": "5b60288f4a634307629535fa",
    "Name": "ActionPlan 10",
    "Description": "Development plan for personal skills",
    "Tasks": []
  },
]

  ActionPlan.create(actionPlans, (err, actionPlans) => {
    if (err){ throw(err) }
    console.log("Success", actionPlans);
    mongoose.connection.close();
  })

 