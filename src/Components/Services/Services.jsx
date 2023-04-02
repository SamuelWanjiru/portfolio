import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>


        <article className='service'>
          <div className='service__head'>
            <h3>Data Science</h3>
          </div>
          <ul className='service__list'>
            <li> 
            <BiCheck className='service__list-icon'/> 
            <p>Collecting & manipulating datasets</p>
            </li>
            <li> 
            <BiCheck className='service__list-icon'/> 
            <p>Exploratory Data Analysis</p>
            </li>
            <li> 
            <BiCheck className='service__list-icon'/> 
            <p>Developing machine learning algorithms</p>
            </li>
            <li> 
            <BiCheck className='service__list-icon'/> 
            <p>Predictive modeling</p>
            </li>
           
          <li> 
          <BiCheck className='service__list-icon'/> 
          <p>Building & managing databases</p>
          </li>
          <li> 
          <BiCheck className='service__list-icon'/> 
          <p>Client consultancy</p>
          </li>
          </ul>
        </article>

        <article className='service'>
        <div className='service__head'>
          <h3>Software Engineering</h3>
        </div>
        <ul className='service__list'>
         
          <li> 
          <BiCheck className='service__list-icon'/> 
          <p>Analyzing and modifying existing softwares</p>
          </li>
          <li> 
          <BiCheck className='service__list-icon'/> 
          <p>Designing, constructing and testing end-user applications</p>
          </li>
        </ul>
      </article>
      </div>
    </section>
  )
}

export default Services