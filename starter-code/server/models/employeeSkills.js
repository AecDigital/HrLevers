const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;
const Position = require('./positions').schema;

const Employee_SkillsSchema = new Schema({
  
  employee: {type:Schema.Types.ObjectId, ref: 'employee'},
  position: {type:Schema.Types.ObjectId , ref:"positions"},
  department: String,
  skills: [
    {
     Title: String,
     Description: String,
     Level: Number
    }
  ]
  });

const Employee_Skills = mongoose.model('Employee_Skills', Employee_SkillsSchema);
module.exports = Employee_Skills;