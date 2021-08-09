const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  isComplete:{
    type:Boolean,
    requried:true
  }
});


module.exports = mongoose.model('Task',TaskSchema);