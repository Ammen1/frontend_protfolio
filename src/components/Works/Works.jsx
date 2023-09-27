import React, { useContext } from "react";
import "./Works.css";
// import Upwork from "../../img/Upwork.png";
// import Fiverr from "../../img/fiverr.png";
// import Amazon from "../../img/amazon.png";
// import Shopify from "../../img/Shopify.png";
// import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
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
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button  mr-5 h-10 mt-3 flex justify-center items-center px-7 py-6 border w-30 font-montserrat text-lg leading-none">
              Hire Me
            </button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right ml-14 mb-28">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-30px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle ml-24 animate-spin mt-5  bg-emerald-700"
        >
          <div className="w-backCircle redCircle ">
            <div className="w-backCircle blueCircle"></div>
          </div>
        </motion.div>
        {/* background Circles */}
        {/* <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle "></div>
        <div className="w-backCircle redCircle "></div>
        <div className="x-backCircle mCircle "></div> */}
      </div>
    </div>
  );
};

export default Works;
