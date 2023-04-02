import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {VscProject} from 'react-icons/vsc'
import {TbMessage} from 'react-icons/tb'
import {AiOutlineComment} from 'react-icons/ai'
import {BiLastPage} from 'react-icons/bi'
import {FaAward} from 'react-icons/fa'
import {ImBlogger2} from 'react-icons/im'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome /> </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser /> </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BiBook /> </a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <VscProject /> </a>
      <a href='#blog' onClick={() => setActiveNav('#blog')} className={activeNav === '#blog' ? 'active' : ''}> <ImBlogger2 /> </a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}> <RiServiceLine /> </a>
      <a href='#testimonials' onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}> <FaAward /> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <TbMessage /> </a>
      <a href='#footer' onClick={() => setActiveNav('#footer')} className={activeNav === '#footer' ? 'active' : ''}><BiLastPage /></a>
    </nav>
  )
}

export default Nav