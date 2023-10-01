import React, { useContext } from "react";

import "../components/Works/Works.css";
import { themeContext } from "../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works " id="works">
      {/* left side */}
      <div className="w-left ">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
          </spane>
        </div>

        {/* right side */}
      </div>
      <div className="w-right ml-40 mb-64">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-30px" }}
          transition={{ duration: 5, type: "spring" }}
          className="w-mainCircle animate-spin "
        >
          <div className="w-backCircle redCircle ">
            <div className="w-backCircle blueCircle"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
