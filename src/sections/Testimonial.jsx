import React, { useState, useEffect } from "react";
import ReviewCard from "../components/Testimonials/ReviewCard";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Make a GET request to a Django API endpoint to fetch review data for customers.
    fetch(`http://127.0.0.1:8000/api/reviews/`)
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  if (reviews.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What My
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg text-center info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id} // Assuming there's an 'id' property for each review
            imgURL={review.img_url}
            customerName={review.customer_name}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
