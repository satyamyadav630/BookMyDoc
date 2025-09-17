import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

//app config
const app = express();
const port = 4000;

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
