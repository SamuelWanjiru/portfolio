import React from 'react'
import './About.css'
import SAM from '../../Assets/SAM.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={SAM} alt='me' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about_card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about__icon'/>
              <h5>Teams</h5>
              <small>5+ Worldwide</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>6+ Completed </small>
            </article>
          </div>
          <p>
          I am a well-organized and skilled data science professional with 
          experience in gathering, mining, cleaning, analyzing, modeling 
          data, creating machine learning algorithms and using predictive 
          data modeling techniques to deliver unique insights and actionable 
          solutions to complex business problems, thereby ensuring effective 
          business outcomes. Exceptionally adept at applying exploratory data 
          analysis and statistical analysis to identify opportunities for 
          leveraging data to drive business solutions. Looking to leverage my 
          knowledge and experience into a role as a Data Scientist – Machine Learning and AI.
          </p>
          <a href='#contact' className='btn btn-primary'> Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About