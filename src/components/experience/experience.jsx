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
                    <h3>Experiencia y logros</h3>
                    <div className="experience">
                        <article className="experience__details">
                            <CgAdd className="experience__details-iconCgAdd" />
                            <p>Asesoramiento y desarrollo de las rutas y conexión a la base de datos. Cooperé y lideré el diseño estructural de la base de datos, aplicando los principios SOLID y el paradigma POO.</p>
                        </article>
                        <article className="experience__details">
                            <CgAdd className="experience__details-iconCgAdd" />
                            <p>Implementación de middleware en las rutas Backend. Logré la funcionalidad de Cloudinary y Sendgrid, lo que me permite agregar funciones como la carga de imágenes y el envío de correos electrónicos.</p>
                        </article>
                        <article className="experience__details">
                            <CgAdd className="experience__details-iconCgAdd" />
                            <p>Diseño y desarrollo de interfaces web responsive. Tengo sólidos conocimientos en layout.</p>
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