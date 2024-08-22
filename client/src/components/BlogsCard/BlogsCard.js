import React from 'react'
import "./BlogsCard.css"

function BlogsCard({ title,description,category,vidUrl,date}) {
 
  
  return (
    <div className='blog-card'>
       <h1>Pets Zone Blog</h1>
     <h1>{title}</h1>
     <h2>{description}</h2>
    </div>
  )
}

export default BlogsCard
