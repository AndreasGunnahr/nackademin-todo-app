const express = require("express");
const router = express.Router();

// GET ALL USERS
router.get("/");

// GET A SPECIFIC USER
router.get("/:id");

// UPDATE EXISTING TODO
router.put("/:id");

// DELETE EXISTING TODO
router.delete("/:id");

module.exports = router;
