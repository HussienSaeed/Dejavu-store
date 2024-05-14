import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';


const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation()
  return (
    <>
      <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-md-3"}`}>
        <Link to={`${location.pathname == "/"
          ? "/product/:id"
          : location.pathname == "/product/:id"
            ? "/product/:id"
            : ":id"}`}
          className="product-card position-relative text-decoration-none">
          <div className="wishlist-icon position-absolute">
            <button className='border-0 bg-transparent'>
              <img src="images/wish.svg" alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className='img-fluid' alt="product image" />
            <img src="images/watch-1.jpg" className='img-fluid' alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit="false"
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptatibus laudantium esse sapiente tempora ab repudiandae qui. Cum repellendus ipsam aperiam quisquam dolores beatae sapiente ullam numquam nisi, sunt impedit?</p>

            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="addcart" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>

            </div>
          </div>
        </Link>
      </div>
      <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-md-3"}`}>
        <Link to={`${location.pathname == "/"
          ? "/product/:id"
          : location.pathname == "/product/:id"
            ? "/product/:id"
            : ":id"}`} className="product-card position-relative text-decoration-none">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className='img-fluid' alt="product image" />
            <img src="images/watch-1.jpg" className='img-fluid' alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit="false"
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptatibus laudantium esse sapiente tempora ab repudiandae qui. Cum repellendus ipsam aperiam quisquam dolores beatae sapiente ullam numquam nisi, sunt impedit?</p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className='border-0 bg-transparent'>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src="images/view.svg" alt="addcart" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src="images/add-cart.svg" alt="addcart" />
              </button>

            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProductCard
