import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons'
import React from "react";

const Review = ({ review }) => {
  return (
    <div className="flex flex-col card bg-white shadow-xl hover:bg-secondary py-4 hover:text-white">
      <div class="avatar mx-auto">
        <div class="w-24 rounded-full ring ring-primary">
          <img src={review.img} alt='avatar' />
        </div>
      </div>
        <div className="p-4 text-center ">
            <h3 className="uppercase">{review.name}</h3>
            <h3>Rating: {review.rate}</h3>
            <div>
            <FontAwesomeIcon
            className="text-primary"
            icon={faStar}
            />
            <FontAwesomeIcon
            className="text-primary"
            icon={faStar}
            />
            <FontAwesomeIcon
            className="text-primary"
            icon={faStar}
            />
            <FontAwesomeIcon
            className="text-primary"
            icon={faStar}
            />
            <FontAwesomeIcon
            className="text-primary"
            icon={faStar}
            />
            </div>
            <p>{review.review}</p>
        </div>
    </div>
  );
};

export default Review;
