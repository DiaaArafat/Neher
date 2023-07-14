import React from "react";
import { images } from "../../asseets/exporter";
import "./Navbar.scss";
import Menu from "/Users/diaa_mac/Desktop/Neher/frontend_react/src/componants/Menu/Menu"
function Navbar() {
  return (
    <div>
    <nav className="app__navbar app__primarybg">
      <div className="app__navbar-logo">
        <a href="#Home">
        <img src={images.logo} alt="logo"></img>
        </a>
      </div>
      <ul className="app__navbar-links">
        {["Home", "About Us", "Portfolio", "Services", "Clients"].map(
          (item) => (
            <li className={`${item} app__flex p-text highlightTextIn `} key={`link-${item}`}>
              <div />
              <a className={`${item + "Button" } highlightTextIn `} href={`#${item}`}>
                {item}
              </a>
            </li>
          )
        )}
      </ul>

    </nav>
    <Menu>
      </Menu>
      </div>
  );
}

export default Navbar;
