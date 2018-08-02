const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const EmployeeSchema = require('./employee').schema;
const ActionPlanSchema = require('./actionPlans').schema

const TaskSchema = new Schema({
  Name: String,
  TaskDescription: String,
  ActionPlan: {
    type: Schema.Types.ObjectId,
    ref: 'ActionPlan'
  },
  Duedate: Date,
  Done: { type: Boolean, default: false},
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
