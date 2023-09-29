import React, { useContext } from "react";
import { themeContext } from "../Context";
import "../components/Experience/Experience.css";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience mt-56 sm:mt-4 " id="experience">
      {/* Experience */}
      <div
        className="achievement flex items-center"
        style={{ color: darkMode ? "var(--orange)" : "" }}
      >
        <div className="circle">3+</div>
        <span className="">
          years <br className="lg:hidden" /> Experience
        </span>
      </div>

      {/* Completed Projects */}
      <div
        className="achievement flex items-center mt-4 lg:mt-0 lg:ml-8"
        style={{ color: darkMode ? "var(--orange)" : "" }}
      >
        <div className="circle">2+</div>
        <span className="">
          completed <br className="lg:hidden" /> Projects
        </span>
      </div>

      {/* Companies Worked */}
      <div
        className="achievement flex items-center mt-4 lg:mt-0 lg:ml-8"
        style={{ color: darkMode ? "var(--orange)" : "" }}
      >
        <div className="circle">1+</div>
        <span className="">
          companies <br className="lg:hidden" /> Work
        </span>
      </div>
    </div>
  );
};

export default Experience;
