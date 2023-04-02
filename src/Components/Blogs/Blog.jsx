import React from 'react'
import './Blog.css'
import Blog1 from '../../Assets/BLOG1.jpg'

// Importing swiper
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// importing swiper styles
import 'swiper/css'
import 'swiper/css/pagination'


const dataBlog = [
    {
       Avatar:Blog1,
       Name:'Next Generation Water Action - Grundfos challenge',
       Url:'#'
    }
    
]

const Blog = () => {
  return (
    <section id='blog'>
        <h5>Blog review</h5>
        <h2>My Blogs</h2>

        <Swiper className='container blog__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}
      >
      
      {
        dataBlog.map(({Avatar, Name, Url}, index) => {
          return(
            <SwiperSlide key={index} className='blog__item'>
            <div className='blog__item-image'>
                <img src={Avatar} alt="NGWA" />
            </div>
            <h3>{Name}</h3>
            <div className='blog__item-cta'>
                <a href={Url} className='btn btn-primary' target='_blank'>Blog Post</a> 
            </div>
            </SwiperSlide>
          )
        })
      }
      
      </Swiper>
    </section>
  )
}

export default Blog