import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Portfoliosingle = () => {
  const [response, setResponse] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/posts/${id}/`);
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div className="flex flex-wrap justify-center mt-32 ml-12">
      <div className="card">
        <h1>Project Screen Shoot Image</h1>
        <img src={response.image} alt="project image" />
      </div>
      <h2>response.</h2>
    </div>
  );
};

export default Portfoliosingle;
