import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import Review from "./Review";

const ReviewSection = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("https://gear-bikes-server.onrender.com/latestReviews").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="py-20 bg-base-100">
      <h2 className="text-center text-4xl mb-10 font-semibold">
        Customer Reviews
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-6 lg:mx-20">
        {reviews[0]._id && reviews.map((r) => (
          <Review key={r._id} review={r} />
        ))}
      </div>
      <Link
        to="/reviews"
        className="block w-20 ml-auto pb-10 lg:pb-0 lg:mr-20 mt-10 text-lg font-bold text-secondary"
      >
        See All
      </Link>
    </div>
  );
};

export default ReviewSection;
