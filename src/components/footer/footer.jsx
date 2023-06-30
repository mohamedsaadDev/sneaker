import React from 'react'
import "./footer.css" 
import { Link } from 'react-router-dom'
const Footer = () => {
return (
    <div className='contanier-footer'>
        <div className='footer-text'>
            <h2 className='footer-title'>Sneaker company</h2>
            <p className='footer-pargraph'>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Obcaecati <br/>fugit ipsum, quaerat sint suscipit
                minima earum a maiores, quis est veritatis asperiores
                harum<br/> iusto voluptatibus quibusdam accusantium necessitatibus 
                repudiandae itaque!</p>
                <div className="footer-socil-icon">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-google-plus"></i>
                </div>
        </div>
        <div className='end-footer' >
            <p>copyritght © 2023 Sneaker Company</p> 
            <ul >
                <Link className='footer-link' to="/">Home</Link>
                <Link className='footer-link' to="/man"> Man</Link>
                <Link className='footer-link' to="/Women">Women</Link>
                <Link className='footer-link' to="/Abut">Abut</Link>
                <Link className='footer-link' to="/ContactUs">Contact Us</Link> 
            </ul>
        </div>
    </div>
)
}

export default Footer