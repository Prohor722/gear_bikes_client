import React, { useState } from "react";
import { useQuery } from "react-query";
import Review from "../components/Home/Review";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(0);

  // const {data:reviewCount} = useQuery('pages',()=>fetch('https://lit-ravine-76252.herokuapp.com/reviewCount').then(res=>res.json()));

  const { data: reviews, isLoading } = useQuery(["reviews", currentPage], () =>
    fetch(
      `https://lit-ravine-76252.herokuapp.com/reviews?page=${currentPage}`
    ).then((res) => res.json())
  );

  fetch("https://lit-ravine-76252.herokuapp.com/reviewCount")
    .then((res) => res.json())
    .then((data) => {
      if (data.count) {
        setPages(Math.ceil(parseInt(data.count) / 12));
        console.log(pages);
      }
    });

  // if(reviewCount){
  //   const count = Math.ceil(parseInt(reviewCount.count)/12);
  //   setPages(count);
  //   console.log("pages: " ,pages);
  //   // console.log("Array keys: " ,Array(pages).keys);
  // }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Navbar />
      <div className="my-20 mt-20">
        <h2 className="text-4xl mb-10 pt-12 font-semibold text-secondary text-center">
          All Customer Reviews
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-2 mt-24 lg:mt-16 lg:mx-24">
          {reviews.map((r) => (
            <Review key={r._id} review={r} />
          ))}
        </div>
        <div className="btn-group flex mt-10 justify-center">
          {[...Array(pages).keys()].map((number) => (
            <button
              className={
                currentPage === number ? "btn btn-active" : "btn btn-accent"
              }
              onClick={() => setCurrentPage(number)}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
