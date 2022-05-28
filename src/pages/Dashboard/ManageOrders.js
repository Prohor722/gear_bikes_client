import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

const ManageOrders = () => {
  const [status, setStatus] = useState("all");
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["allOrders", status], () =>
    fetch(`https://lit-ravine-76252.herokuapp.com/orders/sortBy/${status}`, {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    }).then((res) => res.json())
  );

  const sort = (e) => {
    e.preventDefault();
    const status = e.target.sort.value;
    setStatus(status);
    refetch();
  };

  const shipped = (id) => {
    fetch(`https://lit-ravine-76252.herokuapp.com/orderShipped/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Product Shipped");
          refetch();
        } else {
          toast.error("Product Shipped Error! Try again!!");
        }
      });
  };

  if (isLoading || !orders) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-xl font-semibold text-secondary mb-2 text-center">
        Manage Orders
      </h2>
      <form className="flex flex-row-reverse mb-2" onSubmit={sort}>
        <select
          name="sort"
          className="select select-bordered select-xs max-w-xs"
        >
          <option value="all">All</option>
          <option value="paid">Pending</option>
          <option value="unpaid">Unpaid</option>
          <option value="shipped">Shipped</option>
        </select>
        <button className="btn btn-xs btn-primary ml-2" type="submit">
          sort
        </button>
      </form>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full z-10">
            <thead>
              <tr>
                <th>No.</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((o, index) => (
                  <tr key={o?._id}>
                    <th>{index + 1}</th>
                    <th>
                      <div className="mask mask-squircle w-20 h-20">
                        <img
                          src={o?.productImg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </th>
                    <th title={o?.productName}>
                      {o?.productName.length > 20
                        ? o?.productName.slice(0, 10) + "..."
                        : o?.productName}
                    </th>
                    <th>{o?.email}</th>
                    <th title={o?.address} >
                      {o?.address.length>25 ? o?.address.slice(0,25)+'...' : o?.address}
                      </th>
                    <th>{o?.phone}</th>
                    <th>{o?.quantity}</th>
                    <th>{o?.price}</th>
                    <th>
                      {o?.status === "unpaid" && (
                        <p className="text-secondary">unpaid</p>
                      )}
                      {o?.status === "paid" && (
                        <div>
                          <p className="text-accent">pending</p>
                          <button
                            className="btn btn-xs btn-neutral text-white"
                            onClick={() => shipped(o._id)}
                          >
                            ship now
                          </button>
                        </div>
                      )}
                      {o?.status === "shipped" && (
                        <p className="text-success">shipped</p>
                      )}
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

export default ManageOrders;
