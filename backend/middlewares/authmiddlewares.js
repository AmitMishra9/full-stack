const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

const JWT_SECRET_KEY = "myjwtkeysecreket";

const authmiddlewares = async (req, res, next) => {
  const unauthorized = {
    success: false,
    message: "Unauthorized",
  };

  try {
    const auth = req.header("Authorization")?.replace("Bearer ", "");
  // console.log(auth);   
   
    if (!auth) {
      return res.status(401).json(unauthorized);
    }

    // Split the authorization header correctly
    // const token = auth.split(' ')[1]; // Change this line
     // console.log(token);
    if (!auth) {
      return res.status(401).json(unauthorized);
    }

    // Fix the typo in jwt.verify
    await jwt.verify(auth, JWT_SECRET_KEY);

   
    const tokenData = await jwt.decode(auth);

    
    const tokenExpiry = tokenData.exp;
    const now = Date.now();
    // console.log(tokenExpiry);
    // console.log(now);
      if (tokenExpiry >= now) {
      return res.status(401).json({message:"from line number 13"});
    }

    const user = await User.findById(tokenData.id);
    if (!user) {
      return res.status(401).json(unauthorized);
    }
    req.user = user;
    next();
  } catch (err) {
    // Log the error for debugging
    console.error("Error in authmiddlewares:", err);
    res.status(401).json(unauthorized);
  }
};

module.exports = authmiddlewares;
