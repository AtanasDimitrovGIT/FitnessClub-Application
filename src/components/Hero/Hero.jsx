import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image1 from "../../assets/hero_image1.png";
import hero_image_back2 from "../../assets/hero_image_back2.png";
import Hearth from "../../assets/hearth.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter';

import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div
            initial={{ left: "267px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>Highest quality fitness club in town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Dream body</span>
          </div>
          <div>
            <span>
              Here is the best place to enhance your physique and develop your
              potential to the fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={10} start={0} delay='2' preFix="+"/>
            </span>
            <span>Certified coaches</span>
          </div>
          <div>
            <span>
            <NumberCounter end={587} start={300} delay='2' preFix="+"/>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
            <NumberCounter end={50} start={0} delay='1.5' preFix="+"/>

            </span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <buttons className="btn">Get started</buttons>
          <buttons className="btn">Learn more</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Register</button>

        <motion.div 
        initial= {{right: '-15px'}}
        whileInView={{right: '160px'}}
        transition={transition}
        className="hearth-rate">
          <img src={Hearth} alt="" />
          <span>Hearth Rate</span>
          <span>107 bpm</span>
        </motion.div>

        <img src={hero_image1} alt="" className="hero-image1" />
        <motion.img
        initial= {{right: '-100px'}}
        whileInView={{right: '55px'}}
        transition={transition}
         src={hero_image_back2} alt="" className="hero-image-back2" />

        <motion.div
        initial= {{left: '-910px'}}
        whileInView={{left: '-800px'}}
        transition={transition}
         className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
