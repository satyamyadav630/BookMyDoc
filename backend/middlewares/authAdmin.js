import jwt from'jsonwebtoken'


// admin authentication middleware
const authAdmin =async(req,res,next)=>{
    try {

const {atoken}= req.headers;
if(!atoken){
    return res.json({success:false,message:'Not Autorized login again'})
}
// decode token 
const token_decode = jwt.verify(atoken,process.env.JWT_SECRET)

if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
return res.json({success:false,message:'Not Autorized Login Again'})
}
next()
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})


    }

}

export default authAdmin


// import jwt from 'jsonwebtoken';

// const authAdmin = async (req, res, next) => {
//     try {
//         const token = req.headers// backend me lowercase header
//         if (!token) {
//             return res.json({ success: false, message: 'Not Authorized login again' });
//         }

//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         // check payload
//         if (decoded.email !== process.env.ADMIN_EMAIL) {
//             return res.json({ success: false, message: 'Not Authorized login again' });
//         }

//         next();
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// export default authAdmin;
