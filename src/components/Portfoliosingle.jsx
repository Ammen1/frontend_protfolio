import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Portfoliosingle = () => {
  const [response, setResponse] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/post/${id}/`);
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        console.error("error occer:", error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div className="flex flex-wrap justify-center mt-24 ">
      <div className=" bg-white justify-center items-center w-[50%] h-[50%]">
        <h1 className=" justify-center items-center text-center text-3xl text-amber-500 mt-1 ">
          <span>Name of Project : </span>
          {response.name}
        </h1>
        <img
          src={response.image}
          alt="project image"
          className="mt-3 rounded-[5%] animate-pulse"
        />
        <p className="mt-3">
          <span className=" font-extrabold text-amber-500 text-3xl">
            About Project : <br />
          </span>
          {response.description}
        </p>
        <p className=" font-extrabold text-amber-500 text-3xl">
          <span className="">Developer: </span>
          {response.author}
        </p>
        <p className="">
          {" "}
          <span className="font-extrabold text-amber-500 text-3xl">
            Created at :
          </span>
          {response.timestamp}
        </p>
        <p className="">
          {" "}
          <span className="font-extrabold text-amber-500 text-3xl">
            Source Code :{" "}
          </span>
          link
        </p>
      </div>
    </div>
  );
};

export default Portfoliosingle;
