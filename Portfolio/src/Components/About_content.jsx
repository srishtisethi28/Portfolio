import React from 'react'
import './About-css.css'
import { Link } from 'react-router-dom'
import react1 from '../assets/motivation.jpg'
import react2 from '../assets/cp.webp'
function About_content() {
  return (
    <div className='about'>
        <div className='left'>
            <h1>
                Who Am I?
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <Link to="/contact">
            <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack-top'>
                    <img src={react1} alt="" />
                </div>
                <div className='img-stack-bottom'>
                    <img src={react2} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About_content