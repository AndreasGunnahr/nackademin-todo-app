const express = require("express");
const router = express.Router();

const handleAuth = require("../middlewares/handleAuth");
const handlePermit = require("../middlewares/handlePermit");

const Todo = require("../controllers/todo");

// UPDATE EXISTING TODO
router.put("/:id", handleAuth, handlePermit("user", "admin"), Todo.Update);

// DELETE EXISTING TODO
router.delete("/:id", handleAuth, handlePermit("user", "admin"), Todo.Delete);

module.exports = router;
