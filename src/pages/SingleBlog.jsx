import React from 'react'
import { Meta } from '../components/Meta'
import { BreadCrumb } from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import Container from '../components/Container';


const SingleBlog = () => {
  return (
    <>
    <Meta title={"Dynamic Blog Name"}/>
    <BreadCrumb title='Dynamic Blog Name'/>  
      <Container class1="blog-wrapper home-wrapper-2 py-5">
    <div className="row">
  
    <div className="col-12">
    <div className="singke-blog-card">
    <Link to='/blogs' style={{"color":"var(--color-777777)" }} className='text-decoration-none d-flex align-items-center gap-10'> <FaArrowLeftLong className='fs-5'/>
    Go back to Blogs</Link>
    <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
    <img src="images/blog-1.jpg" className='img-fluid w-100 my-4' alt="blog" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium, recusandae, animi reprehenderit exercitationem sed voluptas vel earum ab eaque enim iusto est laborum sequi laboriosam atque quaerat doloribus voluptates?</p>
    </div>
    </div>
    
    </div>
    </Container>
    
    </>
  )
}

export default SingleBlog
