require("dotenv").config();
const mongoose = require("mongoose");

module.exports.connect = async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

module.exports.closeDatabase = async () => {
  // await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
};

module.exports.clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
};
