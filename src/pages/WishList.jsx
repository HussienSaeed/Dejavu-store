import React from 'react'
import { Meta } from '../components/Meta'
import { BreadCrumb } from '../components/BreadCrumb'
import Container from '../components/Container'

const WishList = () => {
  return (
    <>
    <Meta title={"Wish List"}/>
    <BreadCrumb title='Wish List'/>
      <Container class1="wishlist-wrapper home-wrapper-2">
    <div className="row">
    <div className="col-3">
    <div className="wishlist-card position-relative">
    <img className='position-absolute img-fluid cross' src="images/cross.svg" alt="cross" />

    <div className="wishlist-card-image"><img src="images/watch.jpg" className='image-fluid w-100' alt="watch" /></div>
    <div className="py-3">
    <h5 className='title'>Honoe T1 7.0 1 GB RAM 8 GB ROM 7 Inch With wi-Fi+3G Tablet</h5>
    <h6 className='price'>$100.00</h6>
    </div>
    </div>
    </div>
    <div className="col-3">
    <div className="wishlist-card position-relative">
    <img className='position-absolute img-fluid cross' src="images/cross.svg" alt="cross" />

    <div className="wishlist-card-image"><img src="images/watch.jpg" className='image-fluid w-100' alt="watch" /></div>
    <div className="py-3">
    <h5 className='title'>Honoe T1 7.0 1 GB RAM 8 GB ROM 7 Inch With wi-Fi+3G Tablet</h5>
    <h6 className='price'>$100.00</h6>
    </div>
    </div>
    </div>
    <div className="col-3">
    <div className="wishlist-card position-relative">
    <img className='position-absolute img-fluid cross' src="images/cross.svg" alt="cross" />

    <div className="wishlist-card-image"><img src="images/watch.jpg" className='image-fluid w-100' alt="watch" /></div>
    <div className="py-3">
    <h5 className='title'>Honoe T1 7.0 1 GB RAM 8 GB ROM 7 Inch With wi-Fi+3G Tablet</h5>
    <h6 className='price'>$100.00</h6>
    </div>
    </div>
    </div>
    </div>
    
      </Container>
    
    </>
  )
}

export default WishList
