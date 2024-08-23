import React from 'react'
import "./BlogsCard.css"

function BlogsCard({ title,description,category,vidUrl,date}) {
 
  
  return (
    <div className='blog-card'>
       <h1>Pets Zone Blog</h1>
     <h3>{title}</h3>
     <h4>{description}</h4>
     <p>{vidUrl}
      
     </p>
    </div>
  )
}

export default BlogsCard
