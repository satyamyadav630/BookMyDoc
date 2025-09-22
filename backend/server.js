import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

dotenv.config();

//app config
const app = express();
const port = 4000;
connectDB();
connectCloudinary();
app.use(express.urlencoded({ extended: true }));

// middleware
app.use(express.json());
app.use(cors());

//api endpint
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use ("/api/user",userRouter    )
//  localhost:4000/api/admin

app.get("/", (req, res) => {
  res.send("hyy buddy");
});

app.listen(port, () => {
  console.log("Server Started on port", port);
});
