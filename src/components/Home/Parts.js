import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import SingleProduct from "./SingleProduct";

const Parts = () => {
  const { data: products, isLoading } = useQuery("products", () =>
    fetch("https://gear-bikes-server.onrender.com/latestProducts").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }
  // const [products , setProducts] = useState([]);
  // fetch('https://gear-bikes-server.onrender.com/latestProducts')
  // .then(res=>res.json())
  // .then(data=>setProducts(data))
  return (
    <div className="py-0 lg:py-20 bg-base-100">
      <h2 className="text-4xl font-bold text-center mb-6">Parts</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-6 lg:mx-28">
        {products[0]?._id && products.map((p) => (
          <SingleProduct key={p._id} product={p} />
        ))}
      </div>
      <div className="">
        <Link
          to="/products"
          className="block w-20 ml-auto pb-10 lg:pb-0 lg:mr-20 mt-10 text-lg font-bold text-secondary"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default Parts;
