import React, { useState } from 'react';

function ImageChanger() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = ["./images/Body.png", "./images/Learning UI.png", "./images/Body.png", "./images/Body.png./images/Learning UI.png", "./images/Body.png", "./images/Learning UI.png"];

    const changeImage = (step) => {
        const newIndex = (currentImageIndex + step + images.length) % images.length;
        setCurrentImageIndex(newIndex);
    }

    return (
        <div>
           <div className='blockchain-heading text-center'>Get Started with <snap className="text-danger">Kena App</snap></div>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8'>
              <div>
              <div className='text-danger kena-1 ms-2'>Step 1</div>
                <div className='kena-2'>Download App</div>
                <button  className='btn btn-outline-danger rounded-circle btn-lg' onClick={() => changeImage(-1)}><i className='fa fa-chevron-left mt-2'></i></button>
                <button className='btn btn-outline-danger rounded-circle btn-lg ms-3' onClick={() => changeImage(1)}><i className='fa fa-chevron-right mt-2'></i></button>
              </div>
              </div>
              <div className='col-md-4 mt-5'><img className='img-fluid' src={images[currentImageIndex]} alt="Current Image" /></div>
            </div>
          </div>
        </div>
    );
}

export default ImageChanger;
