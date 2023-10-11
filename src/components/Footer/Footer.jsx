import React from "react";
import "./Footer.css";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import destination from "../../assets/destination.png";
import { FaLocationDot } from "react-icons/fa6";
import { AiTwotonePhone } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h1 className="h1">About</h1>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="icons">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>

        <div className="box">
          <h1 className="h1">Contact info</h1>
          <div className="info">
            <h3>
              <i><FaLocationDot /></i> 32 street Name, city name, Bulgaria
            </h3>
            <h3>
              <i><AiTwotonePhone/></i> +032 884717098
            </h3>
            <h3>
              <i><FaEnvelope/></i> example@gmail.com
            </h3>
          </div>
        </div>

        <div className="box">
          <h1 className="h1">Quick links</h1>
          <div className="info">
             <h3>Home</h3>
            <h3>About</h3>
            <h3>Service</h3>
            <h3>News</h3>
            <h3>Contact</h3>
          </div>
        </div>
      </div>

      <div className="credit"></div>
    </section>
  );
};

export default Footer;
