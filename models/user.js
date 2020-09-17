const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Board = require("./board");
const Todo = require("./todo");
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
  const newUser = new this(user);
  const createdUser = await newUser.save();
  return {
    id: createdUser._id,
    token: this.generateToken(createdUser),
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
    process.env.TOKEN_SECRET,
    { expiresIn: "1h" }
  );
};

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

UserSchema.statics.findAllInformation = async function (id) {
  const formatId = mongoose.Types.ObjectId(id);
  const info = await this.aggregate([
    { $match: { _id: formatId } },
    {
      $project: {
        username: 1,
        email: 1,
        role: 1,
        _id: {
          $toString: "$_id",
        },
      },
    },
    {
      $lookup: {
        from: "boards",
        localField: "_id",
        foreignField: "userId",
        as: "boards",
      },
    },
    {
      $lookup: {
        from: "todos",
        localField: "_id",
        foreignField: "userId",
        as: "todos",
      },
    },
  ]);

  return info[0];
};

UserSchema.statics.deleteAllInformation = async function (id) {
  await this.remove({ _id: id });
  await Board.deleteByUserId(id);
  await Todo.deleteByUserId(id);
  return;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
