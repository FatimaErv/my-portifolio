import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Forms.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false); // 🟢 Form жиберилип жатабы?

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return; // 🛑 Эгер мурун жиберилип жатса, кайра иштебесин.

        setIsSubmitting(true); // 🟢 Дароо кнопканы блоктоо
        
        try {
            const response = await emailjs.send(
                "service_p3rucjf",  
                "template_osmbojs",  
                formData,
                "Gq4XSI3HZvozpsfqY"   
            );

            toast.success("Сообщение успешно отправлено!", { position: "top-right" });

            // ✅ Форма талааларын тазалоо
            setFormData({
                name: "",
                email: "",
                message: "",
            });

        } catch (error) {
            toast.error(" Ошибка при отправке сообщения!", { position: "top-right" });
            console.error("Ошибка при отправке email:", error);
        } finally {
            setIsSubmitting(false); // ✅ Жөнөтүү бүткөндөн кийин кнопканы кайра активдүү кылуу
        }
    };

    return (
        <div className="forma">
            <ToastContainer /> {/* 🟢 Toastify контейнер */}
            <div className="forms">
                <h3>Send Message</h3>
                <div className="dash5"></div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="input-display">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="message-display">
                    <textarea 
                        name="message" 
                        placeholder="Message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required
                    ></textarea>
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Отправка..." : "Send"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
