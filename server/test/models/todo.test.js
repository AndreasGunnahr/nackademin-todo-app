const chai = require("chai");
chai.should();
const db = require("../db-handler");
const User = require("../../models/user");
const Todo = require("../../models/todo");
const Board = require("../../models/board");

const { todo, user, todoKeys, board } = require("../helpers");

describe("Unit tests - Todo model", () => {
  // Connect to test database
  before(async function () {
    await db.connect();
  });

  // Remove and close the db and server.
  after(async function () {
    await db.closeDatabase();
  });

  describe("CRUD - Todo model", function () {
    let createdUser, createdBoard;

    // Create a new user and board
    beforeEach(async function () {
      createdUser = await User.register(user);
      createdBoard = await Board.createBoard({
        ...board,
        userId: createdUser.id,
      });
    });

    // Clear all test data after test cases.
    afterEach(async function () {
      await db.clearDatabase();
    });

    it("Create a todo to a existing board", async function () {
      const boardId = createdBoard._id.toString();
      const userId = createdUser.id.toString();
      const createdTodo = await Todo.createTodo({ boardId, userId, ...todo });

      createdTodo.should.be.a("object");
      createdTodo.toJSON().should.includes.keys(todoKeys);
    });

    it("Get all todos for a existing board", async function () {
      const boardId = createdBoard._id;
      const userId = createdUser.id;
      await Todo.createTodo({ boardId, userId, ...todo });
      const getAllTodos = await Todo.findTodosByBoardId(boardId);

      getAllTodos.length.should.be.a("number");
      getAllTodos.length.should.equal(1);
    });

    it("Update a existing todo", async function () {
      const boardId = createdBoard._id;
      const userId = createdUser.id;
      const createdTodo = await Todo.createTodo({ boardId, userId, ...todo });
      const updatedTodo = await Todo.updateTodo(createdTodo._id, {
        title: "Updated Todo",
      });

      updatedTodo.should.be.a("object");
      updatedTodo.should.have.include({ title: "Updated Todo" });
    });

    it("Delete a existing todo", async function () {
      const boardId = createdBoard._id;
      const userId = createdUser.id;
      const createdTodo = await Todo.createTodo({ boardId, userId, ...todo });
      const deletedTodo = await Todo.deleteTodo(createdTodo._id);

      deletedTodo.should.be.a("object");
      deletedTodo.toJSON().should.includes.keys(todoKeys);
    });
  });
});
