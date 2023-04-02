import React from 'react'
import './Portfolio.css'
import Kilimo from '../../Assets/kilimo2.jpg'
import CREDIT from '../../Assets/CREDIT.jpg'
import DIABETES from '../../Assets/DIABETES.png'
import RESOURCE from '../../Assets/RESOURCE.jpg'
import ANN from '../../Assets/ANN.jpg'
import KNN from '../../Assets/KNN2.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Kilimo} alt="Kilimo Erevu" />
          </div>
          <h3>Kilimo Erevu <h5>Mega Smart farming technology</h5> </h3>
          
          <div className='portfolio__item-cta'>
            <a href='#' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>

          <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={CREDIT} alt="Kilimo Erevu" />
          </div>
          <h3>Credit Risk Analysis</h3>
          <div className='portfolio__item-cta'>
            <a href='#' className='btn' target='_blank'>Github</a> {/* put the direct link to project here */}
           
          </div>
          </article>

          <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={DIABETES} alt="Kilimo Erevu" />
          </div>
          <h3>Diabetes Prediction</h3>
          <div className='portfolio__item-cta'>
            <a href='#' className='btn' target='_blank'>Github</a> {/* put the direct link to project here */}
           
          </div>
          </article>

          <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={RESOURCE} alt="Kilimo Erevu" />
          </div>
          <h3>Resource disparities in Marsabit County</h3>
          <div className='portfolio__item-cta'>
            <a href='#' className='btn' target='_blank'>Github</a> {/* put the direct link to project here */}
          
          </div>
          </article>

          <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={ANN} alt="Kilimo Erevu" />
          </div>
          <h3>Artificial Neural Networks</h3>
          <div className='portfolio__item-cta'>
            <a href='#' className='btn' target='_blank'>Github</a> {/* put the direct link to project here */}
           
          </div>
          </article>

          <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={KNN} alt="Kilimo Erevu" />
          </div>
          <h3>K-Nearest Neighbour</h3>
          <div className='portfolio__item-cta'>
            <a href='#' className='btn' target='_blank'>Github</a> {/* put the direct link to project here */}
            
          </div>
          </article>
        
        </div>
    </section>
  )
}

export default Portfolio