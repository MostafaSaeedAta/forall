import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './company.scss'
 
const Company = () => {

  const [imgs , setimgs] = useState([]);
  useEffect(()=>{
    axios.get('https://forall.sa/services/api/ads/companies').then((Response)=>{
        console.log(Response.data.data);
        setimgs(Response.data.data);
    }) 
    .catch((error)=>{
      console.log(error);
    })
  },[]) 
  
  return (
    <div className='company'>
      <div className='container'>
  { imgs.map((img) => (
    <div key={img?.id}>
        <div className='company-title'>
          <img src={img?.logo[512 + 'px']} width='100px' height='100px' />
          <h5 className='company-name'>{img?.name.value}</h5>
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

        </div>
      </div>
  ))  
      }
      </div>
    </div>
  )
}

export default Company