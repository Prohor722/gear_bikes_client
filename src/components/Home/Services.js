import React from "react";
import man from "../../assets/images/men.png";
import cards from "../../assets/images/cards.png";
import { FaCheckCircle } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-white flex flex-col lg:flex-row items-center justify-center pt-4 lg:pt-10">
      <div className="flex flex-col text-center lg:text-left items-center lg:items-start text-lg font-semibold lg:w-1/2">
        <h3 className="text-4xl text-gray-400 font-bold">
          We provide the best service and support then any other company
        </h3>
        <div className="text-xl font-bold text-success flex items-center lg:items-start flex-col uppercase">
          <div className="flex flex-col lg:flex-row items-center mt-4">
            <FaCheckCircle/>
            <p>Best Deals</p>
          </div>
          <div className="flex items-center mt-2 flex-col lg:flex-row">
            <FaCheckCircle />
            <p>Huge Collection of Products</p>
          </div>
          <div className="flex items-center mt-2 flex-col lg:flex-row">
            <FaCheckCircle />
            <p>Low Cost Delivery</p>
          </div>
          <div className="flex items-center mt-2 flex-col lg:flex-row">
            <FaCheckCircle />
            <p>money back guarantee</p>
          </div>
        </div>
        <img src={cards} className="w-60 h-8 mt-4" alt="cards" />
      </div>
      <img src={man} alt="" />
    </div>
  );
};

export default Services;
