const chai = require("chai");
const chaiHttp = require("chai-http");
const db = require("../db-handler");
const app = require("../../app");
const User = require("../../models/user");
const Board = require("../../models/board");
const { user, board, todo } = require("../helpers");

chai.use(chaiHttp);
const { expect, request } = chai;

describe("Integration tests - Board routes", () => {
  let JWT, userId;

  // Connect to test database
  before(async () => {
    await db.connect();
  });

  beforeEach(async () => {
    await db.clearDatabase();
    const { id, token } = await User.register(user);
    JWT = token;
    userId = id;
  });

  // Remove and close the db and server.
  after(async () => {
    await db.closeDatabase();
  });

  it("Create a new board for a user - POST api/boards", () => {
    request(app)
      .post("/api/boards")
      .set("Content-type", `application/json`)
      .set("Authorization", `Bearer ${JWT}`)
      .send(board)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.includes({ message: "BOARD CREATED" });
      });
  });

  it("Get all existing boards for a user/admin - GET api/boards/", () => {
    request(app)
      .get("/api/boards/")
      .set("Content-type", `application/json`)
      .set("Authorization", `Bearer ${JWT}`)
      .send({})
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.includes({ message: "ALL BOARDS" });
      });
  });

  it("Update a existing board - PUT api/boards/:id", async () => {
    const { _id } = await Board.createBoard({ userId, ...board });
    const res = await request(app)
      .put(`/api/boards/${_id}`)
      .set("Authorization", `Bearer ${JWT}`)
      .set("Content-type", `application/json`)
      .send({ title: "Updated board" });

    expect(res).to.have.status(200);
    expect(res).to.be.json;
    expect(res.body).to.includes({ message: "BOARD UPDATED" });
    expect(res.body)
      .to.have.property("board")
      .that.include({ title: "Updated board" });
  });

  it("Delete a existing board - DELETE api/boards/:id", async () => {
    const { _id } = await Board.createBoard({ userId, ...board });
    const res = await request(app)
      .delete(`/api/boards/${_id}`)
      .set("Authorization", `Bearer ${JWT}`)
      .set("Content-type", `application/json`)
      .send({});

    expect(res).to.have.status(200);
    expect(res).to.be.json;
    expect(res.body).to.includes({ message: "BOARD DELETED" });
  });

  it("Create a new todo for a existing board - POST api/boards/:id/todos", async () => {
    const { _id } = await Board.createBoard({ userId, ...board });
    const res = await request(app)
      .post(`/api/boards/${_id}/todos`)
      .set("Authorization", `Bearer ${JWT}`)
      .set("Content-type", `application/json`)
      .send(todo);

    expect(res).to.have.status(200);
    expect(res).to.be.json;
    expect(res.body).to.includes({ message: "TODO CREATED" });
  });

  it("Find all todos for a existing board - GET api/boards/:id/todos", async () => {
    const { _id } = await Board.createBoard({ userId, ...board });
    const res = await request(app)
      .get(`/api/boards/${_id}/todos`)
      .set("Authorization", `Bearer ${JWT}`)
      .set("Content-type", `application/json`)
      .send({});

    expect(res).to.have.status(200);
    expect(res).to.be.json;
    expect(res.body).to.includes({ message: "ALL TODOS" });
    expect(res.body).to.have.property("todos").that.eql([]);
  });
});
