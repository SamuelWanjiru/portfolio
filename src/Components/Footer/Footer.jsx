import React from 'react'
import './Footer.css'

// socials icons
import {BsLinkedin} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    
    
    <footer id='footer'>
      <a href='#' className='footer__logo'> Samuel Muriithi Wanjiru </a>

      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Projects</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contacts</a></li>
        <li><a href='#blog'>Blogs</a></li>
      </ul>
  
      <div className='footer__socials'>
      <a href='#' target='_blank'> <BsLinkedin /></a>
      <a href='#' target='_blank'> <FaGithub /></a>
      <a href='#' target='_blank'> <FaFacebook /></a>
      <a href='#' target='_blank'> <BsTwitter /></a>
      <a href='#' target='_blank'> <FiInstagram /></a>
      </div>

      <div className='footer__copyright'>
        <small> &copy; 2022 <a href='#'>SMW.</a> All rights reserved.</small>
      </div>
    </footer>
    
  )
}

export default Footer