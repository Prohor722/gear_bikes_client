import React from "react";
import bike from "../../assets/images/bike_home.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-yellow-100 to-base-100 pb-24">
      <img src={bike} style={{ margin: "-100px" }} alt="bike" className="" />
      <div className="text-center max:w-xs mt-28 lg:mt-0">
        <h3 className="text-4xl font-bold text-primary">GearBikes</h3>
        <p className="w-50 px-20 text-xl text-gray-500 font-bold my-2">
          Every type of parts we deliver from vintage to latest , we have all
          collection.
        </p>
        <p className="font-bold">
          Order more than 5k get{" "}
          <span className="text-secondary">free delivery</span> on 72
          countries..<div className="badge badge-secondary">LIMITED OFFER</div>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
