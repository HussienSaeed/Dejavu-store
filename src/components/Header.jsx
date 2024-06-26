import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className='text-white mb-0'>Free Shipping over $100 & Free Returns</p>
            </div>
            <div className="col-md-6 text-end">
              <p className='text-white'>HotLine: <a className='text-white text-decoration-none' href="tel:2001024359860">01024359860</a> </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2">
              <h1><Link className='text-decoration-none text-white'>Deja-Vu.</Link></h1>
            </div>
            <div className="col-md-5">
              <div className="input-group">
                <input type="text" className="form-control shadow py-2 my-1" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                <span className="input-group-text py-2 my-1" id="basic-addon2"><BsSearch className='fs-5' /></span>
              </div>
            </div>
            <div className="col-md-5">
              <div className="header-upper-links d-flex align-items-center justify-content-end">
                <div className="me-3">
                  <Link to='/compare-product' className='text-decoration-none d-flex align-items-center gap-10 text-white'>
                    <img src='images/compare.svg' alt='compare' />
                    <p className='mb-0' >Compare <br />Products</p>
                  </Link>
                </div>
                <div className="me-3">
                  <Link to='/wishlist' className='text-decoration-none d-flex align-items-center gap-10 text-white'>
                    <img src='images/wishlist.svg' alt='wishlist' />
                    <p className='mb-0'>Favourites <br />Wishlist</p>
                  </Link>
                </div>
                <div className="me-3">
                  <Link to='login' className='text-decoration-none d-flex align-items-center gap-10 text-white'>
                    <img src='images/user.svg' alt='user' />
                    <p className='mb-0'>Log in <br />My Account</p>
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className='text-decoration-none d-flex align-items-center gap-10 text-white'>
                    <img src='images/cart.svg' alt='cart' />
                    <div className='d-flex flex-column' >
                      <span className='badge bg-white text-dark '>0</span>
                      <p className='mb-0'>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center justify-content-between">
                <div>
                  <Dropdown>
                    <Dropdown.Toggle className='bg-transparent border-0 gap-15 d-flex align-items-center' variant="secondary" id="dropdown-basic">
                      <img src="/images/menu.svg" alt="menu" />
                      <span className='me-5 d-inline-block'>Shop Categories</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Link className='dropdown-item text-white' to="">Action</Link>
                      <Link className='dropdown-item text-white' to="">Another action</Link>
                      <Link className='dropdown-item text-white border-0' to="">Something else</Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink className="text-white text-decoration-none" to="/">Home</NavLink>
                    <NavLink className="text-white text-decoration-none" to="/product">Store</NavLink>
                    <NavLink className="text-white text-decoration-none" to="/blogs">Blogs</NavLink>
                    <NavLink className="text-white text-decoration-none" to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
