import React, { useContext } from "react";
import "../style/Works.css";
import { themeContext } from "../Context";
import { motion } from "framer-motion";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works flex  col " id="works">
      {/* left side */}
      <div className="w-left ">
        <div className="awesome">
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
          </spane>
        </div>

        {/* right side */}
      </div>
      <div className="w-right ml-40">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-30px" }}
          transition={{ duration: 5, type: "spring" }}
          className="w-mainCircle animate-spin "
        >
          <div className="w-backCircle redCircle "></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
