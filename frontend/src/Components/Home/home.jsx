import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './home.css';

const Example = () => {
    const slides = [
        {
            title: 'Job Posting and Seeking System',
            description: 'Connect job seekers with employers and vice versa.',
            image: '/job-posting-slide.jpg',
        },
        {
            title: 'Online Booking System',
            description: 'Book appointments or services online with ease.',
            image: '/online-booking.jpg',
        },
        {
            title: 'Online Consultation Services',
            description: 'Get expert advice in various fields like IT, Law, etc.',
            image: '/consultation.jpeg',
        },
        {
            title: 'Selling and Buying Items',
            description: 'A platform to buy and sell various items.',
            image: '/selling-buying.jpeg',
        },
        {
            title: 'E-Stores for Selling Products',
            description: 'Provide E-stores for individuals to sell their items and products.',
            image: '/e-store-slide.jpg',
        },
    ];

    return (
        <div className="slide-container">
            <Slide>
                {slides.map((slide, index) => (
                    <div className="each-slide-effect" key={index}>
                        <div style={{ 'backgroundImage': `url(${slide.image})` }}>
                            <div className="slide-content">
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                                <button>Click Me</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Example;
