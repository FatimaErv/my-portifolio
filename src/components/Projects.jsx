import React from 'react'
import "./Projects.css"
import bath from "../assets/image/bath.jpeg"
import minute from '../assets/image/minutee.png'
import meal from '../assets/image/meal.png'
import animation from '../assets/image/coffee.png'
import online from '../assets/image/online.png'

function Projects() {
  return (
    <div className='projects-my'>
      <div className='my-project'>
      <h3>My Projects</h3>
      <div className='dash3'></div>
      </div>

      <div className='projects-containers'>


      <div className='project'>
          <a href="https://meal-food.vercel.app/">
          <img src={meal} alt="" />
          </a>
          <h5>TheMealDB</h5>
          <p>This project is designed for searching and ordering food.</p>
        </div>


        <div className='project'>
          <a href="https://minute-ten.vercel.app/">
          <img src={minute} alt="" />
          </a>
          <h5>Hours, minutes, seconds</h5>
          <p>“This project calculates hours, minutes, and seconds.”</p>
        </div>

        <div className='project'>
          <a href="https://animations-3604pqcdd-fatimaervs-projects.vercel.app/">
          <img src={animation} alt="" />
          </a>
          <h5>Animations</h5>
          <p>“This project is an animated coffee.”</p>
        </div>

        <div className='project'>
          <a  href="https://online-shop-sand-five.vercel.app/">
          <img src={online} alt="" />
          </a>
          <h5>Online-Shop</h5>
          <p>This project helps to purchase online,</p>
          <p> providing convenience for each individual  </p>
        </div>
        <div className='project'>
          <a href="https://github.com/Asel604/finaly-project">
          <img src={bath} alt="" />
          </a>
          <h5>Bathroom Mebels</h5>
          <p>This project helps to purchase furniture and accessories for bathrooms and showers online.</p>
        </div>

      </div>

      

      <div>
        
      </div>
    </div>
  )
}

export default Projects
