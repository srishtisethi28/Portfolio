import './Footer.css'
import React from 'react'
import {FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa'
function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                    <div>
                        <p>131 Housing Board Colony, Sirsa, </p>
                        <p>Haryana</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                    72060-32634</h4>
                </div>
                <div className='mail'>
                    <h4><FaMailBulk size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                    srishtisethi31@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia esse distinctio! Consectetur, doloremque ab.</p>
                <div className='social'>
                    <FaLinkedin size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                    <FaGithub size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                    <FaInstagram size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer