import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const BusinessSummary = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-yellow-100 to-base-100">
      <h2 className="uppercase text-4xl font-bold text-center">
        Millions Business Trust Us
      </h2>
      <h3 className="uppercase text-2xl text-info text-center">
        Try to Understand users expectation
      </h3>
      {/* <div style={{ background: `url(${map})`, opacity: 0.3 , backgroundSize: '90%', backgroundRepeat: 'no-repeat'}}>
            </div> */}

      <div className="grid  lg:grid-cols-4 mt-10">
        <div className="flex flex-col items-center justify-center">
          <FontAwesomeIcon
            className="w-16 h-16 text-secondary"
            icon={faEarthAmericas}
          />
          <h4 className="text-4xl font-semibold text-info">50+</h4>
          <h6 className="text-xl font-bold text-secondary">Countries</h6>
        </div>

        <div className="flex flex-col items-center justify-center mt-10 lg:mt-0">
          <FontAwesomeIcon className="w-16 h-16 text-secondary" icon={faBox} />
          <h4 className="text-4xl font-semibold text-info">50000+</h4>
          <h6 className="text-xl font-bold text-secondary">Shipments</h6>
        </div>

        <div className="flex flex-col items-center justify-center mt-10 lg:mt-0">
          <FontAwesomeIcon
            className="w-16 h-16 text-secondary"
            icon={faPeopleGroup}
          />
          <h4 className="text-4xl font-semibold text-info">500+</h4>
          <h6 className="text-xl font-bold text-secondary">Happy Clients</h6>
        </div>

        <div className="flex flex-col items-center justify-center mt-10 lg:mt-0">
          <FontAwesomeIcon
            className="w-16 h-16 text-secondary"
            icon={faThumbsUp}
          />
          <h4 className="text-4xl font-semibold text-info">350+</h4>
          <h6 className="text-xl font-bold text-secondary">Feedbacks</h6>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center p-10 mx-2 lg:mx-20 shadow-2xl mt-10 rounded-md border border-yellow-100">
        <div>
          <h2 className="text-4xl font-bold text-secondary mb-2">
            Have any question about us or get a product request ?
          </h2>
          <h4 className="text-2xl font-semibold">
            Don't hesitate to contact us
          </h4>
        </div>
        <button className="btn btn-wide btn-secondary my-4 lg:my-0">
          Request For Quote
        </button>
        <button className="ml-4 btn btn-info hover:btn-primary hover:text-white">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default BusinessSummary;
