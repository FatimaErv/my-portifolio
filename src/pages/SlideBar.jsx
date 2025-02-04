
import React from 'react';
import './SlideBar.css';
import men from "../assets/image/men.jpg"
import { FaEnvelope, FaGithub, FaTelegram, FaPhone } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <div className='image-container'>
        <img src={men} alt="Profile" />
        </div>
        <div>
        <h2>Fatima Tursunali</h2>
        <p>Front-end Devoloper</p>
        </div>
      </div>
      <div className="contacts1">
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <FaEnvelope className="icon" /> fatergesh@gmail.com
        </a>
        <a href="https://github.com/FatimaErv" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" /> github.com/FatimaErv
        </a>
        <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer">
          <FaTelegram className="icon" /> @fat1lm
        </a>
        <a href="tel:+996999027278">
          <FaPhone className="icon" /> +996 999 02-72-78
        </a>
      </div>
    </div>
  );
};

export default Sidebar;