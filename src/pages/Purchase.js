import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import auth from "../firebase.init";

const Purchase = () => {
  const { id } = useParams();
  const [err, setErr] = useState("");
  const [user, loading] = useAuthState(auth);
  const [product, setProduct] = useState({});
  const [quant, setQuant] = useState(0);

  useEffect(() => {
    fetch(`https://gear-bikes-server.onrender.com/product/${id}`, {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setQuant(data.minQuantity);
      });
  }, []);

  if (loading || !product) {
    return <Loading />;
  }

  const addOrder = (e) => {
    setErr("");
    // console.log("inside")
    e.preventDefault();
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const quantity = e.target.quantity.value;
    const status = "unpaid";
    // console.log("address: ",address, " phone:",phone," quantity:", quantity);

    if (quantity > parseInt(product.available)) {
      setErr("Please add quantity that much we have currently.");
      return;
    }
    if (quantity < parseInt(product.minQuantity)) {
      setErr("Sorry can not add less then minimum quantity.");
      return;
    }
    if (address.length < 10) {
      setErr("Please give proper address.");
      return;
    }
    if (phone.length < 10) {
      setErr("Please give proper phone number.");
      return;
    }

    setErr("");

    const order = {
      productId: product._id,
      userId: user._id,
      email: user.email,
      userName: user.name,
      productName: product.name,
      productImg: product.img,
      address: address,
      phone: phone,
      quantity: quantity,
      price: product.price,
      status,
    };

    fetch("https://gear-bikes-server.onrender.com/addOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Your Order Added");
        } else {
          toast.error("Something went wrong please try again!");
        }
      });
  };

  return (
    <div className="bg-gradient-to-r from-yellow-100 to-base-100">
      <Navbar />
      <h3 className="uppercase text-2xl font-semibold text-secondary text-center my-28 lg:mt-5 lg:mb-2">
        Add to your Order list
      </h3>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="bg-white shadow-lg flex flex-col items-center mx:w-sm">
            <img src={product.img} alt="product" className="lg:max-w-lg" />
            <div className="mt-4 p-4 text-center lg:w-96">
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
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={addOrder}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    disabled
                    value={user.displayName}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    disabled
                    required
                    value={user.email}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter Full Address"
                    className="input input-bordered"
                    name="address"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    type="number"
                    value={quant}
                    required
                    onChange={(e) => setQuant(e.target.value)}
                    className="input input-bordered"
                    name="quantity"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="Enter your contact number"
                    className="input input-bordered"
                    name="phone"
                  />
                </div>
                {err && <p className="alert alert-error shadow-sm">{err}</p>}
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={
                      parseInt(quant) < parseInt(product.minQuantity) ||
                      parseInt(quant) > product.available
                    }
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
