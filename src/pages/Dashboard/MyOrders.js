import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import ConfirmModal from "./ConfirmModal";

const MyOrders = () => {
  const [user, loading, error] = useAuthState(auth);
//   console.log(user?.email);

  const { data: orders, isLoading, refetch } = useQuery("orders", () =>
    fetch(`http://localhost:5000/orders/${user?.email}`,{
        method: "GET",
        headers:{
            authorization: localStorage.getItem('accessToken')
        }
    }).then((res) =>
      res.json()
    )
  );

  const copyId = id =>{
    navigator.clipboard.writeText(id);
  }

  if (loading || isLoading || !orders) {
    return <Loading />;
  }
  
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
                  <div className="flex">
                      <Link to={`/dashboard/payment/${o?._id}`} className="btn btn-xs btn-success mr-2">pay</Link>
                        <ConfirmModal id={o._id} name={o.productName} refetch={refetch} />
                  </div>
                   : 
                   <div>
                     <p className="text-success">{o?.status}</p>
                     <p className="text-secondary pr-2">{o?.transactionId}</p>
                     <button 
                     className="btn btn-xs btn-primary" 
                     title={o.transactionId}
                     onClick={()=>copyId(o.transactionId)}
                     id={`copyBtn-${o._id}`}
                      >copy transactionID
                     </button>
                    </div>}
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
