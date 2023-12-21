import React from "react";
import CTA from './CTA';
import HeaderSocial from "./HeaderSocial";
import me from '../../assets/development-web.png';
import './header.css';

function Header() {
    return (
        <header id="header">
            <div className="container header__container">
                <h5>Hola, soy</h5>
                <h1>Coro Lima Jose</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img src={me} alt="me" />
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>);
}

export default Header;
/*  import imageMe   */