import React from "react";
import covervid from "./test.mp4";

import DynamicText from "../DynamicText/DynamicText";
import NavigationDots from "../NavigationDots/NavigationDots";
function LandingPage() {
  return (
    <div className="landing-page"   data-aos="fade-up"  data-aos-duration="1000">
      <div className="topSideContent">
        <div className="leftSideContent">
          <div className="landing-page-first">
            <DynamicText />
          </div>
          <video autoPlay muted playsinline className="coverVideo">
            <source src={covervid} type="video/mp4" />
          </video>
        </div>
        <NavigationDots active={"home"} section={"landingSideNav "}  />
      </div>
      <div className="standig"></div>
    </div>
  );
}

export default LandingPage;
