const express = require("express");
const router = express.Router();

const handleAuth = require("../middlewares/handleAuth");
const handlePermit = require("../middlewares/handlePermit");
const Board = require("../controllers/board");

// GET ALL EXISTING BOARDS FOR A SPECIFIC USER OR ALL FOR A ADMIN
router.get("/", handleAuth, handlePermit("user", "admin"), Board.FindAllBoards);

// CREATE A NEW BOARD FOR A USER
router.post("/", handleAuth, handlePermit("user", "admin"), Board.CreateBoard);

// DELETE A EXISTING BOARD (need to implement remove of all todos connected to the board)
router.delete(
  "/:id",
  handleAuth,
  handlePermit("user", "admin"),
  Board.DeleteBoard
);

// UPDATE A EXISTING BOARD
router.put(
  "/:id",
  handleAuth,
  handlePermit("user", "admin"),
  Board.UpdateBoard
);

// GET ALL EXISTING TODOS FOR A SPECIFIC BOARD
router.get(
  "/:id/todos",
  handleAuth,
  handlePermit("user", "admin"),
  Board.FindAllTodos
);

// CREATE A NEW TODO FOR A BOARD
router.post(
  "/:id/todos",
  handleAuth,
  handlePermit("user", "admin"),
  Board.CreateTodo
);

module.exports = router;
