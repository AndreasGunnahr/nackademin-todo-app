const User = require("../models/user");

const GetInformation = async (req, res, next) => {
  const { id } = req.user;
  try {
    const info = await User.findAllInformation(id);
    return res.status(200).send({ message: "ALL USER INFORMATION", info });
  } catch (e) {
    next(e);
  }
};

const Delete = async (req, res, next) => {
  const { id } = req.user;
  try {
    const info = await User.deleteAllInformation(id);

    return res
      .status(200)
      .send({ message: "USER & CONNECTED INFORMATION DELETED", info });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  GetInformation,
  Delete,
};
