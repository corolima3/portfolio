import React from "react";
import './testimonials.css';
import avt1 from '../../assets/avatar1.jpg'
import avt2 from '../../assets/avatar2.jpg'
import avt3 from '../../assets/avatar3.jpg'

function Testimonials() {
    return (
        <section id='testimonial'>
            <h5>Review from clients</h5>
            <h2>testimonial</h2>
            <div className="container testimonials_container"></div>
            <article className="testimonial">
                <div className="client__avatar">
                    <img src={avt1} alt="avatar one" />
                </div>
                <h5 className="client__name">ernest</h5>
                <small className="client__review">Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit. Vero provident aut</small>
            </article>
            <article className="testimonial">
                <div className="client__avatar">
                    <img src={avt2} alt="avatar one" />
                </div>
                <h5 className="client__name">ernest</h5>
                <small className="client__review">Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit. Vero provident aut</small>
            </article>
            <article className="testimonial">
                <div className="client__avatar">
                    <img src={avt3} alt="avatar one" />
                </div>
                <h5 className="client__name">ernest</h5>
                <small className="client__review">Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit. Vero provident aut</small>
            </article>
        </section>);
}

export default Testimonials;