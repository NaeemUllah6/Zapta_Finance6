import React from 'react'
export default function Navigation() {
  return (
       <div className='bg' style={{backgroundImage:'url(./images/Hero.jpg)'}}>
  <div className='container'>
  <div className="navbar">
  {/* <!-- Logo --> */}
  <a href="#" className="logo">
    <img src="./images/Logo.png"></img>
  </a>

  {/* <!-- Navigation Links --> */}
  <div className="nav-links">
    <a className='text-danger font-weight-bold' href="#">Home</a>
    <a href="#">Features</a>
    <a href="#">Learn</a>
    <a href="#">Security</a>
    <a href="#">How it Works</a>
    <a href="#">Join Waitlist</a>
  </div>
  <a href="" className='btn'>Download App</a>
  </div>
  <div className='row'>
      <div className='col-6'>
        <div className='text-white header-heading'>Go Bankless!</div>
        <div className='text-white header-sub'>Embrace the future of money and finance without <br></br> intermediaries</div>
      </div>
      <div className='col-6 pt-5 mt-5'>
        <img src="./images/8713059_1-removebg-preview.png" className='img-fluid'>
        </img></div>
      </div>
  </div>
  </div>

  )
}
