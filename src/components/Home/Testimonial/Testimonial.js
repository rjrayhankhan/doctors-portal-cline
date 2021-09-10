import React from 'react';
import './Testimonial.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const testimonialData = [
    {
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    },
]

const Testimonial = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>What Our Patients <br /> Says</h1>
                </div>
                <div className="card-deck mt-5 row">
                    {
                        testimonialData.map(testimonial => <TestimonialCard testimonial={testimonial} key={testimonial.name}></TestimonialCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;