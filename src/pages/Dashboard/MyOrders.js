import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user, loading, error] = useAuthState(auth);
//   console.log(user?.email);

  const { data: orders, isLoading } = useQuery("orders", () =>
    fetch(`http://localhost:5000/orders/${user.email}`,{
        method: "GET",
        headers:{
            authorization: localStorage.getItem('accessToken')
        }
    }).then((res) =>
      res.json()
    )
  );

  if (loading || isLoading || !orders) {
    return <Loading />;
  }
//   if (orders) {
//     // console.log(orders);
//   }
  if(error){
      return <p className="text-4xl text-secondary">Something went wrong</p>
  }
  return (
    <div>
        <h3 className="text-lg text-center text-secondary font-semibold mb-2">My Orders</h3>
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
            { orders && orders.map((o,index) => (
              <tr key={o?._id}>
                <th>{index+1}</th>
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
                  {
                  (o?.status==='unpaid')? 
                  <div>
                      <button className="btn btn-success">pay</button>
                      <button className="btn btn-secondary ml-2">cancel</button>
                  </div>
                   : 
                   <p className="text-success">{o?.status}</p>}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
