 import  { React, useEffect, useState } from 'react'
 import './slider.scss'
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';




 const Sliderr = () => {

  const [posts , setPosts] = useState([]);
  useEffect(()=>{
    axios.get('https://forall.sa/services/api/ads/companies').then((Response)=>{
        console.log(Response.data.data);
        setPosts(Response.data.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[]) 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

   return (
  <div className='slider my-5'>
      <h3 className='text-center title mb-4'>Our Providers</h3>
      <Slider {...settings}>

   

        <div className='d-flex align-items-center justify-content-center'>
          <div className='slide'>
            <img src='/src/assets/company.png' className='mb-3' width='100px' height='100px'/>
            <p className='fw-bold'>Amazon</p>
          </div>
        </div> 


       

      { posts.map((post) => (
         
              <div  key={post.id} className='d-flex align-items-center justify-content-center'>
                <Link className='slider-link'  to={`/company/${post.id}`} state={{post:post}}>
                  <div className='slide'>
                    <img src={post.logo[128+'px']} className='mb-3 img-co' width='100px' height='100px'/>
                    <p className='fw-bold'>{post.name.value}</p>
                  </div>
                </Link>
              
              </div> 
          
        ))  
      }
      </Slider>
      
     
  </div>
   )
 }
 
 export default Sliderr