import React, { useContext } from "react";
import "../components/Services/Services.css";
import Card from "../components/Card/Card";
import HeartEmoji from "../assets/img/heartemoji.png";
import { themeContext } from "../Context";
import { motion } from "framer-motion";
import Resume from "../components/services/resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services " id="services">
      {/* left side */}
      <div className="awesome mb-36">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane className="">
          "Hi there, I'm Tamirat Guda,
          <br />
          Welcome to my Protofolio!
          <br />
          I'm a passionate Django and
          <br />
          React Full Stack Developer,
          <br />
          and this repository is a
          <br />
          reflection of my journe
        </spane>
        <a href={Resume} download>
          <button className="button n-button  text-black text-xl rounded-full w-40 h-10 mt-10">
            Download CV
          </button>
        </a>
        <div
          className="blur s-blur1 mt-28 mr-100"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>
      {/* right */}
      <div className="cards mb-36 ">
        <motion.div
          initial={{ left: "0rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Abush Amen"}
            className="card"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
