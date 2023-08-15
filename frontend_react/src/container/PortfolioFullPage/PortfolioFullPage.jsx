import React from "react";
import { Outlet } from "react-router-dom";
import "./PortfolioFullPage.scss";
import PortfolioCards2 from "../../componants/PortfolioCards2/PortfolioCards";
import { useState, useEffect } from "react";
import NavigationDots from "../../componants/NavigationDots/NavigationDots";
import Navbar from "../../componants/Navbar/Navbar";
import Footer from "../Footer/Footer";
function PortfolioFullPage() {
  const [data, setData] = useState([]);
  const apiUrl = 'http://localhost:1337/api/portfolios?populate=cover'; // Replace with your API URL

  useEffect(() => {
    window.AOS.init();
  }, []);
  useEffect(() => {
    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData); // Store data in state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


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
    <div>
      <div className="portfolioFullPage" id="portfolio">
        <h1 data-aos="zoom-in">Portfolio </h1>
        <div className="portfolio-section-butttons2" data-aos="zoom-in">
          <div className="filter-buttons2">
            {["All", "Animation", "Belgsee", "Production"].map(
              (item, index) => (
                <button
                  key={index}
                  onClick={() => handleWorkFilter(item)}
                  className={`portfolio-item-button2 ${
                    activeFilter === item ? "item-active" : ""
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
        <div className="portfolioSectionCards2">
          {data.data?.map((item)=>
          
          <PortfolioCards2 title={item.attributes.name}  trailer={item.attributes.cover.data.attributes.url}
          />
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfolioFullPage;
