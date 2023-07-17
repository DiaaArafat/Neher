import React from "react";
import covervid from './test.mp4';

import DynamicText from "../DynamicText/DynamicText";
function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-page-first">
        <DynamicText />
      </div>
      <video autoPlay muted playsinline className="coverVideo">
        <source src={covervid} type="video/mp4" />
      </video>
      <div className="standig"></div>
    </div>
  );
}

export default LandingPage;
