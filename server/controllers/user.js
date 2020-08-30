const User = require("../models/user");

const FindOne = async (req, res) => {
  try {
    const user = await User.findByUserId(req.params.id);
    if (!user) return res.status(400).send({ message: "User don't exist" });
    return res.status(200).send({ message: "One user", user });
  } catch (e) {
    return res.status(500).send(e);
  }
};

module.exports = {
  FindOne,
};
