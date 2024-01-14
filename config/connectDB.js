const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://henidjebbi:henidjebbi@cluster0.syfifte.mongodb.net/contact"
    )
    .then(() => console.log("database connected successfully"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
