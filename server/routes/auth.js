const express = require("express");
const router = express.Router();

const Auth = require("../controllers/auth");

// LOGIN A USER
router.post("/login", Auth.Login);

// REGISTER A NEW USER
router.post("/register", Auth.Register);

// Token, refresh token?

module.exports = router;
