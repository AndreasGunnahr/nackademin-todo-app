const User = require("../models/user");

const FindAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll(req.params.id);
    return res.status(200).send({ message: "ALL USERS", users });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  FindAllUsers,
};
