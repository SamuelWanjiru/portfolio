import React, { useRef } from 'react';
import './Contact.css'

// Icons
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

// Email js
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();




  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
      {/* Contact options */}
        <div className='contact__options'>
        {/* Email */}
          <article className='contact__option'>
            <MdOutlineEmail className='contatct__option-iconemail'/>
            <h4>
            <a href='#' target='_blank'>Send a message</a></h4>
          </article>

          {/* WhatsApp */}


          <article className='contact__option'>
            <BsWhatsapp className='contatct__option-iconwhatsapp'/>
            <h4>
            <a href='#' target='_blank'>Hi! lets chat</a></h4>
          </article>
        </div>

      {/* Contact form */}
      <form ref={form}>
        <input type='text' name='name' placeholder='Your Full Name' required/>
        <input type='email' name='email' placeholder='Your Email' required/>
        <textarea name='message' rows='7' placeholder='Your Message' required/>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>

      </div>
    </section>
  )
}

export default Contact