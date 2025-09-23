import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  try {
    // headers me Authorization me Bearer token expect karenge
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.json({ success: false, message: 'Not Authorized, login again' });
    }

    const token = authHeader.split(' ')[1]; // "Bearer <token>" se token nikalna
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { id: decoded.id }; // controllers me use karne ke liye
    next();

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
