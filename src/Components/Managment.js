import React from 'react'

export default function Managment() {
  return (
    <div>

      <div className='management-div' >
      <div className='container'>
            <div className='row'>
                <div className='col-lg-3 col-md-3 col-sm-3'> 
                  <div className="parent1">
                    <img className='img-fluid' src="./images/Learning UI.png" alt="Your Image"/>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-3'>
                <div className='text-center'>
            <div className='management-heading'>Digital Asset Management <br></br> on the Go</div>
            <div className='management-text'>
            Download our easy to use mobile app and unlock a world <br></br> of endless possibilities
            </div>
            <div className='mb-5 pb-5 mt-5'>
                        <button className='btn btn-dark me-5'><i className="fa-brands fa-google-play"></i> Coming Soon</button><button className='btn btn-light'><i className="fa-brands fa-apple"></i> Coming Soon</button>
                        </div>
        </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-3'>
                  <div className="parent2 second-img">
                    <img className='img-fluid' src="./images/Learning UI.png" alt="Your Image"/>
                </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
