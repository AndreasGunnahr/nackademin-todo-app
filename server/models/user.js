const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  NotFoundError,
  UnauthorizedError,
  BadRequestError,
} = require("../utils/errors");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
    },

    email: {
      type: String,
      lowercase: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, "is invalid"],
    },

    role: {
      type: String,
      lowercase: true,
      default: "user",
      enum: ["user", "admin"],
      required: [true, "can't be blank"],
    },

    password: {
      type: String,
    },

    bio: {
      type: String,
    },

    image: {
      type: String,
    },
  },

  { timestamps: true }
);

UserSchema.plugin(uniqueValidator, { message: "is already taken." });

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

UserSchema.statics.findAll = function () {
  return this.find({}, { password: 0 });
};

UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

UserSchema.statics.findByUserId = function (id) {
  return this.findById(id);
};

UserSchema.statics.register = async function (user) {
  const { password, rePassword } = user;
  if (!(password === rePassword))
    throw new BadRequestError("Passwords don't match");

  const newUser = new this(user);
  const createdUser = await newUser.save();
  return {
    token: this.generateToken(user),
    username: createdUser.username,
    email: createdUser.email,
  };
};

UserSchema.statics.generateToken = function (user) {
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1h" }
  );
};

// UserSchema.statics.validateToken = async function (header) {
//   if (!header) throw new UnauthorizedError("No authorization header provided");

//   const token = header.replace("Bearer", "").trim();
//   if (!token) throw new UnauthorizedError("No token provided");

//   const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//   if (!verified) throw new UnauthorizedError("Token verification failed");

//   let user = await this.findByUserId(verified.id);
//   if (!user) throw new NotFoundError("User don't exists");

//   return {
//     username: user.username,
//     email: user.email,
//     role: user.role,
//   };
// };

UserSchema.statics.authenticate = async function (username, password) {
  const user = await this.findByUsername(username);
  if (!user) throw new NotFoundError("Username or password is incorrect");

  const validPassword = bcrypt.compare(password, user.password);
  if (!validPassword)
    throw new UnauthorizedError("Username or password is incorrect");

  return {
    username: user.username,
    email: user.email,
    role: user.role,
    token: this.generateToken(user),
  };
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
