const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;
const TaskSchema = require('./task').schema;

const ActionPlanSchema = new Schema({
  
  Employee: {type:Schema.Types.ObjectId , ref:"employee"},
  Name: String,
  Tasks: [
    {
      taskId: {type:Schema.Types.ObjectId , ref:"Task"}
    }
  ],
  Description: String,
});

const ActionPlan = mongoose.model('ActionPlan', ActionPlanSchema);
module.exports = ActionPlan;

