import React from 'react'
import {useEffect,useState}from  'react';

import axios from 'axios'
import BlogsCard from '../../components/BlogsCard/BlogsCard.js';

function Blog() {
    const [blogs ,setBlogs]=useState([])
    
    const loadBlogs= async ()=>{
       
       const response  = await axios.get(`${process.env.REACT_APP_API_URL}/blogs`)
     
     
       setBlogs(response.data.data)
        }
        useEffect(()=>{
            loadBlogs()
           },[])
  return (
    <div>
        { blogs.map((Blog, i)=>{
            const{ _id,title,description,category,vidUrl,date} = Blog
            return(
                <BlogsCard   
                 key={i}
                id={_id}
                title={title}
                description={description}
                category={category}
                vidUrl={vidUrl}
                date={date}
                 /> )
         })
        }

        
    </div>
    
  )
}

export default Blog
