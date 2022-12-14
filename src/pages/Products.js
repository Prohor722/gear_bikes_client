import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { useQuery } from "react-query";
import SingleProduct from "../components/Home/SingleProduct";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://gearbikesserver-production.up.railway.app/products?search=${search}&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
        setPages(Math.ceil(parseInt(data?.count) / 12));
      });
  }, [search, currentPage]);

  if (loading || !products) {
    return <Loading />;
  }

  return (
    <div className="">
      <Navbar />
      <div className="my-20">
        <h2 className="text-4xl mb-10 font-semibold text-secondary text-center">
          All Products
        </h2>

        <div className="mx-4">
          <Search
            setSearch={setSearch}
            setLoading={setLoading}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-2 lg:mx-20">
          {products?.length &&
            products.map((p) => <SingleProduct key={p?._id} product={p} />)}
        </div>
        {products.length || (
          <p className="text-center text-secondary text-4xl px-10 lg:px-0 my-20">
            No product to show
          </p>
        )}

        <div className="btn-group flex mt-10 justify-center">
          {[...Array(pages).keys()].map((number) => (
            <button
              className={
                currentPage === number ? "btn btn-active" : "btn btn-accent"
              }
              onClick={() => setCurrentPage(number)}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
