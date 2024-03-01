import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Link } from 'react-router-dom';
import './home.css';
import Content from './content'; 

const Example = () => {
    const slides = [
        {
            title: 'Job Posting and Seeking',
            description: 'Connect job seekers with employers and vice versa.',
            image: '/job-posting-slide.jpg',
            link: '/job-posting', 
        },
        {
            title: 'Online Booking',
            description: 'Book appointments or services online with ease.',
            image: '/online-booking.jpg',
            link: '/online-booking', 
        },
        {
            title: 'Online Consultation Services',
            description: 'Get expert advice in various fields like IT, Law, etc.',
            image: '/consultation.jpeg',
            link: '/Consultation/service3', 
        },
        {
            title: 'Selling and Buying Items',
            description: 'A platform to buy and sell various items.',
            image: '/selling-buying.jpeg',
            link: '/selling-buying', 
        },
        {
            title: 'E-Stores',
            description: 'Provide E-stores for individuals to sell their items and products.',
            image: '/e-store-slide.jpg',
            link: '/e-stores', 
        },
    ];

    return (
        <div>
            <div className="slide-container">
                <Slide>
                    {slides.map((slide, index) => (
                        <div className="each-slide-effect" key={index}>
                            <div style={{ 'backgroundImage': `url(${slide.image})` }}>
                                <div className="slide-content">
                                    <h2>{slide.title}</h2>
                                    <p>{slide.description}</p>
                                    {slide.openInNewWindow ? (
                                        <a href={slide.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                            <button>Explore</button>
                                        </a>
                                    ) : (
                                        <Link to={slide.link} style={{ textDecoration: 'none' }}>
                                            <button>Explore</button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div><br></br>
        
            <Content/>
        </div>
    );
};

export default Example;
