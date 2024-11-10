import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero2 from '../Components/Hero2'
import Form from '../Components/Form'

function Contact() {
  return (
    <div>
      <Navbar/>
      <Hero2  heading="Contact" text="Lets have a chat"/>
      <Form/>
      <Footer/>

    </div>
  )
}

export default Contact