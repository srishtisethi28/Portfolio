import { Link } from 'react-router-dom'
import './Navbar.css';
import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'

function Navbar() {

    const [click,setClicked]=useState(false)
    const handleClick=()=>setClicked(!click)

    const [color,setColor]=useState(false)
    const changeColor=()=>{
        if(window.scrollY>=1){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener("scroll",changeColor)

  return (
    <div className={color?"header header-bg":"header"} >
        <Link to='/'>
            <h1 className='logo'>SrishtiSethi.</h1>
        </Link>

        <ul className={click?"nav-menu active":"nav-menu"}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/projects'>Project</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            
            
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click?(<FaTimes size={20} style={{color:"#fff"}}/>) :(<FaBars size={20} style={{color:"#fff"}}/>)}
        </div>
    </div>
  )
}

export default Navbar