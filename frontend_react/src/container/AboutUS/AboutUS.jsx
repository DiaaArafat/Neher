import React from "react";
import "./AboutUS.scss";
import { useEffect } from "react";
function AboutUS() {
  useEffect(() => {
    window.AOS.init();
  }, []);
  return (
    <div className="about-us">
      <div className="Content">
        <div className="aboutUS-content">
          <h1 className="aboutUS-header" data-aos="fade-right" data-aos-duration="1000">
            About US
          </h1>
          <p className="aboutUS-small-paragraph" data-aos="fade-right">
          The world is made up of various colors. These colors are what make the world beautiful. Our main objective is to carry out activities which incorporate all of the colors of the world. We have been carrying out projects in the fields of animation, documentary, cinema films and post-production and production at our Istanbul-based studio for over 10 years.
          </p>
          <div data-aos="fade-up" className="button-holder" data-aos-duration="1000">
          <button className="button-about" >
            Learn More
          </button>
          </div>
        </div>
        <script>AOS.init();</script>
        <img
          className="aboutUS-photo"
          src={require("../../asseets/images/aboutUS-test.png")}
          alt="alina"
          data-aos="fade-left"
          data-aos-duration="1000"
        ></img>
      </div>
    </div>
  );
}

export default AboutUS;
