import React from 'react'
import "./About.css"

import html from "../assets/svg/html.svg"
import css from "../assets/svg/css.svg"
import js from "../assets/svg/js.svg"
import react from "../assets/svg/react.svg"
import git from '../assets/image/gitt.webp'
import ts from '../assets/image/ts.png'
import scss from '../assets/image/scss.svg'
import { Link as ScrollLink } from 'react-scroll';

function About() {
  return (
    <div className='about'>
     <div className='me'>
      <h3>About Me</h3>
      <div className='dash'></div>
      <p>I am Fatima Tursunali kyzy, a Frontend Developer. I was born in Osh, Kyrgyzstan.
      I'm a passionate and detail-oriented Frontend Developer with a strong enthusiasm for web development and design. I enjoy building modern, user-friendly, and visually appealing web applications, ensuring a smooth and interactive user experience.
      <br />
      <br />
      I am always open to new challenges and opportunities where I can grow as a frontend developer and contribute my skills to meaningful projects. If you are looking for someone dedicated, creative, and eager to learn, feel free to reach out! 🚀
      </p>
      <br />
     

      <a href="/contacts">
      <ScrollLink to="contacts-section" smooth={true} duration={500}>Contacts</ScrollLink>
      </a>
      
      <div className='tools'>
        <h3>My Skills</h3>
        <div className='dash'></div>
        <div className='tools-img'>

        <div className='tools-icons'>
            <img src={html} alt="html" />
          </div>
          <div className='tools-icons'>
            <img src={css} alt="CSS" />
          </div>
          <div className='tools-icons'>
            <img src={js} alt="JS" />
          </div>
          <div className='tools-icons'>
            <img src={react} alt="REACT" />
          </div>
        
          <div className='tools-icon'>
            <img src={git} alt="GITHUB" />
          </div>

          <div className='tools-icon'>
            <img src={ts} alt="TS" />
          </div>
          <div className='tools-icon'>
            <img src={scss} alt="SCSS" />
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default About
