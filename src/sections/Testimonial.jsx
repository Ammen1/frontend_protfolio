import React from "react";
import "../components/Testimonials/Testimonial.css";
import ReviewCard from "../components/Testimonials/ReviewCard";

import glassesimoji from "../assets/img/glassesimoji.png";

export const reviews = [
  {
    imgURL: glassesimoji,
    customerName: "Amen Guda",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: glassesimoji,
    customerName: "Abush Guda",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

const Testimonial = () => {
  return (
    <section className="max-container mt-3">
      <h3 className="font-palanquin mt-5 text-center text-4xl font-bold">
        What My
        <span className=" text-red-600"> Customers </span>
        Say?
      </h3>
      <p className="m-auto mt-10 max-w-lg    text-center ">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="mt-18 flex flex-1 justify-evenly items-center max-lg:flex-col ">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
