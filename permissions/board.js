const { ROLE } = require("../utils/roles");

const canViewBoard = (user, board) => {};

const canCreateBoard = (user, board) => {};

const canEditBoard = (user, board) => {};

const canDeleteBoard = (user, board) => {};

const scopedBoards = (user, boards) => {
  if (user.role === ROLE.ADMIN) return boards;
  return boards.filter((board) => board.userId === user.id);
};

module.exports = {
  scopedBoards,
};
