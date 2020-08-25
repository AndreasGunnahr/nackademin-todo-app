const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

UserSchema.methods.generateToken = function () {
  return jwt.sign(
    { id: this._id, username: this.username },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1h" }
  );
};

UserSchema.methods.comparePassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username: username });
};

UserSchema.statics.create = function (user) {
  const newUser = new this(user);
  return newUser.save();
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
