var mongoose = require("mongoose");

var TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      lowercase: true,
      required: [true, "Can't be blank"],
    },

    description: {
      type: String,
      lowercase: true,
      required: [true, "Can't be blank"],
    },

    done: {
      type: Boolean,
      lowercase: true,
      required: [true, "Can't be blank"],
    },
  },

  { timestamps: true }
);

TodoSchema.statics.findTodos = function (callback) {
  return this.find({}, callback);
};

TodoSchema.statics.createTodo = function (todo, callback) {
  const newTodo = new this(todo);
  console.log(newTodo);
  return newTodo.save(callback);
};

TodoSchema.statics.updateTodo = function (id, todo, callback) {
  return this.findOneAndUpdate({ _id: id }, todo, { new: true }, callback);
};

TodoSchema.statics.deleteTodo = function (id, callback) {
  return this.findOneAndRemove({ _id: id }, callback);
};

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
