import React from "react";
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import './contact.css';

function Contact() {
    return ( 
    <section id='contact' className="px600">
        <h5>Get in out</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <MdOutlineEmail className="contact__option-icon"/>
                    <h4>email</h4>
                    <h5>josecorolima@gmail.com</h5>
                    <a href="mailto:@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                </article>
                <article className="contact__option">
                    <RiMessengerLine  className="contact__option-icon"/>
                    <h4>messenger</h4>
                    <h5>corolima jose</h5>
                    <a href="https://m.me/corolimajose" target="_blank" rel="noreferrer">Send a message</a>
                </article>
                <article className="contact__option">
                    <BsWhatsapp className="contact__option-icon"/>
                    <h4>whatsapp</h4>
                    <h5>+549 11 6652-7064</h5>
                    <a href="https://wa.me/5491166527064" target="_blank" rel="noreferrer">Send a message</a>
                </article>
            </div>
            <form action="">
                <input type="text" name="name" placeholder="Your full name" required/>
                <input type="email" name="email" placeholder="Your email" required/>
                <textarea name="message" rows="7" placeholder="Your message" required></textarea>
                <button type='submit' className="btn btn-primary">Sent Message</button>
            </form>
        </div>
    </section> );
}

export default Contact;