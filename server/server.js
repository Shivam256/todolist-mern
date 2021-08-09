const express = require('express');
const app = express();
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const bodyParser = require('body-parser');

const SERVER_PORT = 8080;

const Task = require('./models/task.model');

mongoose.connect('mongodb://localhost:27017/mern-todo-list', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
  console.log('SUCCESSFULLY CONNECTED TO DATABASE!');
})
.catch((err)=>{
  console.log('FAILED TO CONNECT TO DATABASE!',err);
})

app.use(express.urlencoded({extended:true}));
app.use(express.json())



app.get('/test',(req,res)=>{
  res.status(200).send('SUCCESSFULLY CONNECTED TO BACKEND');
})

// app.get('/add/:task', asyncHandler((req,res)=>{
//   const {task} = req.params;
//   const tsk = new Task({title:task});
//   tsk.save();
//   res.send('created your task!!');
// }))

app.get('/tasks',asyncHandler(async (req,res)=>{
  const tasks = await Task.find({});
  // console.log(tasks);
  res.send(tasks);
}))

app.post('/tasks',asyncHandler(async(req,res)=>{
  const {title} = req.body;
  const task = new Task({title});
  task.save();

  res.send('SUCCESSFULLY ADDED THE NEW TODO!');
}))


app.listen(SERVER_PORT,() =>{
  console.log(`SUCCESSFULLY STARTED SERVER ON PORT ${SERVER_PORT}`);
})