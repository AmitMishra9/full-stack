const { isValidObjectId } = require("mongoose");
const User= require("../models/User");
const bcrypt= require("bcrypt") 
const jwt= require("jsonwebtoken");

const JWT_SECRET_KEY="myjwtkeysecreket";


const login = async (req, res) => {
     
      const user = await User.findOne({ username: req.body.username });
        
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "Invalid username or password",
        });
      }
     // console.log(user);
      const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
  
      if (!isPasswordValid) {
        return res.status(400).json({
          success: false,
          message: "Password is not valid",
        });
      }

         const now =Date.now();

        const payload={
          iat:now,
          exp:now+3600*1000,
          id:user._id,
          email:user.email
        }; 

       const token= jwt.sign(payload, JWT_SECRET_KEY);

      res.json({
        success: true,
        message:"Login Successful",
        token:token
      });  
    
   }
     

const rigester= async(req,res)=>{
    console.log(req.body);

    const salt= await bcrypt.genSalt(10);
     const hash= await bcrypt.hash(req.body.password,salt);
    const user =  new User({
        username:req.body.username,
        email:req.body.email,
        password:hash,
    });
    await user.save();
    

   res.json({
       success:true,
       message:"User Rigester Succesfully"
   })

};

const logout=(req,res)=>{
    res.json({
        success:true,
        message:"ok logout done"
    })

}


module.exports={
    login,
    rigester,
    logout,

}