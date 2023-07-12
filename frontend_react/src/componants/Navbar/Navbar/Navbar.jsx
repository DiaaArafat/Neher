import React from "react";
import { images } from "../../../asseets/exporter";
import "./Navbar.scss";

import { motion, sync, useCycle } from "framer-motion";
import Menu from "/Users/diaa_mac/Desktop/Neher/frontend_react/src/componants/Navbar/Menu/Menu"
import { easeInOut, easeOut } from "framer-motion";
import { useState } from "react";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
    <nav className="app__navbar app__primarybg">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo"></img>
      </div>
      <ul className="app__navbar-links">
        {["Home", "About Us", "Portfolio", "Services", "Clients"].map(
          (item) => (
            <li className={`${item} app__flex p-text `} key={`link-${item}`}>
              <div />
              <a className={`${item + "Button"}`} href={`#${item}`}>
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
/* 
      <div className="app__navbar-menu">
        <Menu
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        {toggle && (
          <motion.div
            transition={{ duration: 0.35, ease: easeInOut }}
            whileInView={{ x: [300, 0] }}
            className="motionDiv"
          >
            <ul>
              {["Home", "About Us", "Portfolio", "Services", "Clients"].map(
                (item) => (
                  <li className={`${item}`} key={{ item }}>
                    <div />
                    <a
                      className={`${item + "Button"}`}
                      href={`#${item}`}
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div> */