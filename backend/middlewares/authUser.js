import jwt from'jsonwebtoken'


// user authentication middleware
const authUser =async(req,res,next)=>{
    try {

const {token}= req.headers
if(!token){
    return res.json({success:false,message:'Not Autorized login again'})
}
// decode token 
const token_decode = jwt.verify(token,process.env.JWT_SECRET)

// req.body.userId = token_decode.id
req.user = { id: token_decode.id}   //ya update kiya hu error ane ke baad
next()
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})


    }

}

export default authUser


