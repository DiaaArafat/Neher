import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { Suspense } from "react";
import { DelayedRender } from "react";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggle, close }) => (
  <motion.ul variants={variants} className={` ${toggle ? 'ul-menu' : 'no-menu'}`}>
    <MenuItem toggle={close} />
  </motion.ul>
);


