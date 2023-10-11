import React from "react";
import "./Classes.css";
import class_1 from "../../assets/class_1.jpg";
import class_icon_1 from "../../assets/class_icon_1.png";
import class_2 from "../../assets/class_2.jpg";
import class_icon_2 from "../../assets/class_icon_2.png";
import class_3 from "../../assets/class_3.jpg";
import class_icon_3 from "../../assets/class_icon_3.png";
import class_4 from "../../assets/class_4.jpg";
import class_icon_4 from "../../assets/class_icon_4.png";
import background from "../../assets/classes_bg.png";

const Classes = () => {
  return (
    <div id="classes"
      className="class"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        width: 1800,
      }}
    >
      
      <div className="container">
        <p className="section-subtitle">Our Classes</p>

        <h2 className="text-center">Fitness Classes for Every Goal</h2>

        <div className="card-list">
          <div className="scrollbar-item">
            <div className="class-card">
              <figure className="card-banner img-holder">
                <img
                  src={class_1}
                  alt="Weight Lifting"
                  className="img-cover"
                  loading="lazy"
                  width={416}
                  height={240}
                />
              </figure>

              <div className="card-content">
                <div className="title-wrapper">
                  <img
                    src={class_icon_1}
                    alt=""
                    className="title-icon"
                    width={52}
                    height={52}
                  />

                  <h3>
                    <p className="card-title">Weight Lifting</p>
                  </h3>
                </div>

                <p className="card-text">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="card-progress">
                  <div className="progress-wrapper">
                    <p className="progress-label">Class Full</p>
                    <span className="progress-value">85%</span>
                  </div>

                  <div className="progress-bg">
                    <div className="progress-bar-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scrollbar-item">
            <div className="class-card">
              <figure className="card-banner img-holder">
                <img
                  src={class_2}
                  alt="Weight Lifting"
                  className="img-cover"
                  loading="lazy"
                  width={416}
                  height={240}
                />
              </figure>

              <div className="card-content">
                <div className="title-wrapper">
                  <img
                    src={class_icon_2}
                    alt=""
                    className="title-icon"
                    width={52}
                    height={52}
                  />

                  <h3>
                    <p className="card-title">Cardio & Wellness</p>
                  </h3>
                </div>

                <p className="card-text">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="card-progress">
                  <div className="progress-wrapper">
                    <p className="progress-label">Class Full</p>
                    <span className="progress-value">70%</span>
                  </div>

                  <div className="progress-bg">
                    <div className="progress-bar-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scrollbar-item">
            <div className="class-card">
              <figure className="card-banner img-holder">
                <img
                  src={class_3}
                  alt="Weight Lifting"
                  className="img-cover"
                  loading="lazy"
                  width={416}
                  height={240}
                />
              </figure>

              <div className="card-content">
                <div className="title-wrapper">
                  <img
                    src={class_icon_3}
                    alt=""
                    className="title-icon"
                    width={52}
                    height={52}
                  />

                  <h3>
                    <p className="card-title">Power Yoga</p>
                  </h3>
                </div>

                <p className="card-text">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="card-progress">
                  <div className="progress-wrapper">
                    <p className="progress-label">Class Full</p>
                    <span className="progress-value">90%</span>
                  </div>

                  <div className="progress-bg">
                    <div className="progress-bar-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scrollbar-item">
            <div className="class-card">
              <figure className="card-banner img-holder">
                <img
                  src={class_4}
                  alt="Weight Lifting"
                  className="img-cover"
                  loading="lazy"
                  width={416}
                  height={240}
                />
              </figure>

              <div className="card-content">
                <div className="title-wrapper">
                  <img
                    src={class_icon_4}
                    alt=""
                    className="title-icon"
                    width={52}
                    height={52}
                  />

                  <h3>
                    <p className="card-title">The Fitness Pack</p>
                  </h3>
                </div>

                <p className="card-text">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="card-progress">
                  <div className="progress-wrapper">
                    <p className="progress-label">Class Full</p>
                    <span className="progress-value">60%</span>
                  </div>

                  <div className="progress-bg">
                    <div className="progress-bar-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
