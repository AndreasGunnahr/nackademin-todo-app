const express = require("express");
const router = express.Router();

const User = require("../controllers/user");
const handleAuth = require("../middlewares/handleAuth");

// GET A SPECIFIC USER
router.get("/:id", handleAuth, User.FindOne);

module.exports = router;
