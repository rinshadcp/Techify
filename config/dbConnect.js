import mongoose from "mongoose";

const dbConnect = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully !!!");
  } catch (err) {
    console.log("Database Error");
  }
};

export default dbConnect;
