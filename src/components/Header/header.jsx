import React from 'react'
import './header.scss';

const header = () => {
  return (
    <header className='pt-2'>
       <div className='container position-relative z-index-1  d-flex justify-content-between align-items-center'>
            <div className="bar">
                <a href="/">
                    <img src="bars.png" width='33px' height='37px' alt="logo" />
                </a>
            </div>
           
            <div className="menu">
                <a href="/">Our Services</a>
                <a href="/">About Us</a>
                <a href="/">Join Us</a>
                
            </div>
       </div>
       <div className="logo">
        <a href="/">
            <img src="logo.png"   alt="logo" />
        </a>
        </div>
        <div className="btm-shape">
            <img src="Path.png"   alt="logo" />
        </div>

    </header>
  )
}

export default header