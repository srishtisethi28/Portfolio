import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero2 from '../Components/Hero2'
import About_content from '../Components/About_content'
function About() {
  return (
    <div>
      <Navbar/>
      <Hero2 heading="About Me" text="I am a Front-End Web Developer"/>
      <About_content/>
      <Footer/>

    </div>
  )
}

export default About