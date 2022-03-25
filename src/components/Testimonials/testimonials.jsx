import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/travis-yellow-bg.png'
import AVTR2 from '../../assets/travis-yellow-bg.png'
import AVTR3 from '../../assets/travis-yellow-bg.png'
import AVTR4 from '../../assets/travis-yellow-bg.png'

// import Swiper.JS core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Travis Scott',
    review: '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni magnam alias reiciendis commodi harum sit?"'
  },
  {
    avatar: AVTR2,
    name: 'Travis Scott',
    review: '"Gleb ti krytoi"'
  },
  {
    avatar: AVTR3,
    name: 'Travis Scott',
    review: '"Gleb ti krytoi"'
  },
  {
    avatar: AVTR4,
    name: 'Travis Scott',
    review: '"Lorem"'
  },
]

//dinamical generate testimonials

const testimonials = () => {
  return (
    <section id="testimonials" className='subscription'> 
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true}}>
          {
            data.map(({avatar, name, review}, index) => {
              return(
                <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt='#'/>
                  </div>

                  <h5 className='clients__name'>{name}</h5>
                  <small className="clients__review">{review}</small>
                </SwiperSlide>
              )
            })
          }
      </Swiper>
    </section>
  )
}

export default testimonials
