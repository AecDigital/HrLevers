const Position_Skills = require('../models/positionsSkills');
const Position = require('../models/positions');
const mongoose     = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DBURL);

const positions_skills = [{

  "position": "5b65564bd420e946ec092989",
  "department": "IT",
  "skills": [
    {
     "Title": "Javascript Frameworks",
     "Description": "Knowledge of main javascript frameworks",
     "RequiredLevel": 5
    },
    {
      "Title": "Big Data environments",
      "Description": "Knowledge of big data environments",
      "RequiredLevel": 5
     },
     {
      "Title": "AI trends",
      "Description": "Knowledge of AI trends",
      "RequiredLevel": 3
     }]
  },
  {
  "position": "5b65564bd420e946ec092988",
  "department": "Human Resources",
  "skills": [
    {
     "Title": "Leadership & Management",
     "Description": "Team Management & Leadership classic skills",
     "RequiredLevel": 5
    },
    {
      "Title": "Hr Tech Knowledge",
      "Description": "Knowledge of hr tech tools and environment",
      "RequiredLevel": 5
     },
     {
      "Title": "Design Thinking",
      "Description": "Knowledge of design thinking and others innovation frameworks",
      "RequiredLevel": 3
     }]
    }
]

Position_Skills.create(positions_skills, (err, positions_skills) => {
    if (err){ throw(err) }
    console.log("Success", positions_skills);
    mongoose.connection.close();
  })