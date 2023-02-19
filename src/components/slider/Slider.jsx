 import  { React, useEffect, useState } from 'react'
 import './slider.scss'
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';




 const Sliderr = () => {
  const [page,setPage]=useState(1);
  const [posts , setPosts] = useState([]);
  const [response,setResponse]=useState([]);
  useEffect(()=>{
    axios.get(`https://forall.sa/services/api/ads/companies?page=${page}&&page_count=3`).then((Response)=>{
        setResponse(Response.data);
        console.log(Response.data.data);
        setPosts(Response.data.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[page]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
// console.log(response);
   return (
  <div className='slider my-5'>
      <h3 className='text-center title mb-4'>Our Providers</h3>

       <Slider {...settings}>

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
        <div className='slide-btns'>
          {page>1 && <button className='prev-btn' type='btn' onClick={()=>setPage(page-1)}> <i class="fa-solid fa-caret-left"></i> </button>}
          {response?.pagination?.meta?.pages >page && <button className='next-btn' type='btn' onClick={()=>setPage(page+1)}> <i class="fa-solid fa-caret-right"></i> </button>}
        </div>

  </div>
   )
 }
 
 export default Sliderr