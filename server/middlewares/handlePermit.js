const { UnauthorizedError } = require("../utils/errors");

const permit = (...roles) => {
  return (req, res, next) => {
    const { user } = req;
    if (user && roles.includes(user.role)) {
      next();
    } else {
      throw new UnauthorizedError("User don't have this type of access");
    }
  };
};

module.exports = permit;
