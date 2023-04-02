import React from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Navigation/Nav'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Blog from './Components/Blogs/Blog'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Blog />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />

    </>
  )
}

export default App