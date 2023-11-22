import React from "react";
import './about.css'

import { FaAward } from "react-icons/fa";
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import Me from '../../assets/IMG_20231116_114503.jpg';
import './about.css';

function About() {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="imagen de perfil" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>0.4 Years Working</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>0+ Worldwide</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>4+ Completed</small>
                        </article>
                    </div>
                    <p>"I'm a programmer with a background in International Business; I stumbled upon programming by accident. 
                        I decided to change professions due to the monotony of my previous job. As someone with an inherent passion for work, 
                        I found in coding a means to channel my ambitions. What's admirable about this field is that it doesn't require significant resources to create what one envisions..</p>
                <a href="#contact" className="btn btn-primary">Let's talk</a>
                </div>
            </div>
        </section>);
}

export default About;