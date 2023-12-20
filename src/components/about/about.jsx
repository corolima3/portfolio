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
                            <small>0.4 Years Working</small>
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
                    <p>Soy graduado en Licenciatura en Comercio Internacional. También desarrollador full stack.
                        <br/>
                        <br/>
                        Decidí realizar un cambio de profesión debido a la monotonía de mi trabajo previo. Como una persona con pasión al trabajo, encontré en la programación,
                         el medio para canalizar mis ambiciones. Lo admirable en esta área, es que uno no requiere grandes recursos, para crear lo que uno imagina...
                         <br/>
                        Tengo un conocimeiento intermedio en stack MERN y PERN. En node js y React son avanzados.
                        <br/>
                        Actualmente me encuentro aprendiendo PHP.
                        <br/>
                        Antes de cerrar quisiera enfatizar, que son mis ambiciones, las que cada día me coaccionan a superar me.  </p>
                    <a href="#contact" className="btn btn-primary">Contáctame</a>
                </div>
            </div>
        </section>);
}

export default About;