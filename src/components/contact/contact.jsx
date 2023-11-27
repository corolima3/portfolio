import { useState } from "react";
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import './contact.css';
import validate from './validate.js';

function Contact() {
    const [emailData, setEmailData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [error, setError] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handlerData = (event) => {
        setEmailData({
            ...emailData, [event.target.name]: event.target.value
        });
        setError(validate({ ...emailData, [event.target.name]: event.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //const { name, email, message } = emailData;
        window.Email.send({
            Host: "smtp.elasticemail.com",
            Username: "josecorolima@gmail.com",
            Password: "A84E744FB693D4FF046F081EA70CD824385F",
            To: 'josecorolima@gmail.com',
            From: 'josecorolima@gmail.com',
            Subject: `Message from ${emailData.name}`,
            Body: `<h2>This is a message of portfolio.</h2>
                <p>${emailData.email}</p>
                <p>${emailData.message}</p>`
        }).then(
            message => alert(message)
        );
        setEmailData({
            name: '',
            email: '',
            message: '',
        })
    }

    return (
        <section id='contact' className="px600">
            <h5>Get in out</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>email</h4>
                        <h5>josecorolima@gmail.com</h5>
                        <a href="mailto:@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>messenger</h4>
                        <h5>corolima jose</h5>
                        <a href="https://m.me/corolimajose" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>whatsapp</h4>
                        <h5>+549 11 6652-7064</h5>
                        <a href="https://wa.me/5491166527064" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name={"name"} value={emailData.name} onChange={handlerData} placeholder="Your full name" required />
                    {error.name && <p>{error.name}</p>}
                    <input type="email" name={"email"} value={emailData.email} onChange={handlerData} placeholder="Your email" required />
                    {error.email && <p>{error.email}</p>}
                    <textarea value={emailData.message} name={"message"} rows="7" onChange={handlerData} placeholder="Your message" required></textarea>
                    {error.message && <p>{error.message}</p>}
                    <button type='submit' className="btn btn-primary">Sent Message</button>
                </form>
            </div>
        </section>);
}

export default Contact;