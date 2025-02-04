import React from 'react'
import "./Projects.css"
import bath from "../assets/image/bath.jpeg"
import minute from '../assets/image/minutee.png'
import meal from '../assets/image/meal.png'
import animation from '../assets/image/coffee.png'
import online from '../assets/image/online.png'

import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className='projects-my'>
      <div className='my-project'>
      <h3>My Projects</h3>
      <div className='dash3'></div>
      </div>
      <div className='projects-containers'>
      <Link to="https://meal-food.vercel.app/">
      <div className='project'>
          <img src={meal} alt="" />
          <h5>TheMealDB</h5>
          <p>This project is designed for searching and ordering food.</p>
        </div>
      </Link>
        <Link to="https://minute-ten.vercel.app/">
        <div className='project'>
          <img src={minute} alt="" />
          <h5>Hours, minutes, seconds</h5>
          <p>“This project calculates hours, minutes, and seconds.”</p>
        </div>
        </Link>
         <Link to="https://animations-3604pqcdd-fatimaervs-projects.vercel.app/">
         <div className='project'>
          <img src={animation} alt="Animation" />
          <h5>Animations</h5>
          <p>“This project is an animated coffee.”</p>
        </div>
         </Link>
        <Link to="https://online-shop-sand-five.vercel.app/">
        <div className='project'>
        <img src={online} alt="" />
        <h5>Online-Shop</h5>
        <p>This project helps to purchase online, providing convenience for each individual </p>
       
      </div>
        </Link>
       <Link to="https://github.com/Asel604/finaly-project">
       <div className='project'>
          <img src={bath} alt="" />
          <h5>Bathroom Mebels</h5>
          <p>This project helps to purchase furniture and accessories for bathrooms and showers online.</p>
        </div>
       </Link>
      </div>
      <div>  
      </div>
    </div>
  )
}

export default Projects
