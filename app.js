const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes =  require('./routes/todo');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/todo_app',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
});

app.use(bodyParser.json());
app.use('/api/todo',todoRoutes);

app.listen(port,()=> {
    console.log(`Server is running on port ${port}`); 
});