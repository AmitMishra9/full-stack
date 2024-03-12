const mongoose=require("mongoose")
const blogSchema = new mongoose.Schema({
   
   title:{
      type:String,
      required:true,
      min:10
   },
   description:{
      type:String,
      required:true,
       min:10,
   },
   image:{
      type:String,
      required:false,
      default:" ",

   },
   createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref: 'User',
      //required:true,
   },
   upvotes:{
      type:Number,
      required:false,
       delfult:0,  
   },
   downvote:{
       type:Number,
       required:false,
       defult:0
   }




},{timestamps:true})


const blogs=mongoose.model('blogs',blogSchema);
module.exports=blogs;