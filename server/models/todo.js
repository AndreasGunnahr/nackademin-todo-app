const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
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

TodoSchema.statics.findTodos = function () {
  return this.find({});
};

TodoSchema.statics.createTodo = function (todo) {
  const newTodo = new this(todo);
  return newTodo.save();
};

TodoSchema.statics.updateTodo = function (id, todo) {
  return this.findOneAndUpdate({ _id: id }, todo, { new: true });
};

TodoSchema.statics.deleteTodo = function (id) {
  return this.findOneAndRemove({ _id: id });
};

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
