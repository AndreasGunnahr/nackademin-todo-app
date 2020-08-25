const dotenv = require("dotenv");
dotenv.config();

// IMPORT OF PACKAGES & DATABASE
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnect = require("./database");
const { swaggerUi, swaggerDocs } = require("./swaggerDoc");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// IMPORT ALL ROUTES
const todoRoutes = require("./routes/todo");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api/todos", todoRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listen on port ${process.env.PORT}`);
});
