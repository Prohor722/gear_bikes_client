import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import Search from "../../components/Search";
import DeleteButton from "./DeleteButton";

const ManageProducts = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [deleteStatus, setDeleteStatus] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/products?search=${search}&page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
        setPages(Math.ceil(parseInt(data?.count) / 12));
      });
  }, [search, currentPage, deleteStatus]);

  if (loading) {
    return <Loading />;
  }

  
  return (
    <div>
      <h2 className="text-xl font-semibold text-secondary mb-2 text-center">
        Manage Products
      </h2>
      <div className="mx-4">
        <Search
          setSearch={setSearch}
          setLoading={setLoading}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full z-10">
            <thead>
              <tr>
                <th>No.</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Short Description</th>
                <th>Minimum Order</th>
                <th>Available</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((p, index) => (
                  <tr key={p?._id}>
                    <th>{index + 1}</th>
                    <th>
                      <div className="mask mask-squircle w-20 h-20">
                        <img src={p?.img} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </th>
                    <th title={p?.name}>
                      {p?.name?.length > 20
                        ? p?.name.slice(0, 20) + "..."
                        : p?.name}
                    </th>
                    <th title={p?.desc}>
                      {p?.desc?.length > 20
                        ? p?.desc.slice(0, 25) + "..."
                        : p?.desc}
                    </th>
                    <th>{p?.minQuantity}</th>
                    <th>{p?.available}</th>
                    <th>{p?.price}</th>
                    <th>
                      <DeleteButton
                        product_id={p?._id}
                        name={p?.name}
                        deleteStatus={deleteStatus}
                        setDeleteStatus={setDeleteStatus}
                      />
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="btn-group flex my-10 justify-center">
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

export default ManageProducts;
