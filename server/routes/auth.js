const express = require("express");
const router = express.Router();

const Auth = require("../controllers/auth");

// LOGIN A USER
router.post("/login", Auth.Login);

// REGISTER A NEW USER
router.post("/register", Auth.Register);

// CHECK IF USER HAVE A VALID JWT TOKEN
// router.post("/validToken", Auth.ValidateToken);

// REFRESH USERS JWT TOKEN

module.exports = router;
