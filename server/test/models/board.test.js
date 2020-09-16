const chai = require("chai");
chai.should();
const db = require("../db-handler");
const User = require("../../models/user");
const Board = require("../../models/board");

const { user, board, boardKeys } = require("../helpers");

describe("Unit tests - Board model", () => {
  // Connect to test database
  before(async function () {
    await db.connect();
  });

  // Remove and close the db and server.
  after(async function () {
    await db.closeDatabase();
  });

  describe("CRUD - Board model", function () {
    let userId;

    // Clear database and create a new user
    beforeEach(async function () {
      await db.clearDatabase();
      const createdUser = await User.register(user);
      userId = createdUser.id.toString();
    });

    it("Create a new board", async function () {
      createdBoard = await Board.createBoard({ ...board, userId });

      createdBoard.should.be.a("object");
      createdBoard.toJSON().should.includes.keys(boardKeys);
    });

    it("Get all existing boards", async function () {
      await Board.createBoard({ ...board, userId });
      await Board.createBoard({ ...board, userId });

      const boards = await Board.findAllBoards();

      boards.length.should.be.a("number");
      boards.length.should.equal(2);
    });

    it("Update a existing board", async function () {
      const boards = await Board.createBoard({ ...board, userId });

      const updatedBoard = await Board.updateBoard(boards._id, {
        title: "Updated Board",
      });

      updatedBoard.should.be.a("object");
      updatedBoard.should.have.include({ title: "Updated Board" });
    });

    it("Delete a existing board", async function () {
      const boards = await Board.createBoard({ ...board, userId });

      const deletedBoard = await Board.deleteBoard(boards._id);

      deletedBoard.should.be.a("object");
      deletedBoard.toJSON().should.includes.keys(boardKeys);
    });
  });
});
