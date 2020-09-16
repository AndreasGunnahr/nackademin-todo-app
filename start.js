const app = require("./app");
const dbConnect = require("./database");

app.listen(process.env.PORT, () => {
  console.log(`Listen on port ${process.env.PORT}`);
});
