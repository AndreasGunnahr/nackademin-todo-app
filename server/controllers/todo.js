const Todo = require("../models/todo");

const FindAll = async (req, res) => {
  try {
    const doc = await Todo.findTodos();
    return res.status(200).send({ message: "All todos", data: doc });
  } catch (e) {
    return res.status(500).send(e);
  }
};

const Create = async (req, res) => {
  try {
    const doc = await Todo.createTodo(req.body);
    return res.status(200).send({ message: "Todo created", data: doc });
  } catch (e) {
    return res.status(400).send(e);
  }
};

const Update = async (req, res) => {
  const todoId = req.params.id;
  try {
    const doc = await Todo.updateTodo(todoId, req.body);
    return res.status(200).send({ message: "Todo updated", data: doc });
  } catch (e) {
    return res.status(400).send(e);
  }
};

const Delete = async (req, res) => {
  const todoId = req.params.id;
  try {
    const doc = await Todo.deleteTodo(todoId);
    return res.status(200).send({ message: "Todo deleted", data: {} });
  } catch (e) {
    return res.status(400).send(e);
  }
};

module.exports = {
  FindAll,
  Create,
  Update,
  Delete,
};
