import React, { useState } from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { testimonials } from '../data';
import Card from '../UI/Card';
import ProgramHead from './ProgramHead';

const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const { name, quote, avatar, job } = testimonials[index];

    const prevTestimonial = () => {
        setIndex(prev => prev - 1)
        if (index <= 0) {
            setIndex(testimonials.length - 1)
        }
    }

    const nextTestimonial = () => {
        setIndex(prev => prev + 1)
        if (index >= testimonials.length - 1) {
            setIndex(0)
        }
    }


    return (
        <section className="testimonials">
            <div className="container testimonials-container">
                <ProgramHead icon={<ImQuotesLeft />} title='Testimonials' className='testimonials-head' />
                <Card className="testimonial">
                    <div className="testimonial-avatar">
                        <img src={avatar} alt={name} />
                    </div>
                    <p className="testimonial-quote">{`"${quote}"`}</p>
                    <h5>{name}</h5>
                    <small className="testimonial-title">{job}</small>
                </Card>
                <div className="testimonial-btn-container">
                    <button className="testimonials-btn" onClick={prevTestimonial}> <IoIosArrowDropleftCircle /> </button>
                    <button className="testimonials-btn" onClick={nextTestimonial}> <IoIosArrowDroprightCircle /> </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;