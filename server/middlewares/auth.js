const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  if (!req.headers.authorization) return res.sendStatus(403);
  const token = req.headers.authorization.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = payload;
    next();
  } catch (e) {
    res.sendStatus(403);
  }
};

module.exports = auth;
