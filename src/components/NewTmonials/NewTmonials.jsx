import React from "react";
import "./NewTmonials.css";
import t_image1 from "../../assets/t-image1.png";
import t_image2 from "../../assets/t-image2.jpg";
import t_image3 from "../../assets/t-image3.jpg";

const NewTmonials = () => {
  return (
    <div className="testimonial" id="testimonials"> 
      <h1 className="heading">testimonials</h1>
      <div className="testimonials-header">
        <span>WHAT THEY</span>
        <span className="stroke-text">SAY</span>
        <span>ABOUT US</span>
      </div>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src={t_image1} alt="" />
          </div>
          <div className="name">
            <h1>Mike Rechardson</h1>
            <p>
              CEO. <span>xyz company</span>
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="box">
          <div className="image">
            <img src={t_image2} alt="" />
          </div>
          <div className="name">
            <h1>Mike Rechardson</h1>
            <p>
              CEO. <span>xyz company</span>
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="box">
          <div className="image">
            <img src={t_image3} alt="" />
          </div>
          <div className="name">
            <h1>Mike Rechardson</h1>
            <p>
              CEO. <span>xyz company</span>
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewTmonials;
