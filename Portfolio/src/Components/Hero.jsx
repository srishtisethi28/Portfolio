import './Hero.css'
import React from 'react'
import introimg from "../assets/d.jpg"
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

function Hero() {

useEffect(() => {
    const content = document.querySelector('.hero .content');
    setTimeout(() => {
        content.classList.add('active'); // Add 'active' class to start transition
    }, 500); // Adjust delay as needed
}, []);

  return (
    <div className='hero'>
        <div className='mask'>
            <img className='introimg' src={introimg} alt="" />
        </div>
        <div className='content'>
            <p>Hii, I am Srishti.</p>
            <h1>Web Developer.</h1>
            <div>
                <Link to="/projects" className='btn'>Projects</Link>
                <Link to="/contact" className='btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero