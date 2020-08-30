const express = require("express");
const router = express.Router();

const Admin = require("../controllers/admin");
const handleAuth = require("../middlewares/handleAuth");
const handlePermit = require("../middlewares/handlePermit");

// GET ALL USERS AS ADMIN
router.get("/users", handleAuth, handlePermit("admin"), Admin.FindAllUsers);

module.exports = router;
