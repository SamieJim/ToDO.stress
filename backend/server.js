const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 3001;

let Todo = require('./todo.model');

const connectionString = "mongodb+srv://TCV:Password01!@jamiescluster.0yatu.mongodb.net/MERNTCVTechTest?retryWrites=true&w=majority";
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use(cors());
app.use(bodyParser.json());

async function wait (ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms)
    });
}

todoRoutes.get('/', async(req, res) => {
    try{
        await Todo.find(function(err, todos) {
            if (err) {
                console.log(err);
            } else {
                res.json(todos);
            }
        });
    } catch(error){
        res.status(500).json('Internal server error')
    }
});

todoRoutes.get('/:id', async(req, res) => {
    try{
        let id = req.params.id;
        if(!id){
            return res.status(400).json({ message: "Incomplete request" })
        }
        await Todo.findById(req.params.id)
            .then(todo => {
                res.json(todo);
            })
            .catch(err => {
                res.status(400).send('Incorrect id');
            });
    } catch(error){
        res.status(500).json('Internal server error')
    }
});

todoRoutes.post('/add', async(req, res) => {
    try{
        let todo = new Todo(req.body);
        await todo.save()
            .then(todo => {
                res.status(200).json({'todo': 'todo added successfully'});
            })
            .catch(err => {
                res.status(400).send('adding new todo failed');
            });
    } catch(error){
        return res.status(500).json('Internal server error')
    }
});

todoRoutes.put('/update/:id', async(req, res) => {
    let id = req.params.id;
    if(!id)
        return res.status(400).json('Incomplete request');
        
    await Todo.findByIdAndUpdate(id, 
        {
            "description": req.body.description,
            "assignee": req.body.assignee,
            "priority": req.body.priority,
            "completed": req.body.completed
        }, 
        function(err, result){
        if(err){
            console.log(err);
            res.json(err);
        }
        else{
            res.status(200).json(result);
        }
        });
});

app.use('/todos', todoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});