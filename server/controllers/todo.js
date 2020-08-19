const Todo = require("../models/todo");

const FindAll = (req, res) => {
  Todo.findTodos((error, result) => {
    if (error) res.status(400).send(error);
    res.status(200).send({ message: "All todos", data: result });
  });
};

const Create = (req, res) => {
  Todo.createTodo(req.body, (error, result) => {
    if (error) res.status(400).send(error);
    res.status(200).send({ message: "Todo created", data: result });
  });
};

const Update = (req, res) => {
  const todoId = req.params.id;
  Todo.updateTodo(todoId, req.body, (error, result) => {
    if (error) res.status(400).send(error);
    res.status(200).send({ message: "Todo updated", data: result });
  });
};

const Delete = (req, res) => {
  const todoId = req.params.id;
  Todo.deleteTodo(todoId, (error, result) => {
    if (error) res.status(400).send(error);
    res.status(200).send({ message: "Todo deleted", data: {} });
  });
};

module.exports = {
  FindAll,
  Create,
  Update,
  Delete,
};
