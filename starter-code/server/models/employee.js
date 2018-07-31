const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;

const EmployeeSchema = new Schema({
  
  Name: String,
  Surname: String,
  Email: String,
  Phone: String,
  Age: Number,
  Gender: String,
  Department: String,
  Country: String,
  JobCenter: String,
  Role: String

  });

const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;