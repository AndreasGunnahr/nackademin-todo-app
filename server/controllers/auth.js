const User = require("../models/user");

const Login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.authenticate(username, password);
    return res.status(200).send({ message: "Login Successful", user });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const Register = async (req, res, next) => {
  try {
    const user = await User.register(req.body);
    return res.status(200).send({ message: "User created", user });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

// const ValidateToken = async (req, res, next) => {
//   try {
//     const user = await User.validateToken(req.headers.authorization);
//     return res.status(200).send({ message: "Successful", user });
//   } catch (e) {
//     console.log(e);
//     next(e);
//   }
// };

module.exports = {
  Login,
  Register,
  // ValidateToken,
};
