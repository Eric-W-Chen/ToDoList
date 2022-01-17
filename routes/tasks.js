const express = require("express")
const router = express.Router()
const Task = require("../models/Task")

router.post("/", async (req, res) => {
    const {user, taskBody} = req.body
    const task = new Task({user, taskBody})
    await task.save()
    res.send(task)
})

router.get("/", async (req,res) => {  
    console.log("test3") 
    const data = await Task.find()
    /* let tasks = data.map(task => task.taskBody); returning undefined. need to return actual task object to access task.user and task.taskbody in taskindex */
    res.send(data)  //res.json() 
})

router.delete("/", async (req, res) => {
    const {id} = req.body
    let task = await Task.findByIdAndDelete(id);
    res.send(task);
})

router.put("/", async (req, res) =>  {
    const {id, newTask} = req.body
    let task = await Task.findById(id)
    task.taskBody = newTask
    await task.save()
    res.send(task)
})

module.exports = router