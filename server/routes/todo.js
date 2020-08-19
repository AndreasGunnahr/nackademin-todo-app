const express = require("express");
const router = express.Router();

const Todo = require("../controllers/todo");

// GET ALL EXISTING TODOS
router.get("/", Todo.FindAll);

// CREATE A NEW TODO
router.post("/", Todo.Create);

// UPDATE EXISTING TODO
router.put("/:id", Todo.Update);

// DELETE EXISTING TODO
router.delete("/:id", Todo.Delete);

module.exports = router;
