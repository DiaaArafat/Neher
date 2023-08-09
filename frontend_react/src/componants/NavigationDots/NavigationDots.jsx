import React from "react";
import "./NavigationDots.scss";

const NavigationDots = ({ active,section }) => (
  <div className={section} data-aos="fade-left"  data-aos-duration="1300" >
    {["home", "about us", "services", "clients", "portfolio", "contact US"].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { background: "var(--yellow-logo)",scale:"1.6"
        } : {scale:"1"}}
        />
      )
    )}
  </div>
);

export default NavigationDots;
