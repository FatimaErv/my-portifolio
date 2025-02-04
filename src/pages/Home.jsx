import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import About from '../components/About';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';
import ContactForm from '../components/Form';
import { Link as ScrollLink } from 'react-scroll';


function Home() {

  return (
    <div>
      <div className='home'>
        <h1>Hello, I'm Fatima Tursunali kyzy</h1>
        <p>I'm a passionate and detail-oriented Junior Frontend Developer with a strong enthusiasm for web development and design.</p>
     <ScrollLink to="projects-section" smooth={true} duration={500}>Projects</ScrollLink>
      </div>
      <section id='about-section'>
      <About />
      </section>
      <section id='projects-section'></section>
      <Projects />
      <section id='contacts-section'></section>
      <Contacts />
      <ContactForm />
    </div>
  );
}

export default Home;
