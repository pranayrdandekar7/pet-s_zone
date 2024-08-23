import React from 'react'
import {useEffect,useState}from  'react';
import toast,{Toaster} from 'react-hot-toast'

import axios from 'axios'
import BlogsCard from '../../components/BlogsCard/BlogsCard.js';
import './Blogs.css'

function Blog() {
    const [blogs ,setBlogs]=useState([])
    
    const loadBlogs= async ()=>{
      toast.loading("Loading Blogs...")
       const response  = await axios.get(`${process.env.REACT_APP_API_URL}/blogs`)
       toast.dismiss()
       toast.success("Blog loaded successfully!")
     setBlogs(response.data.data)
        }
        useEffect(()=>{
            loadBlogs()
           },[])
  return (
    <div className='blog-container'>
     
        { blogs.map((Blog, i)=>{
            const{ _id,title,description,category,vidUrl,createdAt} = Blog
            return(
              <BlogsCard  
                 key={i}
                id={_id}
                title={title}
                description={description}
                category={category}
                vidUrl={vidUrl}
                createdAt={createdAt}
                 />
                 )
         })
        }
        <Toaster/>
        </div>
    
  )
}

export default Blog
