import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import Skills from '../Components/Skills'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default Home