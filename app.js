const dotenv = require("dotenv");
dotenv.config();

// IMPORT OF PACKAGES & DATABASE
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { swaggerUi, swaggerDocs } = require("./swaggerDoc");

// IMPORT OF MIDDLEWARE
const handleErrors = require("./middlewares/handleErrors");

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// IMPORT ALL ROUTES
const todoRoutes = require("./routes/todo");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const boardRoutes = require("./routes/board");
const adminRoutes = require("./routes/admin");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api/todos", todoRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/boards", boardRoutes);
app.use("/api/admin", adminRoutes);

app.use(handleErrors);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

module.exports = app;
