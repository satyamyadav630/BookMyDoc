import doctorModel from "../models/doctorModel.js";

const changeAvailability = async (req, res) => {
  try {

const{docId} = req.body
const doctorData = await doctorModel.findById(docId)
await doctorModel.findByIdAndUpdate(docId,{available:!doctorData.available})
res.json({success:true,message:'Availablity Changed'})

  } catch (error) {
    console.log("❌ Add Doctor Error:", error);
    res.json({ success: false, message: error.message });
  }
};

export { changeAvailability };
