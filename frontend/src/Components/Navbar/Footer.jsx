import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      
      <div className="top">
        <div>

           <h1>Dadibidi.Com</h1>
        
        </div>
        <div>
         <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
         </a>
         <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
         </a>
         <a href="/">
            <i className="fa-brands fa-behance-square"></i>
         </a>
         <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
         </a>

        </div>
    </div>

    <div className="bottom">
        <div>
            <h4>Project</h4>
            <a href="/" >Changelog</a>
            <a href="/" >Status</a>
            <a href="/" >Lisence</a>
            <a href="/" >All Versions</a>
        </div>

        <div>
            <h4>Dadibidi</h4>
            <a href="/" >Careers</a>
            <a href="/" >Partnership</a>
            <a href="/" >Project</a>
            <a href="/" >Mobile App</a>
        </div>

        <div>
            <h4>Help</h4>
            <a href="/" >Support</a>
            <a href="/" >trabulshooting</a>
            <Link to="/Contact">Contact Us</Link>
           
        </div>

        <div>
            <h4>Other</h4>
            <a href="/" >Terms of services</a>
            <Link to="/privacy">Privacy policy</Link>
            <a href="/" >Lisence</a>
           
        </div>
      
    </div>

        <div className="copyright">
            <p>2024 &#169; <a>Arya labs (pvt) Ltd.</a> </p>
        </div>
      
    </div>
  )
}
