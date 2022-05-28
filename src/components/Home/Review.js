import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading";

const Review = ({ review }) => {
  const star = Array.from(Array(review.rate).keys());
  const blnk = 5 - star.length;
  let blankStar;

  if (blnk) {
    blankStar = Array.from(Array(blnk).keys());
  }

  const { data: user, isLoading } = useQuery(["reviewUser", review], () =>
    fetch(
      `https://lit-ravine-76252.herokuapp.com/reviewUserInfo/${review.email}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col card border bg-white shadow-xl hover:bg-secondary py-4 hover:text-white">
      <div className="avatar mx-auto">
        <div className="w-24 rounded-full ring ring-primary">
          <img src={user.img} alt="avatar" />
        </div>
      </div>
      <div className="p-4 text-center ">
        <h3 className="uppercase">{user.name}</h3>
        <h3>Rating: {review.rate}</h3>
        {}
        <div>
          {star &&
            star.map((s) => (
              <FontAwesomeIcon className="text-primary" icon={faStar} />
            ))}
          {blankStar &&
            blankStar.map((s) => (
              <FontAwesomeIcon className="text-info" icon={faStar} />
            ))}
        </div>
        <p>{review.review}</p>
      </div>
    </div>
  );
};

export default Review;
