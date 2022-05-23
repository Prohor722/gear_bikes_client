import React from "react";
import bike1 from '../../assets/images/bike.png'

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center text-secondary lg:pt-20 lg:pb-28">
        <h2 className="text-6xl font-bold lg:px-20">
          What ever Part you want you can get..
        </h2>
        <img className="lg:w-50 lg:h-96 mt-10 lg:mt-0 lg:pr-10" src={bike1} alt='' />
    </div>
  );
};

export default Banner;
