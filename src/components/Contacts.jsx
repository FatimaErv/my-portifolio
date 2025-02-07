import React from 'react'
import './Contacts.css'
import { FaEnvelope, FaTelegramPlane, FaPhone, FaInstagram} from "react-icons/fa";
import { Link } from 'react-router-dom';

function Contacts() {
  return (
    <div className='contacts'>
      <div className='contact'>
      <h4>My Contacts</h4>
      <div className='dash4'></div>
      <div className="contact-container">
  

  
 
      <div className="contact-card">
        
        <FaEnvelope className="icon-contact gmail" />
        <h3>E-pochta</h3>
        <Link to="mailto:fatergesh@gmail.com">fatergesh@gmail.com</Link>
      </div>
      
      <div className="contact-card">
        <FaTelegramPlane className="icon-contact telegram" />
        <h3>Telegram</h3>

        <div className='small'>
        <Link to="https://t.me/fat1lm" target="_blank" rel="noopener noreferrer">
          t.me/fat1lm
        </Link>
        </div>
      
      </div>

      <div className="contact-card">
        <FaPhone className="icon-contact phone" />
        <h3>Phone</h3>
        <Link to="tel:+996999027278">+996 999 02-72-78</Link>
      </div>

      <div className="contact-card">
        <FaInstagram className="icon-contact instagram" />
        <h3>Instagram</h3>
        <div className='small'>
        <Link to="https://instagram.com/fat1lm_" target="_blank" rel="noopener noreferrer">
              @fat1lm_
        </Link>
        </div>
        
      </div>
      
    </div>
      </div>
    </div>
  )
}

export default Contacts
