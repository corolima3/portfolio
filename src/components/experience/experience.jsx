import React from "react";
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs'
import { CgAdd } from "react-icons/cg";

function Experience() {
    return (
        <section id='experience'>
            <h5>Que puedo contar</h5>
            <h2>Habilidades y experiencia</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Experiencia</h3>
                    <div className="experience">
                        <article className="experience__details">
                            <CgAdd  className="experience__details-iconCgAdd" />
                            <p>Desarrollo e implementación de interfaces web responsive utilizando React.js y TypeScript,
                                 creando interacciones con el cliente basadas en las especificaciones de diseño.
                            </p>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Frontend Develop</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>

                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Intermediate</small>

                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Intermediate</small>

                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Intermediate</small>

                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Next js</h4>
                                <small className='text-light'>Basic</small>

                            </div>
                        </article>
                    </div>
                    <h3>Backend Develop</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>PostgresSQL</h4>
                                <small className='text-light'>Experienced</small>

                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Intermediate</small>

                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Mongoose</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article><article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Sequalize</h4>
                                <small className='text-light'>Intermediate</small>

                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>);
}

export default Experience;