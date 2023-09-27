import React from "react";
import "./Footer.css";
import Wave from "../../assets/img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer bg-gray-800">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>amenguda@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/amenabush"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Insta color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.facebook.com/Amen1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook color="white" size={"3rem"} />
          </a>
          <a
            href="https://github.com/Ammen1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
