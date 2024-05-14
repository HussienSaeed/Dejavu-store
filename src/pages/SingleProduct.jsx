import React, { useState } from 'react'
import { Meta } from '../components/Meta'
import { BreadCrumb } from '../components/BreadCrumb'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import ProductCard from '../components/ProductCard'
import Color from '../components/Color'
import { Link } from 'react-router-dom';
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Container from '../components/Container';


const SingleProduct = () => {
    const props = {width: 600, height: 600, zoomWidth: 500, img: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe7160cfd/images/Fastrack/Catalog/38074AP01_2.jpg?sw=800&sh=800"};
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
    const [orderedProduct , setorderedProduct] = useState(true)
  return (
    <>
    <Meta title={"Product Name"}/>
    <BreadCrumb title='Product Name'/> 
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
    <div className="row">
    <div className="col-6">
    <div className="main-product-image">
    <div >
    <ReactImageZoom  {...props} />
    </div>
    </div>
    <div className="other-product-images d-flex flex-wrap gap-15">
    <div><img src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe7160cfd/images/Fastrack/Catalog/38074AP01_2.jpg?sw=800&sh=800" className='img-fluid' alt="" /></div>
    <div><img src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe7160cfd/images/Fastrack/Catalog/38074AP01_2.jpg?sw=800&sh=800" className='img-fluid' alt="" /></div>
    <div><img src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe7160cfd/images/Fastrack/Catalog/38074AP01_2.jpg?sw=800&sh=800" className='img-fluid' alt="" /></div>
    <div><img src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe7160cfd/images/Fastrack/Catalog/38074AP01_2.jpg?sw=800&sh=800" className='img-fluid' alt="" /></div>
    </div>
    </div>
    <div className="col-6">
    <div className="main-product-details">
    <div className='border-bottom py-3'>
    <h3 className='title'>Kids headphones bulk 10 pack multi colored for students</h3>

    </div>
    <div className="border-bottom py-3">
    <p className="price">$ 100.00</p>
    <div className="d-flex align-items-center gap-10">
    <ReactStars
    count={5}
    size={24}
    value="3"
    edit="false"
    activeColor="#ffd700"
  />
  <p className='mb-0 t-review'>( 2 Reviews )</p>

    </div>
    <a className='text-decoration-none review-btn' href="#review">Wite a Review</a>
    </div>
    <div className=" py-3">
    <div className='d-flex gap-10 align-items-center mt-2 mb-3'>
    <h3 className='product-heading'>Type :</h3>
     <p className='product-data'>Watch</p> </div>
    <div className='d-flex gap-10 align-items-center mt-2 mb-3'>
    <h3 className='product-heading'>Brand :</h3>
     <p className='product-data'>Samsung</p> </div>
    <div className='d-flex gap-10 align-items-center mt-2 mb-3'>
    <h3 className='product-heading'>Category :</h3>
     <p className='product-data'>Watches</p> </div>
    <div className='d-flex gap-10 align-items-center mt-2 mb-3'>
    <h3 className='product-heading'>Tags :</h3>
     <p className='product-data'>Watch</p> </div>
    <div className='d-flex gap-10 align-items-center mt-2 mb-3'>
    <h3 className='product-heading'>Availablity :</h3>
     <p className='product-data'>In Stock</p> </div>
    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
    <h3 className='product-heading'>Size :</h3>

    <div className='d-flex flex-wrap gap-15'>
    <span className="badge border border-secondary border-1 bg-white text-dark">S</span>
    <span className="badge border border-secondary border-1 bg-white text-dark">M</span>
    <span className="badge border border-secondary border-1 bg-white text-dark">L</span>
    <span className="badge border border-secondary border-1 bg-white text-dark">Xl</span>
    <span className="badge border border-secondary border-1 bg-white text-dark">XXl</span>
    </div>
    </div>
    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
    <h3 className='product-heading'>Color :</h3><Color/> </div>
    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
    <h3 className='product-heading'>Quantity :</h3> 
    <div className=''>
     <input type="number" name="" className='form-control' min={1} max={10} style={{width:"70px"}} id="" />
    <div className='d-flex align-items-center my-3 gap-30 ms-5'>
    <button type='submit' className='button border-0 add-to-cart'>ADD TO CART</button>
    <Link to='/signup' className='button buy'>Buy It Now</Link>
    </div>
    </div>
    </div>
    <div className='d-flex align0items-center gap-15'>
    <div>
    <a href="">
     <IoIosGitCompare className='fs-5 me-2' />
     Add to Compare</a>
     </div>
    <div>
    <a href="">
     <MdOutlineFavoriteBorder className='fs-5 me-2'/>
    Add to Wishlist</a>
    </div>
    </div>
    <div className='d-flex gap-10 flex-column  my-3'>
    <h3 className='product-heading'>Shipping & Returns :</h3>
     <p className='product-data'>Free shipping and return available on all orders! <br />
     we ship all US domestic orders within <b>5-10 bussines days!</b>
     </p> </div>
    <div className='d-flex gap-10 flex-column  my-3 '>
    <h3 className='product-heading'>Shipping & Returns :</h3>
     <p className='product-data'>Free shipping and return available on all orders! <br />
     we ship all US domestic orders within <b>5-10 bussines days!</b>
     </p> </div>
    <div className='d-flex gap-10 align-items-center mt-2 mb-3'>
    <h3 className='product-heading'>Product Link :</h3>
    <a href="javascript:void(0);" onClick={()=>{copyToClipboard("https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe7160cfd/images/Fastrack/Catalog/38074AP01_2.jpg?sw=800&sh=800");} }>Copy Product Link</a>
    </div>
    </div>
    </div>
    </div>
    </div>
    </Container>
      <Container class1="description-wrapper home-wraper-2 py-5">
    <div className="row">
    <div className="col-12">
    <h4>Description</h4>
    <div className='bg-white p-3'>
    <p className=''>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Atque omnis eum soluta excepturi reiciendis deserunt,
      molestias recusandae perspiciatis quo totam minus nulla voluptatem quasi qui fugiat et ad
      , harum necessitatibus.</p>
    </div>
    </div>
    </div>
    </Container>
    <Container  class1="reviews-wrapper home-wrapper-2 " >
    <div className="row">
    <div className="col-12">
    <h3 id='review'>Reviews</h3>
    <div className="review-inner-wrapper">
    <div className="review-head d-flex justify-content-between align-items-end">
    <div>
    <h4 className='mb-2'>Customer Reviews</h4>
    <div className='d-flex align-items-center gap-10'>
    <ReactStars
    count={5}
    size={24}
    value="3"
    edit="false"
    activeColor="#ffd700"
  />
  <p className='mb-0'>Based on 2 Reviews</p>
    </div>
    </div>
    <div>
    {
        orderedProduct && (
            <div>
            <a className='text-decoration-underline text-dark' href="">Write a Review</a>
            </div>
        )
    }
    </div>
    </div>
    <div  className="review-form py-4">
    <h4>Wtite a Review</h4>
    <form action="" className='d-flex flex-column gap-15'>
    <div>
    <ReactStars
    count={5}
    size={24}
    value="3"
    edit="true"
    activeColor="#ffd700"
  />
    </div>
    <div>
    <textarea name="" id="" className='w-100 form-control' cols="30" rows="4" placeholder='Review..'></textarea>
    </div>
    <div className='d-flex justify-content-end'>
    <button className='button border-0'>Submit Review</button>
    </div>
    </form>
    </div>
    <div className="reviews">
    <div className="review">
    <div className='d-flex gap-10 align-items-center'>
    <h6 className='mb-0'>Hussien</h6>
    <ReactStars
    count={5}
    size={24}
    value="3"
    edit="false"
    activeColor="#ffd700"
  />
    </div>
  <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi laboriosam hic ducimus, molestiae ut saepe iste ipsam reiciendis quod perspiciatis, earum porro ex consequatur quibusdam quidem ratione placeat! Optio.</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </Container>
      <Container class1='popular-wrapper py-5 home-wrapper-2 '>
    <div className="row">
    <div className="col-12">
    <h3 className="section-heading">Our Popular Products</h3>
    </div>

    </div>
    <div className="row">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
    </Container>
    </>
  )
}

export default SingleProduct
