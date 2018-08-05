const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;

const EmployeeSchema = new Schema({
  
  
  profilePic: {
    pname: String,
    path: {type: String, default: "assets/img/users/admin-image.png"},
    originalName: String
  },
  Name: String,
  Surname: String,
  Email: String,
  Phone: String,
  Age: Number,
  Gender: String,
  Department: String,
  Country: String,
  JobCenter: String,
  Role: String,
  Position: {type:Schema.Types.ObjectId , ref:"positions_dpt"},

  });

const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;