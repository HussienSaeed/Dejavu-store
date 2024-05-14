import React from 'react'
import { Meta } from '../components/Meta'
import { BreadCrumb } from '../components/BreadCrumb'
import { FaHome } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";
import Container from '../components/Container';


const Contact = () => {
  return (
    <>
    <Meta title={"Contact Us"}/>
    <BreadCrumb title='Cobtact Us'/>
    <Container class1="contact-wrapper py-5 home-wrapper-2">
    <div className="row">
    
    <div className="col-12">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13771.190619463638!2d31.191714965896445!3d30.356700062111525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145873be39c6e6ef%3A0x1f7b0a45bdcb44b6!2sToukh%2C%20Toukh%20City%2C%20Toukh%2C%20Al-Qalyubia%20Governorate!5e0!3m2!1sen!2seg!4v1708327508620!5m2!1sen!2seg" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    
    </div>
    <div className="col-12 mt-5">
    <div className="contact-inner-wrapper d-flex justify-content-between ">
    <div> <h3 className="contact-title mb-4">Contact Us</h3>
    <form action="" className='d-flex flex-column gap-15'>
    <div>
    <input type="text" className="form-control" placeholder='Name'/>
    </div>
    <div>
    <input type="text" className="form-control"  placeholder='E-Mail'/>
    </div>
    <div>
    <input type="text" className="form-control"  placeholder='Mobile Number' />
    </div>
    <div>
    <textarea name="" id="" className='w-100 form-control' cols="30" rows="4" placeholder='Comments'></textarea>
    </div>
    <div>
    <button className='button border-0'>Submit</button>
    </div>
    </form>
    </div>
    <div> <h3 className="contact-title mb-4 mt-0">Get in touch with us</h3>
    <div>
    <ul className='ps-0'>
    <li className='mb-3 d-flex gap-15 align-items-center' ><FaHome className='fs-5 contact-icon '/>
    <address className='mb-0'>12 Eid El-Aarag St, Toukh
    Qalubia, Egypt</address>
    </li>
    <li className='mb-3 d-flex gap-15 align-items-center'><MdWifiCalling3 className='fs-5 contact-icon'/>
    <a className='text-decoration-none' href="tel:+2001024359860">+20-01024359860</a>
    </li>
    <li className='mb-3 d-flex gap-15 align-items-center'><IoIosMail className='fs-5 contact-icon'/>
    <a className='text-decoration-none' href="mailto:hussiensaeed785@gmail.com">hussiensaeed785@gmail.com</a>
    </li>
    <li className='mb-3 d-flex gap-15 align-items-center'><BsInfoCircleFill className='fs-5 contact-icon'/>
    <p className='mb-0'>Saturday - Thursday 10 AM - 10 PM</p>
    </li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    
    </div>
    </Container>
    
    </>
  )
}

export default Contact
