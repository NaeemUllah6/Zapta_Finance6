import React from 'react'
// import './App.css';

export default function Waitlist() {
  return (
    <div>
      <>
      <div className='container waitlist-main'>
        <div className='row'>
            <div className='col-md-6'>
                <img src="./images/Frame 1597883874.png" className='img-fluid'></img>
            </div>
            <div className='col-md-6'>
          <form action='submit'>
          <div className='waitlist-heading'>
            Join our <span className='text-danger'>Waitlist</span>
          </div>
          <div className='waitlist-subheading'>Be the first to experience the future of crypto with <span className='text-danger'>Kena Finance</span>.Join <br></br> our waitlist now to gain exclusive early access to our platform.</div>
          <div className='row'>
            <div className='col-md-6'>
            <input type='text' placeholder='Name' className='form-control mt-4'/>
            </div>
            <div className='col-md-6 p-0'>
            <div class="container mt-4">
            <select className='form-control' id="countries">
            <option value="India">Select Country <span className='fa fa-chevron-down'><></></span></option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            </select>
            </div>
            </div>
          </div>
          <input type='email' placeholder='Email Address' className='mt-4 form-control'/>
          <a href="#" className="btn btn-danger mt-4">Subscribe</a>
          </form>
        </div>
        </div>
      </div>
      </>
    </div>
  )
}
