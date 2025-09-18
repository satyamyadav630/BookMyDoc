import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";


dotenv.config();

//app config
const app = express();
const port = 4000;
connectDB()

// middleware
app.use(express.json());
app.use(cors());

//api endpint
app.get("/", (req, res) => {
  res.send("hyy buddy");
});

app.listen(port, () => {
  console.log("Server Started on port", port);
});
