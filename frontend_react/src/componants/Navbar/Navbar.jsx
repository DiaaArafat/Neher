import React from "react";
import { images } from "../../asseets/exporter";
import "./Navbar.scss";
import Menu from "/Users/diaa_mac/Desktop/Neher/frontend_react/src/componants/Menu/Menu";
import FilledButton from "../FilledButton/FilledButton";
function Navbar() {
  return (
    <div className="navbar">
      <nav className="app__navbar app__primarybg" id="home">
        <div className="app__navbar-logo">
          <a href="#home">
            <img src={images.logo} alt="logo"></img>
          </a>
        </div>
        <ul className="app__navbar-links">
          {["home", "about us", "services", "clients", "portfolio","contact US"].map(
            (item) => (
              <li
              href={`#${item}`}
                className={`${item} app__flex p-text highlightTextIn `}
                key={`link-${item}`}
              >
                <div />
                <a
                  className={`${item + "Button"} highlightTextIn `}
                  href={`#${item}`}
                >
                  {item}
                </a>
              </li>
            )
          )}
    
        </ul>
        <button className="button-languge">
              <img
                src={require("../../asseets/images/Flag_of_Turkey.png")}
              ></img>
              <p>TR</p>
            </button>
      </nav>
      <Menu></Menu>
    </div>
  );
}

export default Navbar;
