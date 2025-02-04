import React from 'react'
import "./Header.css"

import { NavLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';



function Header() {
  return (
    <div>
      <div className='header'> 
        <div className='logo'>
           <h2>Fatima.</h2>
            <p>Erv</p>
           
        </div>
        <nav>
          <ul className="menu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><ScrollLink to="about-section" smooth={true} duration={500}>About me</ScrollLink></li>
        <li><ScrollLink to="projects-section" smooth={true} duration={500}>Projects</ScrollLink></li>
        <li><ScrollLink to="contacts-section" smooth={true} duration={500}>Contacts</ScrollLink></li>
      </ul>

        </nav>
      </div>
    </div>
  )
}

export default Header
