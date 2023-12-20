import React, {useState} from "react";
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
//import {RiServiceLine} from 'react-icons/ri';
import { SlFolder } from "react-icons/sl";
import {BiMessageSquareDetail} from 'react-icons/bi';
import './nav.css';

function Nav() {

const [activeNav, setActiveNav]= useState('#');

    return (
        <nav className="">
            <a href="#header" onClick={() => setActiveNav('#')} className={activeNav ==='#header' ? 'active':''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ? 'active':''}><AiOutlineUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active':''}><BiBook /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav ==='#portfolio' ? 'active':''}><SlFolder /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active':''}><BiMessageSquareDetail /></a>          
        </nav>);
}

export default Nav;