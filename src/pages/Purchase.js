import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Purchase = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery("product", () =>
    fetch(`http://localhost:5000/product/${id}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div class="hero min-h-screen bg-gradient-to-r from-yellow-100 to-base-100">
      <div class="hero-content flex-col lg:flex-row">
        <div className="bg-white shadow-lg">
          <img
            src={product.img}
            alt="product"
            class="lg:max-w-sm"
          />
          <div className="mt-4 p-4">
            <h1 className="text-xl font-semibold">
              Product Name : {product.name}
            </h1>
            <h1 className="text-xl font-semibold">
              Minimum Order : {product.minQuantity}
            </h1>
            <h1 className="text-xl font-semibold">
              Available Product : {product.available}
            </h1>
            <h1 className="text-xl font-semibold">
              Price per Unit : $ {product.price}
            </h1>
          </div>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
