import React, { useContext, useState } from "react";
import "./Portfolio.css";
import Ecommerce from "../../assets/img/ecommerce.png";
import Hoc from "../../assets/img/hoc.png";
import Crown from "../../assets/img/crown.png";

import ReactPaginate from "react-paginate"; // Import react-paginate
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Generate an array of images for the grid (replace with your image sources)
  const images = [
    Ecommerce,
    Ecommerce,
    Hoc,
    Ecommerce,
    Ecommerce,
    Ecommerce,
    Ecommerce,
    Ecommerce,
    Ecommerce,
    Ecommerce,
    Ecommerce,
    Ecommerce,
    Ecommerce,
    Ecommerce,
    Ecommerce,
    Ecommerce,
  ];

  // Number of images to display per page (change to 8)
  const imagesPerPage = 4;

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the start and end index for the current page
  const startIndex = currentPage * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  // Get the images to display on the current page
  const currentImages = images.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Flex container for the grid */}
      <div className="image-grid mt-10">
        {currentImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Project ${startIndex + index + 1}`}
          />
        ))}
      </div>

      {/* Pagination component */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={Math.ceil(images.length / imagesPerPage)}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
        className="flex mt-12 text-xl font-palanquin font-bold gap-6 "
      />
    </div>
  );
};

export default Portfolio;
