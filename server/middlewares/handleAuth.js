const jwt = require("jsonwebtoken");

const handleAuth = (req, res, next) => {
  if (!req.headers.authorization) return res.sendStatus(403);
  const token = req.headers.authorization.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = {
      ...payload,
    };
    // console.log(req.user);
    next();
  } catch (e) {
    console.log(e);
    res.sendStatus(403);
  }
};

module.exports = handleAuth;
