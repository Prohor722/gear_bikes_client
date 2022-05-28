import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  return (
    <div className="card card-compact lg:w-90 mt-6 bg-base-100 shadow-xl border">
      <figure>
        <img src={product.img} className="lg:h-60 lg:w-60" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Product: {product.name}</h2>
        <p>{product.desc.slice(0, 120)}...</p>
        <h5>Available Quantity: {product.available}</h5>
        <h5>Minimum Order: {product.minQuantity}</h5>
        <h5>Price per Unit: {product.price}</h5>
        <div className="card-actions justify-end">
          <Link
            to={`/purchase/${product._id}`}
            className="btn btn-primary hover:btn-info hover:text-white"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
