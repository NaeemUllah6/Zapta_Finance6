import React from 'react'

export default function Footer() {
  return (
    <div>
      <hr></hr>
      <div className='container'>
        <div className='row'>
            <div className='col-md-4 mt-3'>
                <img className='img-fluid' src='./images/Logo.png'></img>
                <div className='footer-text'>Bringing a billion users on-chain</div>
                <div className='mt-3 footer-text'><span className='fs-5'>Contact Us on:</span><span className='ms-2'>contact@kenafinance.com</span></div>
                <div className=' last-link mt-3'>
            <span className='last-link'><a className='last-link' href="">Home</a></span>
            <span className='last-link ms-2'><a className='last-link' href="">feature</a></span>
            <span className='last-link ms-2'><a className='last-link' href="">Learn</a></span>
            <span className='last-link ms-2'><a className='last-link' href="">Security</a></span>
            <span className='last-link ms-2'><a className='last-link' href="">How it Works</a></span>
            <span className='last-link ms-2'><a className='last-link' href="">Joinslist</a></span>
        </div>
            </div>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <div className='text-danger fw-bold mt-3'>Get the App soon</div>
                <div className='mt-3'>
                        <button className='btn btn-dark buy-img mt-2 me-2'><i class="fa-brands fa-google-play"></i> Google Play</button><button className='btn btn-dark mt-2 ps-3 pe-4'><i class="fa-brands fa-apple"></i> App Store</button>
                        </div>
                    <div className=' mt-4 '><i className='fa-brands ml-2 fa-facebook rounded-circle border p-3'></i>
                        <i className='fa-brands ms-2 fa-linkedin rounded-circle border p-3'></i>
                        <i className='fa-brands ms-2 fa-twitter rounded-circle border p-3'></i>
                        <i className='fa-brands ms-2 fa-whatsapp rounded-circle border p-3'></i>
                    </div>
            </div>
        </div>
        <hr className='mt-5'></hr>
        <div className='ms-5 justify-content-between d-flex last-link'>
            2007 Untitled UI All Rights Reserved 
            <span className='last-link ms-5 ps-5'><a className='last-link' href="">Terms and conditions</a></span>
            <span className='last-link'><a className='last-link' href="">Privacy Notice</a></span>
            <span className='last-link'><a className='last-link' href="">Cookies Policy</a></span>
            <span className='last-link'><a className='last-link' href="">Status</a></span>
        </div>
      </div>

    </div>
  )
}
