import React from 'react'
import { Meta } from '../components/Meta'
import { BreadCrumb } from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const SignUp = () => {
  return (
    <>
    <Meta title={"Sign Up"}/>
    <BreadCrumb title='Sign Up'/> 
      <Container class1="login-wrapper home-wrapper py-5">
    <div className="row">
    <div className="col-12">
    <div className="login-card">
    <h3 className='text-center mb-3'>Sign Up</h3>
              <form action="" className='d-flex flex-column gap-15'>
                <CustomInput type="text" name='name' placeholder='Name'  />
                <CustomInput type="email" name='email' placeholder='E-mail' />
                <CustomInput type="tel" name='mobile' placeholder='Phone Number' />
                <CustomInput type="password" name='password' placeholder='Password'/>
    

 

    <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
    <button type='submit' className='button border-0 '>Create</button>

    </div>
    </form>
    </div>
    
    </div>
    </div>
      </Container>
    
    </>
  )
}

export default SignUp
