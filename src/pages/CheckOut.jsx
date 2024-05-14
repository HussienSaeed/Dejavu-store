import React from 'react'
import { Meta } from '../components/Meta'
import { BreadCrumb } from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { MdKeyboardBackspace } from "react-icons/md";
import watch from '../images/watch.jpg'
import Container from '../components/Container';


const CheckOut = () => {
  return (
    <>
          <Meta title={"Cart"} />
          <BreadCrumb title='Your Shopping Cart' />  
          <Container class1="checkout-wrapper home-wrapper-2 py-5">
                  <div className="row">
                  <div className="col-7">
                      <div className="checkout-left-data">
                          <h3 className="website-name">Deja-Vu.</h3>
                          <nav style={{"--bs-breadcrumb-divider":">"}} aria-label="breadcrumb">
                              <ol className="breadcrumb">
                                      <li className="breadcrumb-item"><Link className=' text-decoration-none  total-price text-dark' to="/cart">Cart</Link></li>
                                  &nbsp; /
                                  <li className="breadcrumb-item active total-price" aria-current="page">Information</li> &nbsp; /
                                  <li className="breadcrumb-item active total-price" aria-current="page">Shipping</li> &nbsp; /
                                  <li className="breadcrumb-item active total-price" aria-current="page">Payment</li> &nbsp; /
                              </ol>
                          </nav>
                          <h4 className="title total">
                          Contact Information
                          </h4>
                              <p className="user-details total">Hussien Saeed (hussiensaeed785@gmail.com)</p>
                              <h4 className='mb-3'>Shipping Address</h4>
                          <form action="" className='d-flex flex-wrap gap-15 justify-content-between '>
                              <div className='w-100'>
                                  <select className='form-contol form-select ' name="" id="">
                                  <option value="" selected disabled>Select Country</option>
                                  </select>
                              </div>
                              <div className='flex-grow-1'>
                              <input placeholder='First Name' type="text" className="form-control" />
                              </div>
                              <div className='flex-grow-1'>
                                  <input placeholder='Last Name' type="text" className="form-control" />
                              </div>
                              <div className='w-100'>
                                  <input placeholder='Address' type="text" className="form-control" />
                              </div>
                              <div className='w-100'>
                                  <input placeholder='Apartment, Suite, etc' type="text" className="form-control" />
                              </div>
                              <div className='flex-grow-1'><input placeholder='City' type="text" className="form-control" />
</div>
                              <div className='flex-grow-1'>
                                  <select className='form-contol form-select ' name="" id="">
                                  <option value="" selected disabled>State</option>
                                  </select>
</div>
                              <div className='flex-grow-1'><input placeholder='Zipcode' type="text" className="form-control" />
                              </div>      
                              <div className="w-100">
                                  <div className="d-flex justify-content-between align-content-center">
                                      <Link to="/cart" className='text-dark text-decoration-none'>
                                          <MdKeyboardBackspace /> Return to Cart</Link>
                                    <Link to="/product" className='button'>Continue to Shipping</Link>
                                  </div></div>
                          </form>
                      </div>
                  </div>
                  <div className="col-5">
                          <div className='border-bottom py-4'>
                              <div className="d-flex gap-10 mb-2 align-items-center">
                                  <div className='w-75 d-flex gap-10' >
                                      <div className='w-25 position-relative'><img className='img-fluid' src={watch} alt="product" />
                                          <span style={{ "top": "2px", "right": "10px" }} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                                      </div>
                                      <div>
                                      <h5 className='total-price'>Title</h5>
                                          <p className='total-price'>s / #123456</p>
                                      </div>
                                  </div>
                                  <div className='flex-grow-1'>
                                      <h5 className='total'>$ 100</h5>
                                  </div>
                              </div>
                          </div>
                          <div className=' py-4 border-bottom'>
                          <div className='d-flex justify-content-between align-items-center'>
                          <p className='total'>Subtotal</p>
                          <p className='total-price'>$1000</p>
                      </div>
                              <div className='d-flex justify-content-between align-items-center '>
                              <p className='mb-0 total'>Shipping</p>
                              <p className='mb-0 total-price'>$100</p>
                          </div>
                      </div>
                          <div className='d-flex justify-content-between align-items-center    py-4'>
                          <h4 className='total'>Total</h4>
                          <h5 className='total-price'>$1100</h5>
                      </div>
                  </div>
              </div>
          </Container>
    </>
  )
}

export default CheckOut
