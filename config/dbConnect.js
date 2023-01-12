const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully !!!");
  } catch (error) {
    console.log("Database Error");
  }
};

module.exports = dbConnect;
