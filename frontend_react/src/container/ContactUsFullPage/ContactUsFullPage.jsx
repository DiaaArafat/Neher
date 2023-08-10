import React from "react";
import "./ContactUsFullPage.scss";
import MyMap from "../../componants/Map/MyMap";
import ContactCard from "../../componants/ContactCard/ContactCard";
import NavigationDots from "../../componants/NavigationDots/NavigationDots";
import { useEffect } from "react";
function ContactUsFullPage() {
    useEffect(() => {
        window.AOS.init();
      }, []);
  return (
    <div className="contact-container2" id="contact US">
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
      <div className="contact-content2">
        <ContactCard />
        <MyMap />
      </div>
    </div>
  );
}

export default ContactUsFullPage;
