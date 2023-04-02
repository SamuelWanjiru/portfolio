import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className='experience__dataanalysis'>
          <h3>Data Science - Machine Learning & AI</h3>
          <div className='experience__content'>
            <article className='experience__details'> 
            <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'> 
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>R</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'> 
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>Excel</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'> 
              <BsPatchCheckFill className='experience__detail-icon'/>
                <div>
                <h4>Power BI</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience__details'> 
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>SQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'> 
            <BsPatchCheckFill className='experience__detail-icon'/>
            <div>
            <h4>GIS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          
          </div>
        </div>
        <div className='experience__machinelearning'>
          <h3>Front-end development</h3>
          <div className='experience__content'>

          <article className='experience__details'> 
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>Java Script</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'> 
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'> 
              <BsPatchCheckFill className='experience__detail-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'> 
              <BsPatchCheckFill className='experience__detail-icon'/>
                <div>
                <h4>Python-Flask</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            
          </div>
          
          </div>
      </div>
    </section>
  )
}

export default Experience