const user = {
  username: "andreas",
  email: "andreas@test.se",
  password: "andreas",
  role: "user",
};

const todo = {
  title: "Test todo",
  description: "Test todo description",
  done: false,
  laneId: "TODO",
  metadata: {
    title: "Test todo",
    description: "Test todo description",
  },
};

const todoKeys = [
  "title",
  "description",
  "done",
  "metadata",
  "laneId",
  "boardId",
  "userId",
];

const board = {
  title: "Test board",
  description: "Test board description",
};

const boardKeys = ["title", "description", "userId"];

module.exports = {
  user,
  todo,
  todoKeys,
  board,
  boardKeys,
};
