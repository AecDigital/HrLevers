const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;
const EmployeeSchema = require('./employee').schema;

const EmployeeExperienceSchema = new Schema({

  Employee: {type:Schema.Types.ObjectId , ref:"employee"},
  Rising_Star: String,
  Critical: String,
  Talent_Level: Number,
  Percent_Remote: Number,
  EMP_Sat_OnPrem_1: Number,
  EMP_Sat_OnPrem_2: Number,
  EMP_Sat_OnPrem_3: Number,
  EMP_Sat_OnPrem_4: Number,
  EMP_Sat_OnPrem_5: Number,
  EMP_Sat_Remote_1: Number,
  EMP_Sat_Remote_2: Number,
  EMP_Sat_Remote_3: Number,
  EMP_Sat_Remote_4: Number,
  EMP_Sat_Remote_5: Number,
  EMP_Engagement_1: Number,
  EMP_Engagement_2: Number,
  EMP_Engagement_3: Number,
  EMP_Engagement_4: Number,
  EMP_Engagement_5: Number,
  last_evaluation: String,
  number_project: Number,
  average_montly_hours: Number,
  time_spend_company: Number,
  promotion_last_5years: String,
  salary: String,
  Emp_Identity: Number,
  Emp_Position: Number,
  Emp_Title: Number,
  Emp_Competitive_1: Number,
  Emp_Competitive_2: Number,
  Emp_Competitive_3: Number,
  Emp_Competitive_4: Number,
  Emp_Competitive_5: Number,
  Emp_Collaborative_1: Number,
  Emp_Collaborative_2: Number,
  Emp_Collaborative_3: Number,
  Emp_Collaborative_4: Number,
  Emp_Collaborative_5: Number,
  Sensor_StepCount: Number,
  Sensor_Heartbeat: Number,


})



const EmployeeExperience = mongoose.model('EmployeeExperience', EmployeeExperienceSchema);
module.exports = EmployeeExperience;