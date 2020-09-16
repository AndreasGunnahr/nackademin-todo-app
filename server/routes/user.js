const express = require("express");
const router = express.Router();

const User = require("../controllers/user");
const handleAuth = require("../middlewares/handleAuth");

// GET ALL CONNECTED DATA FOR A USER - GDPR
router.get("/info", handleAuth, User.GetInformation);

// DELETE A EXISTING USER AND ALL INFORMATION CONNECTED TO THE USER - GDPR
router.delete("/info", handleAuth, User.Delete);

module.exports = router;
