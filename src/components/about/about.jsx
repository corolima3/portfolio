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
            <h5>Conozca</h5>
            <h2>Acerca de Mi</h2>
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
                            <h5>Experiencia</h5>
                            <small>0.8 Years Working</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clientes</h5>
                            <small>0+ Worldwide</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Proyectos</h5>
                            <small>4+ Completado</small>
                        </article>
                    </div>
                    <p>Soy graduado en Licenciatura en Comercio Internacional. También soy desarrollador full stack.
                        <br/>
                        <br/>
                        "Yo tengo ambiciones, no me quedo quieto".
                        <br/>
                        <br/>
                        Decidí realizar un cambio de profesión debido a la monotonía de mi trabajo previo. Como una persona con pasión por el trabajo, encontré en la programación,
                         el medio para canalizar mis ambiciones. Lo admirable de esta área es que uno no requiere grandes recursos para crear lo que uno imagina...
                         <br/>
                         <br/>
                        Tengo conocimiento intermedio en stack MERN y PERN. En node js y React son avanzados.
                        <br/>
                        <br/>
                        Actualmente me encuentro aprendiendo C#.
                         </p>

                    <a href="#contact" className="btn btn-primary">Contáctame</a>
                </div>
            </div>
        </section>);
}

export default About;