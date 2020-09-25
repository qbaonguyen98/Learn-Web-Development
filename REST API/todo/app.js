import express from 'express';
import db from './db/db';

// Set up the express app
const app = express();

// for parsing request body
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// get all todos
app.get('/api/v1/todos', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});const PORT = 5000;

// post a todo
app.post('/api/v1/todos', (req, res) => {
  if(!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required'
    });
  } else if(!req.body.description) {
    return res.status(400).send({
      success: 'false',
      message: 'description is required'
    });
  }
  const todo = {
    id: db.length + 1,
    title: req.body.title,
    description: req.body.description
  }
  db.push(todo);
  // console.log(db);
  return res.status(201).send({
    success: 'true',
    message: 'todo added successfully',
    todo
  })
});

// get a todo
app.get('/api/v1/todos/:id', (req, res) => {  
  const id = parseInt(req.params.id, 10);  
  db.map((todo) => {    
    if (todo.id === id) {      
      return res.status(200).send({        
        success: 'true',        
        message: 'todo retrieved successfully',        
        todo,      
      });    
    } 
  });
  return res.status(404).send({   
    success: 'false',   
    message: 'todo does not exist',  
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
