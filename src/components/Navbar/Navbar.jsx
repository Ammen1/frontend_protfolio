import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Github from "../../assets/img/github.png";
const navbar = () => {
  return (
    <div className="n-wrapper mt-1 h-16    border-r-2" id="Navbar">
      {/* left */}
      <div className="n-left px-4 py-6  ">
        <a
          href="https://github.com/Ammen1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Github}
            alt="GitHub"
            className=" w-16 h-14 rounded-full bg-emerald-950 hover:animate-bounce"
          />
        </a>
      </div>
      {/* right */}
      <div className="n-right text-lg">
        <div className="n-list">
          <ul
            style={{ listStyleType: "none" }}
            className=" text-blue-800 text-lg"
          >
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
      </div>
      <button className="button  mr-5 h-10 mt-3 flex justify-center items-center px-7 py-6 border w-30 font-montserrat text-lg leading-none ">
        <Toggle />
      </button>
    </div>
  );
};

export default navbar;
