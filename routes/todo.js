const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// Route to add a new task
router.post('/',async(req,res) => {
    try{
        const taskText = req.body.task;
        const newTask = new Todo({text:taskText});
        await newTask.save();
        res.json({success:true,task:newTask.text});
    }
    catch(err) {
        console.error(err);
        res.status(500).json({success:false,error:'Failed to add task'});
    }
});

// Route to edit task
router.put('/:id',async(req,res)=>{
    try{
        const taskid = req.params.id;
        const updatedtasktext = req.body.task;
        const task = await Todo.findById(taskid);
        if (!task) {
            return res.status(404).json({success:false,error:'Task not found'});
        }
        task.text = updatedtasktext;
        await task.save();
        res.json({success:true,task:task.text});
    }
    catch(err) {
        console.error(err);
        res.status(500).json({success:false,error:'Failed to edit task'});
    }
});

// Route to delete task
router.delete('/:id',async(req,res)=>{
    try {
        const taskid = req.params.id;
        const task = await Todo.findById(taskid);
        if(!task) {
            return res.status(404).json({success:false,error:'Task not found'});
        }
        await task.remove();
        res.json({success:true});
    }
    catch(err) {
        console.error(err);
        res.status(500).json({success:false,error:'Failed to delete task'});
    }
});

module.exports = router;