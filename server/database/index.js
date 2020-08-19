const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  const db = mongoose.connection;
  //   console.log(db);
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("Connected to database.."));
};

module.exports = dbConnect();
