import React, { useContext, useState } from "react";
import "../components/Portfolio/Portfolio.css";
import Ecommerce from "../assets/img/ecommerce.png";
// import Hoc from "../../assets/img/hoc.png";
// import Crown from "../../assets/img/crown.png";
import ReactPaginate from "react-paginate";
import { themeContext } from "../Context";
// import { arrowRight } from "../assets/icons";

const projects = [
  {
    image: Ecommerce,
    link: "https://example.com/ecommerce",
  },
  {
    image: Ecommerce,

    link: "https://example.com/ecommerce",
  },
  {
    image: Ecommerce,

    link: "https://example.com/ecommerce",
  },
  {
    image: Ecommerce,

    link: "https://example.com/ecommerce",
  },
  {
    image: Ecommerce,

    link: "https://example.com/hoc",
  },
  // Add more projects here
];

const imagesPerPage = 4;

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
    <div className="portfolio justify-center gap-5 items-center" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }} className="mb-10">
        Recent Projects
      </span>

      {/* Grid container for the projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={`Project ${startIndex + index + 1}`}
              className="w-full gap-3"
            />
            <div className="text-lg mt-2 text-gray-400">
              <h3>{project.title}</h3>
              <p className="lg:max-w-lg mt-2 gap-2 font-montserrat text-slate-gray">
                {project.description}
              </p>

              <a
                href={project.link}
                className="flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
            </div>
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
      />
    </div>
  );
};

export default Portfolio;
