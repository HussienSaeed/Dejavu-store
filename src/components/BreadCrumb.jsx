import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export const BreadCrumb = (props) => {
  const location = useLocation()
  let currentLink = ''
  let crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink = + `/${crumb}`
      
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
  })
    const {title}= props
  return (
    <div className='breadcrumb mb-0 py-4'>
    <div className="container-xxl">
    <div className="row">
    <div className="col-12">
    <p className='text-center mb-0'><Link to="/" className='text-dark text-decoration-none'>Home &nbsp;</Link> /&nbsp; {title}</p>
    </div>
    </div>
    </div>
    </div>
  )
}
