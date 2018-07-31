const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const EmployeeSchema = require('./employee').schema;

const TaskSchema = new Schema({
  TaskDescription: String,
  Project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  AssignedTo: {
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  },
  Duedate: Date,
  Done: { type: Boolean, default: false},
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
