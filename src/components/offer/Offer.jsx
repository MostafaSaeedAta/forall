import React from 'react'
import './offer.scss'

const Offer = () => {
  return (
    <div className='offer'>
    <div className='container'>
            <div className='row m-0 py-3'>
              
                <div className='col-md-6'>
                    <div className='img-right'>
                        <img src='offer.png' height='350px' alt='hero'/>
                    </div>
                </div>

                <div className='col-md-6 txt'>
                    <div className='txt-body'>
                        <h3 className='title mb-3'>What We Offer</h3>
                        <p className='para mb-3'>
                            We Offer you different kinds of services 
                            that will help you save your time
                            and be more comfortable. 
                        </p>
                        <button> Our Services </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Offer