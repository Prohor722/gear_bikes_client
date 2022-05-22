import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center text-neutral pt-20 pb-28">
        <h2 className="text-6xl font-bold px-20">
          What ever Part you want you can get..
        </h2>
        <img className="lg:w-50 lg:h-96 mt-10 lg:mt-0 lg:pr-10" src="https://i.pinimg.com/originals/d5/59/7e/d5597e68bcfe08160eb5abf533bf1407.jpg" alt='' />
    </div>
  );
};

export default Banner;
