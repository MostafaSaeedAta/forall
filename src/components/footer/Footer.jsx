import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <footer className=' mt-5'>
       <div className='container position-relative z-index-1  d-flex justify-content-between align-items-center'>
        <div className='left'>
        <h4 className=' text-white'>About Us</h4>
          <div className="menu mb-3">
            <a href="/">Our History  </a>
            <a href="/">  How we Work </a>
            <a href="/">  Resources</a>
          </div>
          <div className='d-flex justify-content-center' >
            <img src="play.png" width=' 130px' height=' 50px' alt="logo" />
            <img src="app.png" width=' 130px' height=' 50px' alt="logo" />

          </div>
        </div>
       
       
       
            <div className="right">
              <h4 className='text-white mb-2'> <i className="fa-solid fa-location-dot"></i> Saudi Arabia </h4>
              <p className='text-white mb-2'>Jeddah, Sultan St., Lilyan Tower 2, 11th Floor</p>
              <div className='d-flex justify-content-between text-white gap-3'>
                <p> <strong>Email</strong> : hello@forall.com</p>
                <p> <strong>Office</strong> : +00 123 456 789</p>
              </div>
            </div>
           
           
       </div>
        <div className="logo">
          <a href="/">
              <img src="logo.png"   alt="logo" />
          </a>
          </div>
        <div className="btm-shape d-none">
            <img src="footer.png"   alt="logo" />
        </div>

    </footer>
  )
}

export default Footer