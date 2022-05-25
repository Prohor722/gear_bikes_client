import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";

const ManageOrders = () => {
  const { data: orders, isLoading } = useQuery("allOrders", () =>
    fetch(`http://localhost:5000/orders`).then((res) => res.json())
  );

  if (isLoading || !orders) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-xl font-semibold text-secondary mb-2 text-center">
        Manage Orders
      </h2>
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
                      {o?.status === "unpaid" ? (
                        <button className="btn btn-success">pay</button>
                      ) : (
                        <p className="text-success">{o?.status}</p>
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
