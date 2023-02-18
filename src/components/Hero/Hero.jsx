import React from 'react'
import './hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
    <div className='container'>
            <div className='row m-0 py-3'>
                <div className='col-md-6 txt'>
                    <div className='txt-body'>
                        <h3 className='title mb-3'>We Fill Your Gap</h3>
                        <p className='para mb-3'>
                            We are ready to bring you all your needs anywhere 
                            at any time through our useful mobile application.
                            No need to waste time you are one click away.
                        </p>
                        <button> Install Now </button>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='img-right'>
                        <img src='hero.png' height='400px' alt='hero'/>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero