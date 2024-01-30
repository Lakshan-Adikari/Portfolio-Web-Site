import React from "react";
import { useSpring, animated } from "react-spring";
import "./Profile.css";

export default function Profile() {
  const spinAnimation = useSpring({
    from: { transform: "rotate(0deg)", opacity: 0 },
    to: { transform: "rotate(360deg)", opacity: 1 },
    config: { duration: 2000, tension: 180, friction: 12 },
    loop: true,
  });


  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/tharindu-lakshan-48b068226/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/tharindu-lakshan-48b068226/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/tharindu-lakshan-48b068226/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/tharindu-lakshan-48b068226/">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/tharindu-lakshan-48b068226/">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, We are{" "}
              <span className="highlighted-text">Thuhina Creations</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
              <animated.h3 style={spinAnimation} className="animated-heading">
                  Photography | Videography | Advertising | Designing
                </animated.h3>
              </h1>
              <span className="profile-role-tagline">
                We Can Capture Your Dream Image...
              </span>
            </span>
          </div>
          <div className="profile-option">
            <button className="btn primary-btn">Join With Us..</button>
            <a href="5308831.pdf" download="LakshanCV.pdf">
              <button className="btn highlighted-btn">View More</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
