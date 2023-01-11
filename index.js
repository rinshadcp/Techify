import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import dbConnect from "./config/dbConnect.js";
dbConnect();

app.use("/", (req, res) => {
  res.send("Hai");
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT} `);
});
