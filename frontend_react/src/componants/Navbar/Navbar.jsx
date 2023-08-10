import React from "react";
import { images } from "../../asseets/exporter";
import "./Navbar.scss";
import { NavLink, Outlet } from "react-router-dom";
import Menu from "/Users/diaa_mac/Desktop/Neher/frontend_react/src/componants/Menu/Menu";
import FilledButton from "../FilledButton/FilledButton";
import Footer from "../../container/Footer/Footer";
function Navbar() {
  return (
    <div className="navbar">
      <nav className="app__navbar app__primarybg" id="home">
        <div className="app__navbar-logo">
          
           <NavLink
                to={`/`} >
            <img src={images.logo} alt="logo"></img>
          </NavLink>
        </div>
        <ul className="app__navbar-links">
          {[
            "home",
            "about us",
            "services",
            "clients",
            "portfolio",
            "contact US",
          ].map((item) => (
            <li
              href={`${item}`}
              className={`${item} app__flex p-text highlightTextIn  `}
              key={`link-${item}`}
            >
              <div />
              <NavLink
                to={`/${item}`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? `${item + "Active"} highlightTextIn  `
                    : isPending
                    ? `${item + "Button"} highlightTextIn `
                    : `${item + "Button"} highlightTextIn `
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="button-languge">
          <img src={require("../../asseets/images/Flag_of_Turkey.png")}></img>
          <p>TR</p>
        </button>
      </nav>
      <Menu></Menu>
    </div>
  );
}

export default Navbar;
