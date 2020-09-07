const chai = require("chai");
const chaiHttp = require("chai-http");
const db = require("../db-handler");
const app = require("../../app");
const User = require("../../models/user");
const Board = require("../../models/board");
const Todo = require("../../models/todo");
const { user, board, todo } = require("../helpers");

chai.use(chaiHttp);
chai.should();
const { expect, request } = chai;

describe("Integration tests - Todo routes", () => {
  let JWT, userId, boardId;
  // Connect to test database
  before(async () => {
    await db.connect();
  });

  beforeEach(async () => {
    const { id, token } = await User.register(user);
    JWT = token;
    userId = id;
  });

  afterEach(async () => {
    console.log("after");
    await db.clearDatabase();
  });

  // Remove and close the db and server.
  after(async () => {
    await db.closeDatabase();
  });

  it("Update a existing todo - PUT api/todos/:id", async () => {
    const { _id } = await Board.createBoard({ userId, ...board });
    const createdTodo = await Todo.createTodo({
      boardId: _id,
      userId,
      ...todo,
    });
    console.log(createdTodo);

    request(app)
      .put(`/api/todos/${createdTodo._id}`)
      .set("Content-type", `application/json`)
      .set("Authorization", `Bearer ${JWT}`)
      .send({ title: "Updated todo" })
      .end((err, res) => {
        console.log(res.body);
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.includes({ message: "TODO UPDATED" });
        expect(res.body)
          .to.have.property("todo")
          .that.include({ title: "Updated todo" });
      });
  });

  //   it("Delete a existing board - DELETE api/todos/:id", () => {
  //     request(app)
  //       .delete(`/api/todos/${createdTodo._id}`)
  //       .set("Authorization", `Bearer ${JWT}`)
  //       .set("Content-type", `application/json`)
  //       .send({})
  //       .end((err, res) => {
  //         expect(res).to.have.status(200);
  //         expect(res).to.be.json;
  //         expect(res.body).to.includes({ message: "TODO DELETED" });
  //       });
  //   });
});
