const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;

const Position_SkillsSchema = new Schema({
  
  position: String,
  department: String,
  skills: [
    {
     Title: String,
     Description: String,
     RequiredLevel: Number
    }
  ]
  });

const Position_Skills = mongoose.model('Position_Skills', Position_SkillsSchema);
module.exports = Position_Skills;