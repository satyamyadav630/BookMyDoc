import express from "express";
import { addDoctor,allDoctor,loginAdmin } from "../controller/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";
import { changeAvailability } from "../controller/doctorController.js";

const adminRouter = express.Router()

adminRouter.post('/add-doctor', authAdmin, upload.single('image'),addDoctor)

adminRouter.post('/login',loginAdmin)
adminRouter.post('/all-doctor',authAdmin,allDoctor)
adminRouter.post('/change-availability',authAdmin,changeAvailability)



export default adminRouter
