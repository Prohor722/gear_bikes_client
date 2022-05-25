import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  return (
    <div class="card card-compact mt-6 bg-base-100 shadow-xl">
      <figure>
        <img src={product.img} className="lg:h-60 lg:w-60" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Product: {product.name}</h2>
        <p>{product.desc}</p>
        <h5>Available Quantity: {product.available}</h5>
        <h5>Minimum Order: {product.minQuantity}</h5>
        <h5>Price per Unit: {product.price}</h5>
        <div class="card-actions justify-end">
          <Link to={`/purchase/${product._id}`} class="btn btn-primary hover:btn-info hover:text-white">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
