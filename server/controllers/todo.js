const Todo = require("../models/todo");

const Update = async (req, res, next) => {
  const todoId = req.params.id;
  try {
    const todo = await Todo.updateTodo(todoId, req.body);
    return res.status(200).send({ message: "TODO UPDATED", todo });
  } catch (e) {
    next(e);
  }
};

const Delete = async (req, res, next) => {
  const todoId = req.params.id;
  try {
    const todo = await Todo.deleteTodo(todoId);
    return res.status(200).send({ message: "Todo deleted", data: {} });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  Update,
  Delete,
};
