const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;
const TaskSchema = require('./task').schema;

const ProjectSchema = new Schema({
  Title: String,
   
  Client: String,
  
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
