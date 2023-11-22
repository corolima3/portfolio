import React from "react";
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaTelegram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
    return (
        <footer id='footer'>
            <ul className="permalinks">
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebookF className="social-icon" /></a>
                <a href="https://m.me/corolimajose"><FaTelegram className="social-icon" /></a>
                <a href="https://x.com/corolima3?t=wF7a_AkQvYDS7g8SZqbxtg&s=09"><MdOutlineMailOutline className="social-icon" /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy;CORO LIMA Jose. All rights reserved</small>
            </div>
        </footer>);
}

export default Footer;
//<li><a href="#testimonials">testimonials</a></li>