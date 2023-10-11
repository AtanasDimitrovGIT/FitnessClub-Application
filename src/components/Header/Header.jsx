import React from "react";
import './Header.css'
import Logo2 from '../../assets/logo2.png'
const Header = () => {
    return (
        <div className="header">

            <img src={Logo2} alt="" className="logo2"/>

            <ul className="header-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#why_us">Why us</a></li>
                <li><a href="#plans">Plans</a></li>
                <li><a href="#classes">Classes</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
            </ul>
        </div>
    )
}

export default Header