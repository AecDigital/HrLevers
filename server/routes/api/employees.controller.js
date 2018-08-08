const express = require("express");
const router = express.Router();
const loggedIn = require("../../utils/isAuthenticated");
const Employee = require("../../models/employee");
const EmployeeExperience = require("../../models/employee_experience");
const ActionPlan = require("../../models/actionPlans");
const Tasks = require("../../models/task");
const _ = require("lodash");
const axios = require("axios");
const multer = require("multer");
const upload = multer({ dest: "./public/uploads" });
require("dotenv").config();

API1 = process.env.API1;

router.get("/", (req, res, next) => {
  Employee.find({}).exec((err, employees) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(employees);
  });
});


router.get("/:id", (req, res, next) => {
  Employee.findById(req.params.id)
    .then(employee => {
      Employee.find({JobCenter: employee.JobCenter}).then(mates=>{
        EmployeeExperience.findOne({ Employee: employee._id }).then(exp => {
          ActionPlan.find({ Employee: employee._id }).then(trains => {
            let tasks = Promise.all(
              trains.map(doc => Tasks.find({ ActionPlan: doc._id }))
            ).then(tasks => {
              tasks = _.flattenDeep(tasks);
              console.log({ employee, mates, exp, trains, tasks })
              return res.status(200).json({ employee, mates, exp, trains, tasks });
            });
          });
        });
      })
    })
    .catch(err => res.status(500).json(err));
});

router.post("/user-topics", (req, res, next) => {
  const topics = _.uniq(req.body.gaptitle);

  Promise.all(
    topics.map(tag =>
      axios.get(
        `https://newsapi.org/v2/everything?language=en&pagesize=15&q=${tag}&apiKey=${API1}`
      )
    )
  )
    .then(array => {
      let data = array.map(el => el.data.articles);

      return res.status(200).json(_.flattenDeep(data));
    })
    .catch(err => console.log(err));
});

router.post("/user-courses", (req, res, next) => {
  const topics = _.uniq(req.body.gaptitle);
  console.log(req.body);
  Promise.all(
    topics.map(tag =>
      axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${tag}&key=AIzaSyBhtaKmsGu2d3zHkQeGK6vx9niDgnZkYNo`
      )
    )
  )
    .then(array => {
      console.log(array);
      let data = array.map(el => el.data.items);
      return res.status(200).json(_.flattenDeep(data))
    })
    .catch(err => console.log(err));
});


module.exports = router;
