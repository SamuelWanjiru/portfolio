import React from 'react'
import './Testimonials.css'
import Team1 from '../../Assets/STRATHMORE.jpg'
import Team2 from '../../Assets/KNBS.jpg'
import Team3 from '../../Assets/NGWA.jpg'
import Team4 from '../../Assets/SCHOLARSHIP.jpg'
import Team5 from '../../Assets/STAKEHOLDERS.jpeg'

// Importing swiper
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// importing swiper styles
import 'swiper/css'
import 'swiper/css/pagination'


/* Generating the avatars dynamically as from an array */

const dataTestimponials = [

  {
    Avatar:Team3,
    Name:'Next Generation water action',
    Review:'Awarded with a certificate of participation in the Next Generation Water Action, Grundfos Challenge 2022 by the Ambassador of Denmark to Kenya, Mr. Ole Thonke at the Royal Danish Embassy, Nairobi, Kenya.'
  },
  {
    Avatar:Team1,
    Name:'Strathmore data week',
    Review:'I was honoured to be invited to the Strathmore Data Science Week. Issues on discussion during the seminars were on the roles of Data Scientists to tackling real-life challenges accross Africa. The seminar also seeked to empower women in data science.'
  },
  {
    Avatar:Team2,
    Name:'Kenya National Bureau of Statistics',
    Review:'Awarded with a trophy and certificate having finished in 2nd position in the 2021 Africa Statistics Day Hackathon on Promoting Data Use, by the Kenya National Bureau of Statistics.'
  },

  {
    Avatar:Team4,
    Name:'Data Science Scholarship',
    Review:'Awarded a scholarship to study Data Science at iLab Africa by Strathmore University.'
  },
  {
    Avatar:Team5,
    Name:'STAKEHOLDER ENGAGEMENT WORKSHOP-Transforming Agriculture In Africa using Climate Data ',
    Review:'Was honoured to join fellow data science professionals and stakeholders from iLab Africa, TAHMO and the Kenya Meteorological Depertment. On the agenda was how weather-based applications can benefit agriculture, energy, water and emergency management.'
  }


]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review</h5>
      <h2>Awards and Seminars</h2>

      <Swiper className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}
      >
        {
          dataTestimponials.map(({Avatar, Name, Review}, index) => {
            return(
              <SwiperSlide key={index} className='testinmonial'>
                <div className='avatar'>
                  <img src={Avatar}  alt=''/>
                </div>
                <h5 className='name'>{Name}</h5>
                <small className='review'>{Review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials