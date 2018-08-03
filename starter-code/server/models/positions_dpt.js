const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;
const EmployeeSchema = require('./employee').schema;

const EmployeeExperienceSchema = new Schema({

  Employee: {type:Schema.Types.ObjectId , ref:"employee"},
  Rising_Star: String,
 


})



const EmployeeExperience = mongoose.model('EmployeeExperience', EmployeeExperienceSchema);
module.exports = EmployeeExperience;