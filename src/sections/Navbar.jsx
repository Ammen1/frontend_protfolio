import React from "react";
import Toggle from "../components/Toggle/Toggle";
import "../components/Navbar/Navbar.css";
import { Link } from "react-scroll";
import Github from "../assets/img/github.png";
import { hamburger } from "../assets/icons";
const navbar = () => {
  return (
    <div className="n-wrapper mt-1 h-16 " id="Navbar">
      {/* left */}
      <div className="n-left p-4 md:py-6 md:px-4 lg:px-6">
        <a
          href="https://github.com/Ammen1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Github}
            alt="GitHub"
            className="md:w-12 md:h-12 lg:w-14 lg:h-14 mt-2 rounded-full mr-4 bg-black hover:animate-bounce"
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
      <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24"></div>
      <div className="hidden max-lg:block">
        <img src={hamburger} alt="hamburger icon" width={25} height={25} />
      </div>
      <div className="button mr-5 h-10 mt-3 md:mt-0 md:py-6 md:px-4 lg:px-6 flex justify-center items-center px-7 py-6  w-20 font-montserrat text-lg leading-none">
        <Toggle />
      </div>
    </div>
  );
};

export default navbar;
