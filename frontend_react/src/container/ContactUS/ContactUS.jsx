import React from "react";
import "./ContactUS.scss";
import MyMap from "../../componants/Map/MyMap";
import ContactCard from "../../componants/ContactCard/ContactCard";
import NavigationDots from "../../componants/NavigationDots/NavigationDots";
function ContactUS() {
  return (
    <div className="contact-container" id="contact US">
      <div className="leftSideContentContact">
        <h1 data-aos="fade-down" data-aos-duration="1000">
          Contact <span>US</span>
        </h1>
        <h5 data-aos="fade-down" data-aos-duration="1000">
          Nice to meet you, Go on an adventure with us. Together we will find a
          creative solution !
        </h5>
        <img
          className="waving-chracter"
          src={require("../../asseets/images/Wave.png")}
          alt=""
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <div
          className="contact-content"

        >
          <ContactCard />
          <MyMap   />
        </div>
      </div>
      <NavigationDots active={"contact US"} section={"contactSideNav"} />
    </div>
  );
}

export default ContactUS;
