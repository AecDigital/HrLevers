const Project = require('../models/project');
const Task = require('../models/task');
const mongoose     = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DBURL);

const projects = [
  {
    "Title": "Project 1",
    "Client": "Client 1",
    "Tasks": []

  },
  {
    "Title": "Project 2",
    "Client": "Client 1",
    "Tasks": []
  },
  {
    "Title": "Project 3",
    "Client": "Client 2",
    "Tasks": []
  },
  {
    "Title": "Project 4",
    "Client": "Client 2",
    "Tasks": []
  },
  {
    "Title": "Project 5",
    "Client": "Client 3",
    "Tasks": []
  },
  {
    "Title": "Project 6",
    "Client": "Client 3",
    "Tasks": []
  },
  {
    "Title": "Project 7",
    "Client": "Client 3",
    "Tasks": []
  },
  {
    "Title": "Project 8",
    "Client": "Client 4",
    "Tasks": []
  },
  {
    "Title": "Project 9",
    "Client": "Client 4",
    "Tasks": []
  },
  {
    "Title": "Project 10",
    "Client": "Client 5",
    "Tasks": []
  },
]

  Project.create(projects, (err, projects) => {
    if (err){ throw(err) }
    console.log("Success", projects);
    mongoose.connection.close();
  })