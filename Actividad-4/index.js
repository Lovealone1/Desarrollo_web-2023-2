const express = require('express');
const bodyParser = require('body-parser');
const { UserController } = require('./controllers');

const app = express();
app.use(bodyParser.json());

const tasksController = new UserController();

app.post('/users', (req, res) => {
    tasksController.createUser(req, res);
});

app.put('/users/:id', (req, res) => {
    tasksController.updateUser(req, res);
});

app.get('/users/:id', (req, res) => {
    tasksController.getUser(req, res);
});

app.get('/users', (req, res) => {
    tasksController.getUsers(req, res);
});

app.delete('/users/:id', (req, res) => {
    tasksController.deleteUser(req, res);
});

app.listen(3000, () => {
    console.log('API running at http://localhost:3000');
});
