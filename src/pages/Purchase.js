import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import auth from "../firebase.init";

const Purchase = () => {
  const { id } = useParams();
  const [err, setErr ]= useState("");
  const [user, loading, error] = useAuthState(auth);
  const [product, setProduct] = useState({});
  // const { data: product, isLoading } = useQuery("product", () =>
  // fetch(`http://localhost:5000/product/${id}`).then((res) => res.json())
  // );
  const [quant, setQuant] = useState(0);

  useEffect(()=>{
    fetch(`http://localhost:5000/product/${id}`)
    .then((res) => res.json())
    .then(data=>{
      setProduct(data);
      setQuant(data.minQuantity);
    })
  },[])

  if (loading || !product) {
    return <Loading />;
  }

  const addOrder = (e) => {
    setErr("");
    console.log("inside")
    e.preventDefault();
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const quantity = e.target.quantity.value;
    // console.log("address: ",address, " phone:",phone," quantity:", quantity);

    if(quantity> product.available){
      setErr('Please add quantity that much we currently.');
      return;
    }
    if(quantity< product.minQuantity){
      setErr('Sorry can not add less then minimum quantity.');
      return;
    }
    if(address.length< 10){
      setErr('Please give proper address.');
      return
    }
    if(phone.length< 10){
      setErr('Please give proper phone number.');
      return
    }

    setErr("");
    
    const order = {
      productId: product._id,
      userId : user._id,
      email : user.email,
      userName : user.name,
      productName : product.name,
      productImg : product.img,
      address : address,
      phone: phone,
      quantity: quantity,
      price: product.price
    }

    fetch('http://localhost:5000/addOrder',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        toast.success("Your Order Added");
      }
    })
  };

  return (
    <div class="hero min-h-screen bg-gradient-to-r from-yellow-100 to-base-100">
      <div class="hero-content flex-col lg:flex-row">
        <div className="bg-white shadow-lg">
          <img src={product.img} alt="product" class="lg:max-w-sm" />
          <div className="mt-4 p-4 text-center">
            <h1 className="text-xl font-semibold">
              Product Name :{" "}
              <span className="text-secondary">{product.name}</span>
            </h1>
            <h1 className="text-xl font-semibold">
              Minimum Order :{" "}
              <span className="text-secondary">{product.minQuantity}</span>
            </h1>
            <h1 className="text-xl font-semibold">
              Available Product :{" "}
              <span className="text-secondary">{product.available}</span>
            </h1>
            <h1 className="text-xl font-semibold">
              Price per Unit :{" "}
              <span className="text-secondary">{product.price}</span>$
            </h1>
          </div>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={addOrder}>
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  disabled
                  value={user.displayName}
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  disabled
                  required
                  value={user.email}
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter Full Address"
                  class="input input-bordered"
                  name="address"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  value= {quant}
                  required
                  onChange={(e)=>setQuant(e.target.value)}
                  class="input input-bordered"
                  name="quantity"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  required
                  placeholder="Enter your contact number"
                  class="input input-bordered"
                  name="phone"
                />
              </div>
              {
                err && <p className="alert alert-error shadow-sm">{err}</p>
              }
              <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
