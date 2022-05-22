import React from "react";

const Review = ({ review }) => {
  return (
    <div className="flex flex-col card glass p-4">
      <div class="avatar mx-auto">
        <div class="w-24 rounded-full ring ring-primary ">
          <img src={review.img} alt='avatar' />
        </div>
      </div>
        <div className="p-4 text-center text-white">
            <h3>{review.name}</h3>
            <h3>{review.rate}</h3>
            <p>{review.review}</p>
        </div>
    </div>
  );
};

export default Review;
