var mongoose = require("mongoose");

var TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Can't be blank"],
    },

    description: {
      type: String,
    },

    done: {
      type: Boolean,
      lowercase: true,
      required: [true, "Can't be blank"],
    },
    metadata: {
      type: Object,
    },
    laneId: {
      type: String,
    },
  },

  { timestamps: true }
);

TodoSchema.statics.findTodos = function (callback) {
  return this.find({}, callback);
};

TodoSchema.statics.createTodo = function (todo, callback) {
  const newTodo = new this(todo);
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
