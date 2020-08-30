const Todo = require("../models/todo");
const Board = require("../models/board");
const { scopedBoards } = require("../permissions/board");

const FindAllBoards = async (req, res, next) => {
  try {
    const boards = await Board.findAllBoards();
    return res
      .status(200)
      .send({ message: "ALL BOARDS", boards: scopedBoards(req.user, boards) });
  } catch (e) {
    next(e);
  }
};

const CreateBoard = async (req, res, next) => {
  const userId = req.user.id;

  try {
    const board = await Board.createBoard({ userId, ...req.body });
    return res.status(200).send({ message: "BOARD CREATED", board });
  } catch (e) {
    next(e);
  }
};

const UpdateBoard = async (req, res, next) => {
  const boardId = req.params.id;
  try {
    const board = await Board.updateBoard(boardId, req.body);
    console.log(board);
    return res.status(200).send({ message: "BOARD UPDATED", board });
  } catch (e) {
    next(e);
  }
};

const DeleteBoard = async (req, res, next) => {
  const boardId = req.params.id;
  try {
    const board = await Board.deleteBoard(boardId);
    return res.status(200).send({ message: "BOARD DELETED", board });
  } catch (e) {
    next(e);
  }
};

const FindAllTodos = async (req, res, next) => {
  const boardId = req.params.id;

  try {
    const todos = await Todo.findTodosByBoardId(boardId);
    return res.status(200).send({ message: "ALL TODOS", todos });
  } catch (e) {
    next(e);
  }
};

const CreateTodo = async (req, res, next) => {
  const boardId = req.params.id;
  const userId = req.user.id;
  try {
    const todo = await Todo.createTodo({ boardId, userId, ...req.body });
    return res.status(200).send({ message: "TODO CREATED", todo });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  FindAllBoards,
  CreateBoard,
  DeleteBoard,
  UpdateBoard,
  CreateTodo,
  FindAllTodos,
};
