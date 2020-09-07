const chai = require("chai");
const chaiHttp = require("chai-http");
const db = require("../db-handler");
const app = require("../../app");
const { user } = require("../helpers");

chai.use(chaiHttp);
chai.should();
const { expect, request } = chai;

describe("Integration tests - Auth routes", () => {
  // Connect to test database
  before(async () => {
    await db.connect();
  });

  afterEach(async () => {
    await db.clearDatabase();
  });

  // Remove and close the db and server.
  after(async () => {
    await db.closeDatabase();
  });

  it("Register a new user - POST api/auth/register", () => {
    request(app)
      .post("/api/auth/register")
      .set("Content-type", `application/json`)
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.includes({ message: "USER CREATED" });
      });
  });

  it("Login a existing user - POST api/auth/login", () => {
    const fields = { username: user.username, password: user.password };
    request(app)
      .post("/api/auth/login")
      .set("Content-type", `application/json`)
      .send(fields)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.includes({ message: "LOGIN SUCCESSFUL" });
      });
  });
});
