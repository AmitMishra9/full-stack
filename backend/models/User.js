const mongoose=require("mongoose")
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:5,
        max:25,
        unique:true
    },
     email:{
         type:String,
         required:true,
         unique:true
     },
     password:{
        type:String,
        requried:true,
        min:8
     },
     jwt:{
        type:String,
        default:""
     }
},{timestamps:true})


const User=mongoose.model('User',userSchema);
module.exports=User;