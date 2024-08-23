import Blog from "../models/Blogs.js";

const PostBlog = async(req,res)=>{
    const { title,description,category,vidUrl,date}=req.body

    const blog =new Blog({
        title,
        description,
        category,
        vidUrl,
        date

    })
    try{
        const savedBlog = await blog.save()
       res.json({
        success:true,
        message:"blogs created successfully",
        data:savedBlog
       })
    }
    catch(e){
    
    res.json({
        success:false,
        message:e.message,
        data:null
    })

    }
}
const deleteBlogId= async(req,res)=>{
    const id=req.params.id
 try{
    await  Blogs.deleteOne({_id:id});
    res.json({
        success:true,
        message:"blog deleted successfully",
        data:null
    })
 }
 catch(e){
    res.json({
        success:false,
        message:'Error deleting  blog',
        data:e.message
    })
 }
}
const getallBlogs=async(req,res)=>{
    const blogs = await Blog.find()
    if(blogs){
        res.json({
            success:true,
            message:" all blogs fetched successfully",
            data:blogs
        })
    }
    else{
        res.json({
            success:false,
            message:"blogs not found",
            data:null
        })
    }
 
}

const getBlog=async(req,res)=>{
    const {id}= req.params;
const blogs = await Blog.findById({_id:id})
       if(blogs){
     res.json({
            success:true,
            message:"blogs fetched successfully",
            data:blogs
        })
       }
       else{
        res.json({
            success:false,
            message:"blogs not found",
            data:null
        })
       }
       
    }

export {PostBlog, deleteBlogId,getallBlogs,getBlog}
 
