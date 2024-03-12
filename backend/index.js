const express= require('express');
require('dotenv').config({});
const mongoose=require("mongoose")
const cors=require("cors");
const app=express();

const authmiddlewares=require("./middlewares/authmiddlewares");


// Routes Import

const authRouths=require("./routes/Auth");
const blogRouths=require("./routes/Blog");


/* Database connection 
'mongodb://127.0.0.1:27017/blogapp'
mongodb+srv://amitm4754:amitm4754@cluster0.fojnc3e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/
const URL= "mongodb+srv://amitm4754:amitm4754@cluster0.fojnc3e.mongodb.net/blog"
//const URL='mongodb://127.0.0.1:27017/blogapp'
mongoose.connect(URL)
  .then(() => {
    console.log("DATABASE CONNECTION HOGAYA");
  })
  .catch((err) => {
    console.log("Error connecting to the database...", err);
  });
  const PortNo =process.env.PORT ||  8000;

 // Middlewares 
 app.use(express.static("./files"));
 app.use(express.json());
app.use(cors());



/*Connecte , authmiddlewares*/
app.use('/api/v1/blog',blogRouths);
app.use('/api/v1/auth',authRouths);


app.listen(PortNo,()=>console.log(`Server is up and runing on port ${PortNo}`));
