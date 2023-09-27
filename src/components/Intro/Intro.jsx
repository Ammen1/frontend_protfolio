import React, { useContext } from "react";
import "./Intro.css";
// import Vector1 from "../../img/Vector1.png";
// import Vector2 from "../../img/Vector2.png";
// import boy from "../../img/boy.png";
import glassesimoji from "../../assets/img/glassesimoji.png";
import thumbup from "../../assets/img/thumbup.png";
import crown from "../../assets/img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../assets/img/github.png";
import LinkedIn from "../../assets/img/linkedin.png";
import Instagram from "../../assets/img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Amen Abush</span>
          <span className="mt-3 text-base leading-7 font-montserrat text-black sm:max-w-sm">
            Full Stak Developer with high level of experience in web experience
            in web designing and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button  mr-5 h-10 mt-3 flex justify-center items-center px-7 py-6 border w-30 font-montserrat text-lg leading-none">
            Hire me
          </button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a
            href="https://github.com/Ammen1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/Ammen1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/amen_abush"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle "></div>
        <div className="w-backCircle redCircle "></div>
        {/* <img src alt="" /> */}
        {/* animation */}
        <motion.img
          initial={{ left: "-20%" }}
          whileInView={{ left: "24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
          className=" mt-40"
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv
            img={crown}
            text1="Web"
            text2="Developer"
            className=" justify-center items-center "
          />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={thumbup} text1="Best Design" text2="Award" /> */}
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      </div>
    </div>
  );
};

export default Intro;
