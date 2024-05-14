import React from 'react'
import { Meta } from '../components/Meta'
import { BreadCrumb } from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'


const ForgotPassword = () => {
  return (
    <>
    <Meta title={"Forgot Password "}/>
    <BreadCrumb title='Forgot Password'/> 
    
    <Container class1="login-wrapper home-wrapper py-5">
    <div className="row">
    <div className="col-12">
    <div className="login-card">
              <h3 className='text-center mb-3'>Forgot Password</h3>
    <p className="text-center mt-2 mb-3">We will send you an email to reset your password </p>
              <form action="" className='d-flex flex-column gap-15'>
                <CustomInput type="email" name='email' placeholder='Enter your e-mail' />
  
   
    <div className="d-flex flex-column align-items-center gap-15 mt-3">
                  <Link to="/reset-password" className='button border-0' >Send E-mail</Link>
                  <Link to='/login' className='button bg-white text-dark '>Cancel</Link>
    </div>
    </form>
    </div>
    
    </div>
    </div>
      </Container>
    
    </>
  )
}

export default ForgotPassword
