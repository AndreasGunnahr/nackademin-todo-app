const dotenv = require("dotenv");
dotenv.config();

// IMPORT OF PACKAGES & DATABASE
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnect = require("./database");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// IMPORT ALL ROUTES
const todoRoutes = require("./routes/todo");

app.use("/api/todo", todoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listen on port ${process.env.PORT}`);
});
