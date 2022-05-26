import React, { useState } from "react";
import { useQuery } from "react-query";
import SingleProduct from "../components/Home/SingleProduct";
import Loading from "../components/Loading";
import Search from "../components/Search";

const Products = () => {
  const [search, setSearch] = useState("");
  const { data: products, isLoading } = useQuery(["allProducts", search], () =>
    fetch(`http://localhost:5000/products?search=${search}`,{
      method: "GET",
      headers: {
        "authorization" : localStorage.getItem('accessToken')
      }
    }).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-20">
      <h2 className="text-4xl mb-10 font-semibold text-secondary text-center">
        All Products
      </h2>

      <div className="mx-4">
        <Search setSearch={setSearch} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-2 lg:mx-20">
        {products.length &&
          products.map((p) => <SingleProduct key={p?._id} product={p} />)}
      </div>
      {products.length || (
        <p className="text-center text-secondary text-4xl px-10 lg:px-0 my-20">
          No product to show
        </p>
      )}
    </div>
  );
};

export default Products;
