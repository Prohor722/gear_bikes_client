import React from "react";

const SingleProduct = ({ product }) => {
  return (
    <div class="card card-compact mt-6 bg-base-100 shadow-xl">
      <figure>
        <img src={product.img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Product: {product.name}</h2>
        <p>{product.desc}</p>
        <h5>Available Quantity: {product.available}</h5>
        <h5>Price per Unit: {product.price}</h5>
        <div class="card-actions justify-end">
          <button class="btn btn-primary hover:btn-info hover:text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
