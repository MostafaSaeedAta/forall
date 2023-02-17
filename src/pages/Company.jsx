import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './company.scss'
import { Link, useLocation } from 'react-router-dom';

 
const Company = () => {
 
 

   const location = useLocation()
   const post = location.state;
   console.log(post.post.id);
  return (
    <div className='company'>
      <div className='container'>
 
    <div key={post.post.id}>
        <div className='company-title'>
          <img src={post.post.logo[512 + 'px']} width='100px' height='100px' />
          <h5 className='company-name'>{post.post.name.value}</h5>
          <p className='company-co'> Work Hard - Have Fun - Make History </p>
        </div>

        <div className='row py-4 my-4'>
        
          <div className='col-md-6 mb-2'>
            <div className='txt'>
              <h4 className='title'>Overview</h4>
              <p className='co-para'>
                Our Leadership Principles aren't 
                just a pretty inspirational wall hanging. 
                These Principles work hard, just like we do. 
                Amazonians use them, every day, whether they're 
                discussing ideas for new projects, deciding 
                on the best solution for a customer's problem
                , or interviewing candidates. It's just one 
                the things that makes Amazon peculiar.
               </p>
            </div>
          </div>


          <div className='col-md-6 mb-2 d-flex justify-content-end'>
            <div className='txt'>
              <h4 className='title'>Features and Benefits </h4>
              <p className='co-para'>
              We aim to be Earth’s most customer centric company.
               Our mission is to continually raise the bar of the
                customer experience by using the internet and
                 technology to help consumers find, discover 
                 and buy anything, and empower businesses and 
                 content creators to maximize their success.
               </p>
            </div>
          </div>

        </div>
        
      </div>

    
      </div>
    </div>
  )
}

export default Company