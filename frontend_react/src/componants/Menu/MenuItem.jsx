import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    },
    pointerEvents: "auto",
  },
  closed: {
    y: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    },
  
    pointerEvents: "none",
  },

};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i, toggle }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
  <div className="menu-item">
      {["Home", "About Us", "Portfolio", "Services", "Clients"].map(
          (item) => (
           (<motion.li       variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="li-menu text-placeholder  style={style}" 
            key={item}>
              <div />
              <a className={`${item + "Button"}` } href={`#${item}`}>
                {item}
              </a>
            </motion.li>
          )))
        }
      <div className="text-placeholder" style={style} />
      <div className="icon-placeholder" style={style} />
    
    </div>
  );
};
