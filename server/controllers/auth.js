const User = require("../models/user");

const Login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findByUsername(username);
    console.log(user);
    if (!user) return res.send(404).send({ message: "Username not found" });
    if (!(await user.comparePassword(password))) {
      return res.status(401).send({ message: "Wrong password" });
    }
    return res
      .status(200)
      .send({ message: "Login Successful", token: user.generateToken() });
  } catch (e) {
    return res.status(400).send(e);
  }
};

const Register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).send({ message: "User created", data: user });
  } catch (e) {
    return res.status(400).send(e);
  }
};

module.exports = {
  Login,
  Register,
};
