import React, { useState } from "react";
import emailjs from "emailjs-com";
import './Forms.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_p3rucjf",  
            "template_osmbojs",  
            formData,
            "Gq4XSI3HZvozpsfqY"       
        )
        .then((response) => {
            console.log("Email sent successfully!", response.status, response.text);
            alert("Сообщение отправлено!");
        })
        .catch((err) => console.error("Ошибка при отправке email:", err));
    };

    return (
        <div className="forma">
            <div className="forms">
            <h3>Send Message</h3>
            <div className='dash5'></div>
            </div>

             <form onSubmit={handleSubmit}>
            <div className="input-display">
            <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            </div>
            <div className="message-display">
            <textarea name="message" placeholder="Message" onChange={handleChange} required></textarea>
            </div>
            <button type="submit">Send</button>
        </form>



        </div>
       
    );
};

export default ContactForm;