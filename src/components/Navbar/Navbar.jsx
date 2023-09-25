import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper mt-1 h-16 bg-black border-r-2" id="Navbar">
      {/* left */}
      <div className="n-left ">
        <div className="button n-name text-black animate-bounce ml-5 rounded-[20]">
          Amen-Abush
        </div>
      </div>
      {/* right */}
      <div className="n-right text-lg animate-pulse">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }} className="text-white">
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link spy={true} smooth={true}>
          <button className="button n-button mr-4 ">
            <Toggle />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
