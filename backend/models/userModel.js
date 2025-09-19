import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
name:{type:String,required:true},
email:{type:String,required:true,unique:true},
password:{type:String,required:true},
image:{type:String,required:true},
address:{type:Object,required:true},
gender:{type:String,default:"Not selected"},
dob:{type:String,default:"Not selected"},
phone:{type:String,required:true},




} )


const userModel = mongoose.models.user || mongoose.model('user',userSchema)

export default userModel


