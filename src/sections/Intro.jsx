import React, { useContext } from "react";
// import "./Intro.css";
import "../components/Intro/Intro.css";
import glassesimoji from "../assets/img/glassesimoji.png";
import crown from "../assets/img/crown.png";
import FloatinDiv from "../components/FloatingDiv/FloatingDiv";
import Github from "../assets/img/github.png";
import LinkedIn from "../assets/img/linkedin.png";
import Instagram from "../assets/img/instagram.png";
import { themeContext } from "../Context";
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
        <div className="i-name  ">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Amen</span>
          <span className=" font-semibold  text-orange-500 ">
            Full Stak Developer with a high level of experience in web designing
            and development, producing high-quality work. Full Stak Developer
            with a high level of experience in web designing and development,
            producing high-quality work. Full Stak Developer with a high level
            of experience in web designing and development, producing
            high-quality work. Full Stak Developer with a high level of
            experience in web designing and development, producing high-quality
            work.
          </span>
        </div>
        {/* <Link to="contact" smooth={true} spy={true} className="link">
          <button className="button mr-5 h-10 mt-8 md:mt-0 md:py-10 md:px-4 lg:px-6 flex justify-center items-center px-7 py-6 border w-30 font-montserrat text-lg leading-none">
            Hire me
          </button>
        </Link> */}
        {/* social icons */}
        <div className="i-icons mt-4 md:mt-0">
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
      <div className="i-right ml-5">
        <div className="w-backCircle amen blueCircle mt-14 ml-1 sm:mt-7 sm:ml-2"></div>
        <div className="w-backCircle amen yellowCircle mt-7 ml-2 sm:mt-14"></div>
        <div className="w-backCircle redCircle"></div>
        {/* animation */}
        <motion.img
          initial={{ left: "-20%" }}
          whileInView={{ left: "24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
          className="mt-40 sm:mt-20"
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div sm:hidden"
        >
          <FloatinDiv
            img={crown}
            text1="Web"
            text2="Developer"
            className="justify-center items-center"
          />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div sm:hidden"
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
