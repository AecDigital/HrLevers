const Employee_Skills = require('../models/employeeSkills');
const mongoose     = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DBURL);

const employees_skills = [
  {
    "employee":"5b60288f4a634307629535f6",
    "position":"5b60419f70fc450af9012e3a",
    "skills": [
      {
       "Title": "Javascript Frameworks",
       "Description": "Knowledge of main javascript frameworks",
       "Level": 3
      },
    {
      "Title": "Big Data environments",
      "Description": "Knowledge of big data environments",
      "Level": 3
    },
  {
    "Title": "AI trends",
    "Description": "Knowledge of AI trends",
    "Level": 3
  }
]
    },
    {
      "employee":"5b60288f4a634307629535f8",
      "position":"5b60419f70fc450af9012e3e",
      "skills": [
        {
         "Title": "Leadership & Management",
         "Description": "Team Management & Leadership classic skills",
         "Level": 3
        },
      {
        "Title": "Hr Tech Knowledge",
        "Description": "Knowledge of hr tech tools and environment",
        "Level": 3
      },
    {
      "Title": "Design Thinking",
      "Description": "Knowledge of design thinking and others innovation frameworks",
      "Level": 1
    }
  ]
      }]

Employee_Skills.create(employees_skills, (err, employee_skills) => {
    if (err){ throw(err) }
    console.log("Success", employees_skills);
    mongoose.connection.close();
  })

  
