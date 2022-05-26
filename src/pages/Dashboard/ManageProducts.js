import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import DeleteButton from "./DeleteButton";

const ManageProducts = () => {
  const { data: products, isLoading, refetch } = useQuery("manageProducts", () =>
    fetch('http://localhost:5000/products', {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    }).then((res) => res.json())
  );

  if (isLoading || !products) {
    return <Loading />;
  }
    return (
        <div>
      <h2 className="text-xl font-semibold text-secondary mb-2 text-center">
        Manage Products
      </h2>
      <div>
        <div class="overflow-x-auto">
          <table class="table table-compact w-full z-10">
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
                      <div class="mask mask-squircle w-20 h-20">
                        <img
                          src={p?.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </th>
                    <th>{p?.name}</th>
                    <th title={p?.desc}>{p?.desc.slice(0,20)}...</th>
                    <th>{p?.price}</th>
                    <th>{p?.minQuantity}</th>
                    <th>{p?.available}</th>
                    <th>
                      <DeleteButton id={p?._id} refetch={refetch} name={p?.name} />
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default ManageProducts;