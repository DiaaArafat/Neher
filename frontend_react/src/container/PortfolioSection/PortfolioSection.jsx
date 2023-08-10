import React from "react";
import "./PortfolioSection.scss";
import PortfolioCards2 from "../../componants/PortfolioCards2/PortfolioCards";
import { useState, useEffect } from "react";
import NavigationDots from "../../componants/NavigationDots/NavigationDots";
import { NavLink } from "react-router-dom";
function PortfolioSection() {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const handleWorkFilter = (item) => {
    setActiveFilter(item);

    setTimeout(() => {
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <div className="portfolioSection" id="portfolio">
      <div className="leftSideContentPortfolio">
        <h1 data-aos="zoom-in" data-aos-duration="800">
          Portfolio{" "}
        </h1>
        <div
          className="portfolio-section-butttons"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <div className="filter-buttons">
            {["All", "Animation", "Belgsee", "Production"].map(
              (item, index) => (
                <button
                  key={index}
                  onClick={() => handleWorkFilter(item)}
                  className={`portfolio-item-button ${
                    activeFilter === item ? "item-active" : ""
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>
          <a href="/portfolio"> 
  
            <button className="button-more" >
              Show All
            </button>
          </a>
        </div>
        <div className="portfolioSectionCards">
          <PortfolioCards2 duration="800" />
          <PortfolioCards2 duration="1000" />
          <PortfolioCards2 duration="1300" />
          <PortfolioCards2 duration="1500" />
        </div>
      </div>
      <NavigationDots active={"portfolio"} section={"portfolioSideNav"} />
    </div>
  );
}

export default PortfolioSection;
