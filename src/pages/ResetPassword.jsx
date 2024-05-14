import React from 'react'
import { Meta } from '../components/Meta'
import { BreadCrumb } from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const ResetPassword = () => {
  return (
    <>
    <Meta title={"Reset Password"}/>
    <BreadCrumb title='Reset Password'/>
      <Container class1="login-wrapper home-wrapper py-5">
    <div className="row">
    <div className="col-12">
    <div className="login-card">
              <h3 className='text-center mb-3'>Reset Your Password</h3>
              <form action="" className='d-flex flex-column gap-15'>
                <CustomInput type="password" name='password' placeholder='Password' />
                <CustomInput type="password" name='password' placeholder='Confirm password' />
                 <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                  <button type='submit' className='button border-0 '>Reset</button>
                 </div>
              </form>
    </div>
    </div>
    </div>
    </Container>
    </>
  )
}

export default ResetPassword
