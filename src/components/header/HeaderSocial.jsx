import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import './header.css';

function HeaderSocial() {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/jose-coro-lima-a1094b14b/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/corolima3" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://dribbble.com/corolima" target="_blank" rel="noreferrer"> <FiDribbble /></a>
        </div>
    );
}

export default HeaderSocial;