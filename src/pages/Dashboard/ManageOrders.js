import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";

const ManageOrders = () => {
  const [status, setStatus] = useState('all');
  const { data: orders, isLoading, refactor } = useQuery(["allOrders", status], () =>
    fetch(`http://localhost:5000/orders/sortBy/${status}`, {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    }).then((res) => res.json())
  );

  const sort =e=>{
      e.preventDefault();
      const status= e.target.sort.value;
      console.log(status);
      setStatus(status);
      console.log(status);
      refactor();
  }


  if (isLoading || !orders) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-xl font-semibold text-secondary mb-2 text-center">
        Manage Orders
      </h2>
      <form className="flex flex-row-reverse mb-2" onSubmit={sort}>
        <select name="sort" class="select select-bordered select-xs max-w-xs">
          <option value="all">All</option>
          <option value="paid">Pending</option>
          <option value="unpaid">Unpaid</option>
          <option value="shipped">Shipped</option>
        </select>
        <button className="btn btn-xs btn-primary ml-2" type="submit">sort</button>
      </form>
      <div>
        <div class="overflow-x-auto">
          <table class="table table-compact w-full">
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
                      <div class="mask mask-squircle w-20 h-20">
                        <img
                          src={o?.productImg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </th>
                    <th>{o?.productName}</th>
                    <th>{o?.email}</th>
                    <th>{o?.address}</th>
                    <th>{o?.phone}</th>
                    <th>{o?.quantity}</th>
                    <th>{o?.price}</th>
                    <th>
                      {(o?.status === "unpaid") && <p className="text-secondary">unpaid</p>}
                      {(o?.status === "paid") && <div>
                      <p className="text-accent">pending</p>
                      <button className="btn btn-xs btn-neutral text-white">ship</button>
                        </div>}
                      {(o?.status === "shipped") && <p className="text-success">shipped</p>}
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
