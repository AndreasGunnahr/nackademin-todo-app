const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Can't be blank"],
    },

    description: {
      type: String,
    },

    userId: {
      type: String,
    },
  },

  { timestamps: true }
);

BoardSchema.statics.findAllBoards = async function () {
  return await this.find({});
};

BoardSchema.statics.createBoard = async function (board) {
  const newBoard = new this(board);
  return newBoard.save();
};

BoardSchema.statics.updateBoard = async function (boardId, board) {
  return this.findOneAndUpdate(
    { _id: boardId },
    { $set: board },
    { new: true }
  );
};

BoardSchema.statics.deleteBoard = async function (id) {
  return this.findOneAndRemove({ _id: id });
};

const Board = mongoose.model("Board", BoardSchema);

module.exports = Board;
