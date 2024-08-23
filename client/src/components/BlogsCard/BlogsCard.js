import React from 'react'
import "./BlogsCard.css"

function BlogsCard({ title,description,category,vidUrl,createdAt}) {                          
 
  
  return (
    
    <div className='main-card'>
    <div className='blog-card'>
     <p className='blog-title'>{title}</p>
      <p className='video-url'>{vidUrl}</p>
      <p className='blog-category'>{category}</p>
     <p className='blog-desc'>{description}</p>
     <p className='blog-date'>{new Date (createdAt).toLocaleString()}</p>
     </div>
     </div>
    
  )
}

export default BlogsCard
