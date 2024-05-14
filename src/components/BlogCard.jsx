import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
   
    <div className="blog-card shadow-lg ">
    <div className="card-image">
    <img src="images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
    </div>
    <div className="blog-content rounded-3 ">
    <p className='date'>18 Feb , 2024</p>
    <h5 className="title">A beautiful sunday morning renaissance</h5>
    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit .</p>
    <Link to="/blog/:id" className='button'>Read more</Link>
    </div>
    </div>
      
   
  )
}

export default BlogCard;
