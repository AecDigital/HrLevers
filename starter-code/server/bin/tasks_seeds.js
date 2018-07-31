const Project = require('../models/project');
const Task = require('../models/task');
const mongoose     = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DBURL);

const tasks = [
  {
  "TaskDescription": "Task1",
  "Project":"5b603432d15ec4093e8497f1",
  "AssignedTo":"5b60288f4a634307629535f6",
  "Duedate":""
  },
  {
    "TaskDescription": "Task2",
    "Project":"5b603432d15ec4093e8497f1",
    "AssignedTo":"5b60288f4a634307629535f8",
    "Duedate":""
  },
  {
    "TaskDescription": "Task3",
    "Project":"5b603432d15ec4093e8497f3",
    "AssignedTo":"5b60288f4a634307629535f7",
    "Duedate":""
  },
  {
    "TaskDescription": "Task4",
    "Project":"5b603432d15ec4093e8497f2",
    "AssignedTo":"5b60288f4a634307629535f9",
    "Duedate":""
  },
  {
    "TaskDescription": "Task5",
    "Project":"5b603432d15ec4093e8497f5",
    "AssignedTo":"5b60288f4a634307629535fa",
    "Duedate":""
  },
  {
    "TaskDescription": "Task6",
    "Project":"5b603432d15ec4093e8497f4",
    "AssignedTo":"5b60288f4a634307629535fb",
    "Duedate":""
  },
  {
    "TaskDescription": "Task7",
    "Project":"5b603432d15ec4093e8497fa",
    "AssignedTo":"5b60288f4a634307629535fe",
    "Duedate":""
  },
  {
    "TaskDescription": "Task8",
    "Project":"5b603432d15ec4093e8497f6",
    "AssignedTo":"5b60288f4a634307629535fc",
    "Duedate":""
  },
  {
    "TaskDescription": "Task9",
    "Project":"5b603432d15ec4093e8497f7",
    "AssignedTo":"5b60288f4a634307629535fd",
    "Duedate":""
  },
  {
    "TaskDescription": "Task10",
    "Project":"5b603432d15ec4093e8497f8",
    "AssignedTo":"5b60288f4a634307629535ff",
    "Duedate":""
  }
]

Task.create(tasks, (err, tasks) => {
  if (err){ throw(err) }
  console.log("Success", tasks);
  mongoose.connection.close();
})