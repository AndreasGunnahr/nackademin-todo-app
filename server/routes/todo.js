const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const Todo = require("../controllers/todo");

// GET ALL EXISTING TODOS
router.get("/", auth, Todo.FindAll);

// CREATE A NEW TODO
router.post("/", auth, Todo.Create);

// UPDATE EXISTING TODO
router.put("/:id", auth, Todo.Update);

// DELETE EXISTING TODO
router.delete("/:id", auth, Todo.Delete);

module.exports = router;
