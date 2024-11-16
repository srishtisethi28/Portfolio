import './Footer.css'
import React from 'react'
import { Link } from 'react-router-dom'
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
                    <Link to={"https://github.com/srishtisethi28"}>
                    <FaGithub size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                    
                    </Link>
                    <Link to={"https://www.linkedin.com/in/srishti-sethi-46849228a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
                    <FaLinkedin size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                    
                    </Link>
                    <Link to={"https://www.instagram.com/srishtisethi.28"}>
                    <FaInstagram size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                    
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer