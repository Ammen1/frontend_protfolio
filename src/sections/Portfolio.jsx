import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { themeContext } from "../Context";
import "../style/Portfolio.css";
import Ecommerce from "../assets/img/ecommerce.png";
import axiosInstance from "../axios";

const imagesPerPage = 4;

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Calculate the index range for current projects
  const startIndex = currentPage * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentProjects = portfolio.slice(startIndex, endIndex);

  // Handle page change for pagination
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Fetch portfolio data from the API
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/posts/")
      .then((response) => {
        setPortfolio(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error Fetching Portfolio:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }

  // Sort the portfolio by date
  const sortedPortfolio = portfolio.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full" id="portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>

      {/* Grid container for the projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentProjects.map((project, index) => (
          <div key={project.id} className="project-card">
            <a
              href={project.name}
              className="grid grid-cols-1 justify-center items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={`Project ${startIndex + index + 1}`}
                className="w-full gap-3 flex"
              />

              <div className="text-lg mt-2 text-gray-400">
                <h3>
                  <span className=" text-amber-800">by:</span> {project.author}
                </h3>
                <p className="lg:max-w-lg mt-2 gap-2 font-montserrat text-slate-gray">
                  {project.name}
                </p>
                <h3>
                  <span className="text-amber-800">Post at:</span>{" "}
                  {project.timestamp}
                </h3>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Pagination component */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={Math.ceil(portfolio.length / imagesPerPage)}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Portfolio;
