import React from "react";
import './ServicesFullPage.scss'
import { useEffect } from "react";
import Card from "../../componants/Card/Card";
import AnimationIcon from "../../asseets/images/unnamed.jpg";

import ProductionIcon from "../../asseets/images/unnamed.jpg";
import NavigationDots from "../../componants/NavigationDots/NavigationDots";
function ServicesFullPage() {
  useEffect(() => {
    window.AOS.init();
  }, []);
  const card = "card";
  return (
    <div className="servicesMain2" id="services">
        <h1
          className="servicesHeader"
          data-aos={"zoom-in"}
          data-aos-duration="900"
        >
          Services
        </h1>
        <div className="serviceCards">
          <Card
            color={"greenColor"}
            card={card}
            title={"Animasyon"}
            fade={"zoom-in"}
            img={AnimationIcon}
          />
          <Card
            color={"blueColor"}
            card={card}
            title={"Prodüksiyon"}
            fade={"zoom-in"}
            imxg={AnimationIcon}
          />
          <Card
            color={"yellowColor"}
            card={card}
            title={"Belgese"}
            fade={"zoom-in"}
            img={ProductionIcon}
          />
        </div>
      </div>

  );
}

export default ServicesFullPage;
