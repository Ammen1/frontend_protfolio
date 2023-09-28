import React, { useContext, useState } from "react";
import "./Portfolio.css";
import Ecommerce from "../../assets/img/ecommerce.png";
import Hoc from "../../assets/img/hoc.png";
import Crown from "../../assets/img/crown.png";
import ReactPaginate from "react-paginate";
import { themeContext } from "../../Context";
import { arrowRight } from "../../assets/icons";

const projects = [
  {
    image: Ecommerce,
    title: "Ecommerce Project",
    description: "Lorem ipsum dolor",
    link: "https://example.com/ecommerce",
  },
  {
    image: Crown,
    title: "Ecommerce Project",
    description: "Lorem ipsum dolor",
    link: "https://example.com/ecommerce",
  },
  {
    image: Ecommerce,
    title: "Crown Project",
    description: "Lorem ipsum dolor",
    link: "https://example.com/ecommerce",
  },
  {
    image: Ecommerce,
    title: "Ecommerce Project",
    description:
      "Lorem ipsum dolor lg:max-w-lg mt-2 font-montserrat text-slate-gray lg:max-w-lg mt-2 font-montserrat text-slate-gray",
    link: "https://example.com/ecommerce",
  },
  {
    image: Ecommerce,
    title: "Ecommerce Project",
    description: "Lorem ipsum dolor",
    link: "https://example.com/ecommerce",
  },
  {
    image: Hoc,
    title: "HOC Project",
    description: "Sed do eiusmod tempor .",
    link: "https://example.com/hoc",
  },
  // Add more projects here
];

const imagesPerPage = 2;

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  const currentProjects = projects.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="portfolio " id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Flex container for the grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 mt-8   sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 ">
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className="project bg-fuchsia-100 rounded-[40] justify-center items-center"
          >
            <img
              src={project.image}
              alt={`Project ${startIndex + index + 1}`}
            />
            <div className="justify-center items-center text-lg ml-10 mt-2 text-gray-400">
              <h3>{project.title}</h3>
              <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
                {project.description}
              </p>
            </div>
            <a
              href={project.link}
              className="flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </a>
          </div>
        ))}
      </div>

      {/* Pagination component */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={Math.ceil(projects.length / imagesPerPage)}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
        // className="flex mt-4 text-xl font-palanquin font-bold gap-6 sm:mt-12"
      />
    </div>
  );
};

export default Portfolio;
