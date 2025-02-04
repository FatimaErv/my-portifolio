import React from 'react'
import './Contacts.css'
import { FaEnvelope, FaTelegramPlane, FaPhone, FaInstagram} from "react-icons/fa";

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
        <a href="mailto:fatergesh@gmail.com">fatergesh@gmail.com</a>
      </div>
      
      <div className="contact-card">
        <FaTelegramPlane className="icon-contact telegram" />
        <h3>Telegram</h3>

        <div className='small'>
        <a href="https://t.me/fat1lm" target="_blank" rel="noopener noreferrer">
          t.me/fat1lm
        </a>
        </div>
      
      </div>

      <div className="contact-card">
        <FaPhone className="icon-contact phone" />
        <h3>Phone</h3>
        <a href="tel:+996999027278">+996 999 02-72-78</a>
      </div>

      <div className="contact-card">
        <FaInstagram className="icon-contact instagram" />
        <h3>Instagram</h3>
        <div className='small'>
        <a href="https://instagram.com/fat1lm_" target="_blank" rel="noopener noreferrer">
              @fat1lm_
        </a>
        </div>
        
      </div>
      
    </div>
      </div>
    </div>
  )
}

export default Contacts
