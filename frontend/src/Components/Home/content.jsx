import React, { useEffect } from "react"

import mountain from "../Assets/Arrow.png";
import mountain2 from "../Assets/book1.png";
import mountain3 from "../Assets/job.jpg";
import mountain4 from "../Assets/7.png";

import "../Home/content.css";

const Content = () => {

    useEffect(() => {
        const elements = document.querySelectorAll('.destination p, .destination h2');
    
        const isInViewport = el => {
          const rect = el.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
        };
    
        const callbackFunc = () => {
          elements.forEach(el => {
            if (isInViewport(el)) {
              el.classList.add('show');
            }
          });
        };
    
        window.addEventListener('scroll', callbackFunc);
        return () => {
          window.removeEventListener('scroll', callbackFunc);
        };
      }, []);


    
        return (
            <div className="destination">
                <h1>What We Do</h1>
                <p>Explore innovation and convenience on our platform – your all-in-one solution. Unlock career potentials, simplify travel, access healthcare, and empower businesses seamlessly. Redefine possibilities with us in the interconnected future.


</p>

                <div className="first-des">
                    <div className="des-text">
                        <h2>Unlock Your Career Potential with Our Job Network</h2>
                        <p>
                        Discover your dream job or find the perfect candidate! Our platform, inspired by LinkedIn, combines cutting-edge technologies like React.js and Node.js to connect professionals worldwide. Post job listings, explore opportunities, and network with industry leaders. Join the future of career growth today.
                        </p>
                    </div>
                    <div className="image">
                        <img alt="img" src={mountain} />
                        <img alt="img" src={mountain2} />
                    </div>
                </div>

                <div className="first-des-reverse">
                    <div className="des-text">
                        <h2>Seamless Travel Planning Starts Here!</h2>
                        <p>
                        Book accommodations, flights, and more with ease! Experience the convenience of our online booking system, influenced by the success of Booking.com. Powered by Angular and Java with Spring Boot, our platform ensures a smooth journey. Unleash stress-free travel planning – your adventure awaits!
                        </p>
                    </div>
                    <div className="image">
                        <img alt="img" src={mountain3} />
                        <img alt="img" src={mountain4} />
                    </div>
                </div>
                <div className="first-des">
                    <div className="des-text">
                        <h2>Healthcare at Your Fingertips – Anytime, Anywhere!</h2>
                        <p>
                        Connect with healthcare professionals effortlessly! Our telehealth platform, inspired by leaders like Amwell and Teladoc, uses React.js and Node.js to bring expert consultations to your device. Experience secure, online healthcare with advanced features. Your well-being is our priority – schedule a consultation now!
                        </p>
                    </div>
                    <div className="image">
                        <img alt="img" src={mountain} />
                        <img alt="img" src={mountain2} />
                    </div>
                </div>

                <div className="first-des-reverse">
                    <div className="des-text">
                        <h2>Shop Smart, Sell Smart – Explore the Ultimate Marketplace!</h2>
                        <p>
                        Transform your shopping experience with our e-commerce platform, akin to the global giant Amazon! Utilizing React.js and Java with Spring Boot, we provide a secure and scalable marketplace. Buy and sell with confidence, backed by a robust distributed database. Embrace the future of online shopping – start exploring today!
                        </p>
                    </div>
                    <div className="image">
                        <img alt="img" src={mountain3} />
                        <img alt="img" src={mountain4} />
                    </div>
                </div>
            </div>
        );
    }


export default Content;
