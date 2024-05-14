import React from 'react'
import { Meta } from '../components/Meta'
import { BreadCrumb } from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const LogIn = () => {
  return (
    <>
    <Meta title={"Log In"}/>
    <BreadCrumb title='Log In'/> 
    
    <Container class1="login-wrapper home-wrapper py-5">
    <div className="row">
    <div className="col-12">
    <div className="login-card">
    <h3 className='text-center mb-3'>LogIn</h3>
              <form action="" className='d-flex flex-column gap-15'>
                <CustomInput type="email" name='email' placeholder='E-mail' />
                <CustomInput type="password" name='password' placeholder='Password' />
  
   
    <Link to='/forgot-password' className='text-decoration-none'>Forgot Password ?</Link>
    <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
    <button type='submit' className='button border-0 login'>Login</button>
    <Link to='/signup' className='button signup'>SignUp</Link>

    </div>
    </form>
    </div>
    
    </div>
    </div>
      </Container>
    
    
    
    </>
  )
}

export default LogIn
