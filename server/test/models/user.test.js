const chai = require("chai");
chai.should();
const db = require("../db-handler");
const User = require("../../models/user");
const { user } = require("../helpers");

describe("Unit tests - User model", () => {
  // Connect to our test database
  before(async function () {
    await db.connect();
  });

  // Clear all test data after every test.
  afterEach(async function () {
    await db.clearDatabase();
  });

  // Remove and close the db and server.
  after(async function () {
    await db.closeDatabase();
  });

  describe("CRUD - User model", function () {
    it("Create a new user", async function () {
      const createdUser = await User.register(user);

      createdUser.should.be.a("object");
      createdUser.should.have.keys("token", "username", "email", "id");
    });

    it("Login in a existing user", async function () {
      await User.register(user);
      const loginUser = await User.authenticate(user.username, user.password);

      loginUser.should.be.a("object");
      loginUser.should.have.keys("token", "username", "email", "role");
    });

    it("Delete a existing user", async function () {
      // const users = await User.register();
      // const deletedUser = await User
    });
  });
});
