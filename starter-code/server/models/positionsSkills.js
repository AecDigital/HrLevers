const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;

const Position_SkillsSchema = new Schema({
  
  position: {type:Schema.Types.ObjectId , ref:"positions_dpt"},
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