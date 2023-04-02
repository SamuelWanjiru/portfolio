import React from 'react'
import './Header.css'
import Action from './Action'
import SAM from '../../Assets/SAM.JPG'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <section className='container header__container'>
          <h5> Hello I'm </h5>
          <h1> Samuel Wanjiru </h1>
          <h4 className='text-light'> Data Scientist </h4>
          <Action />
          <HeaderSocials/>

          <div className='sam'>
            <img src={SAM} alt='SAM'/>
          </div>

          <a href='#contact' className='scroll__down'> Scroll Down </a>

          
        </section>
    </header>
  )
}

export default Header