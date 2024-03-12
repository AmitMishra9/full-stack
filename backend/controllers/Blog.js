const Blog =require("../models/Blog");

const getBlogList = async(req,res)=>{
    //console.log(req.user);
   // console.log(req.url);
    try {
       const blogs = await Blog.find({}).populate('createdBy');
       //console.log(blogs); 
       res.json({
            success:true,
            results:blogs
          })
    } catch (error) {
        console.error(error.message);
    }
      
}

const createBlog = async(req,res)=>{
    console.log(req);
    console.log("body respond",req.body,req.file);
    try {
     const filepath='/'+ req.file.filename;  
     const blogData={
         title:req.body.title,
         description:req.body.description,
         image:filepath,
         createdBy:req.user._id,
     }

     const blog=new Blog(blogData);
     await  blog.save();
     res.json({
        success:true,
        message:"Blog created successfully"
     })
     } catch (error) {
       console.error(error.message);    
     }
    
    
}

const editBlog =async(req,res)=>{
    const blogid=req.body._id;
    const type= req.body.type; // upvote ,downvote

    const incDecObj={};
    if(type=="upvote"){
        incDecObj.upvotes =1;
    }
    else {
        incDecObj.downvote=1;
    }

    await Blog.findByIdAndUpdate(blogid,{
     $inc:incDecObj
    });



         res.json({
          success:true
       })
}

const deleteBlog =(req,res)=>{
     res.json({
         success:true
     })
}

module.exports={
    getBlogList,
    createBlog,
    editBlog,
    deleteBlog,
}