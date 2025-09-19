
import validator from 'validator'
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary';

import doctorModel from '../models/doctorModel.js'
import jwt from 'jsonwebtoken';



// api for adding doctor 
const addDoctor = async (req,res)=>{
try{
const{name, email, password, speciality, degree, experience, about, fees, address} = req.body;
const imageFile = req.file


  // // 👇 STEP 1: Check body aur file aayi ki nahi
  //   console.log("🟢 Req.body:", req.body);
  //   console.log("🟢 Req.file:", req.file);

  //     console.log("🟢 Cloudinary ENV:", process.env.CLOUDINARY_NAME, process.env.CLOUDINARY_API_KEY);

// checking for all data for doctor 
if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
   return res.json({success:false,message:"Missing Details"})
}


// validating email format

if (!validator.isEmail(email)) {
 return res.json({success:false,message:"please enter avalid email"})

}

// password validation
if(password.length < 8){
return res.json({success:false,message:" please enter a strong password"})
}

// console.log("🟢 Uploading to Cloudinary:", imageFile?.path);

// hasing doctor password
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt)

// upload image to cloudanary
const imageUpload = await cloudinary.uploader.upload(imageFile.path , {resource_type:"image"})
const imageUrl = imageUpload.secure_url

const doctorData ={
    name,
    email,
    image:imageUrl,
    password:hashedPassword,
    speciality,
    degree,
    experience,
    about,
    fees,
    address:JSON.parse(address),
    date:Date.now() 
}

const newDoctor = new doctorModel(doctorData)
await newDoctor.save()
res.json({success:true,message:"doctor Added"})

}
catch (error) {
  console.log("❌ Add Doctor Error:", error); 
res.json({success:false,message:error.message})

}

}

// api for admin login
const loginAdmin = async(req,res)=>{
try{

const {email,password}=req.body
if(email === process.env.ADMIN_EMAIL && password ===process.env.ADMIN_PASSWORD){

  const token = jwt.sign(email+password,process.env.JWT_SECRET)
  res.json({success:true,token})

}else{
  res.json({success:false,message:"Invalid credantials"})
}


}catch(error){
console.log("❌ Add Doctor Error:", error); 
res.json({success:false,message:error.message})

}

}
export{addDoctor,loginAdmin}