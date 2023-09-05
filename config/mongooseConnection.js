const mongoose = require("mongoose");

const mongoConnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGOOSE_URL);
    console.log(
      "Mongo Database Connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = mongoConnection;