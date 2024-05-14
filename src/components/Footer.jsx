import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin , BsGithub ,BsInstagram} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
    <div className="container-xxl">
    <div className="row align-item-center">
    <div className="col-5">
    <div className="footer-top-data d-flex gap-30 align-items-center">
    <img src="/images/newsletter.png" alt="newsletter" />
    <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
    </div>
    </div>
    <div className="col-7">
    <div className="input-group ">
    <input type="text" className="form-control shadow  my-1" placeholder="Your E-mail Address" 
    aria-label="Your E-mail Address" 
    aria-describedby="basic-addon2"/>
    <span className="input-group-text p-2 my-1" id="basic-addon2">Subscribe</span>
  </div></div>
    </div>
    </div>
    </footer>
    <footer className='py-4'>
    <div className="container-xxl">
    <div className="row">
    <div className="col-4">
    <h4 className='text-white mb-4'>Contact Us</h4>
    <div className=''>
    <address className='text-white fs-6 '>
    12 Eid El-Aarag St,Toukh <br/>Qalubia, Egypt  <br />
    PinCode : 13471
    </address>
    <a href="tel:+2001024359860" className='mt-2 d-block mb-0 text-decoration-none text-white'>+2001024359860</a>
    <a href='mailto:hussiensaeed785@gmail.com' className='mt-3 d-block mb-0 text-decoration-none text-white'>hussiensaeed785@gmail.com</a>
    <div className="social-icons d-flex align-items-center gap-30 mt-3">
    <a className='text-white' href="#"><BsLinkedin className='fs-5' /></a>
    <a className='text-white' href="#"><FaFacebook className='fs-5'/></a>
    <a className='text-white' href="#"><BsGithub className='fs-5'/> </a>
    <a className='text-white' href="#"><BsInstagram className=' fs-5'/></a>
    
    </div>
    </div>
    </div>
    <div className="col-3">
    <h4 className='text-white mb-4'>Information</h4>
    <div className='footer-links d-flex flex-column '>
    <Link to="/privacy-policy" className='text-white py-2 mb-1 text-decoration-none'>Privacy Policy</Link>
    <Link to="/refund-policy" className='text-white py-2 mb-1 text-decoration-none'>Refund Policy</Link>
    <Link to="/shipping-policy" className='text-white py-2 mb-1 text-decoration-none'>Shipping Policy</Link>
    <Link to="/term-condition" className='text-white py-2 mb-1 text-decoration-none'>Terms Of Service</Link>
    <Link to="/blogs" className='text-white py-2 mb-1 text-decoration-none'>Blogs</Link>
    </div>    </div>
    <div className="col-3">
    <h4 className='text-white mb-4'>Account</h4>
    <div className='footer-links d-flex flex-column '>
    <Link className='text-white py-2 mb-1 text-decoration-none'>About</Link>
    <Link className='text-white py-2 mb-1 text-decoration-none'>FAQ</Link>
    <Link className='text-white py-2 mb-1 text-decoration-none'>Contact</Link>
    <Link className='text-white py-2 mb-1 text-decoration-none'>Watches</Link>
    </div>    </div>
    <div className="col-2">
    <h4 className='text-white mb-4'>Quick Links</h4>
    <div className='footer-links d-flex flex-column '>
    <Link className='text-white py-2 mb-1 text-decoration-none'>Laptops</Link>
    <Link className='text-white py-2 mb-1 text-decoration-none'>Headphones</Link>
    <Link className='text-white py-2 mb-1 text-decoration-none'>Tablets</Link>
    <Link className='text-white py-2 mb-1 text-decoration-none'>Watches</Link>
    </div>
    </div>
    </div>
    </div>
    </footer>
    <footer className='py-4'>
    <div className="container-xxl">
    <div className="row">
    <div className="col-12">
    <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()} ; Powered by Hussien-Saeed</p>
    </div>
    </div>
    </div>
    </footer>
    </>
  )
}

export default Footer
