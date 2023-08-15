import React from "react";
import { useEffect } from "react";
import "./ClientsFullPage.scss"
import SmallCard from "../../componants/SmallCard/SmallCard";
import NavigationDots from "../../componants/NavigationDots/NavigationDots";
function ClientsFullPage() {
    useEffect(() => {
        window.AOS.init();
      }, []);
  return (
    <div className="clients-container2" id="clients">
        <h1 data-aos="fade-down" data-aos-duration="1200">
          Our <span>Clients</span>
        </h1>
        <h5 data-aos="fade-down" data-aos-duration="1200">
          We did a great job with these companies !
        </h5>
        <div
          className="cards-container"
          data-aos="zoom-out-down"
          data-aos-duration="1200"
        >
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
      </div>
  );
}


export default ClientsFullPage;