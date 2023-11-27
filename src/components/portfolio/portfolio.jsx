import React from "react";
import './portfolio.css';
import img1 from '../../assets/Captura de pantalla 2023-11-15 232722.png'
import img2 from '../../assets/Captura de pantalla 2023-11-20 153753.png'
import img3 from '../../assets/Captura de pantalla 2023-11-20 161958.png'
import img4 from '../../assets/Captura de pantalla 2023-11-20 164047.png'
//import img5 from '../../assets/portfolio5.png'
//import img6 from '../../assets/portfolio6.jpg'

function Portfolio() {
    return (
        <section id='portfolio' className="px600">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio__container'>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img1} alt='work1' />
                    </div>
                    <h3>App rick and morty</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/corolima3/Rick-and-Morty" rel="noreferrer" className="btn">Github</a>
                        <a href="https://rick-and-morty-lake-pi.vercel.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>

                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img2} alt='work1' />
                    </div>
                    <h3>App videogames</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/corolima3/front-videogames" className="btn">Github</a>
                        <a href="front-videogames-psi.vercel.app" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>

                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img3} alt='work1' />
                    </div>
                    <h3>E-commmer Hotel eterno</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/alexisleonelx/HotelReservation" className="btn">Github</a>
                        <a href="https://hotel-reservation-14qq.vercel.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>

                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img4} alt='work1' />
                    </div>
                    <h3>App de Pokemon "En desarrollo"</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn">Github</a>
                        <a href="https://dribble.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>);
}

export default Portfolio;