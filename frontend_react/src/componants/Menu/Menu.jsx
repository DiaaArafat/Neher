import * as React from "react";
import { useRef } from "react";
import { useEffect } from "react";

import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import "/Users/diaa_mac/Desktop/Neher/frontend_react/src/componants/Menu/style.scss";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 260px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 260px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Menu () {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        toggleOpen();
      }
    };
  
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
  
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [containerRef, isOpen, toggleOpen]);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="nav-menu"
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation toggle={isOpen}/>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
export default Menu;