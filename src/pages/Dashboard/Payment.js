import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import useUser from "../../hooks/useUser";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1Q9BHxdqozenec4NBa0OE3OXf101x1a5mCCQSmK4r4a2I6165CdGK4QgNfRXMqmWOpB3t5f0ESFynYPCyyWbxq00w9Jbqlee"
);

const Payment = () => {
  const { id } = useParams();
  const [userData, loading] = useUser();
  const url = `http://localhost:5000/getOrder/${id}`;

  console.log("id: ", id);
  const { data: order, isLoading } = useQuery(["buyProducts", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    }).then((res) => res.json())
  );

  console.log("User Data: ", userData);
  console.log("Order Data: ", order);

  if (isLoading || loading) {
    return <Loading />;
  }
  return (
    <div className="w-full flex flex-col justify-center lg:flex-row">
      <div className="card bg-base-100 mx-4 lg:w-96 shadow-xl my-12">
        <div className="card-body text-center">
          <p className="text-secondary font-bold">Hello, {userData.name}</p>
          <img src={order.productImg} alt="product" className="w-28 mx-auto" />
          <h2 className="text-secondary text-lg font-semibold">
            Pay for {order.productName}
          </h2>
          <p>
            Per Unit Price:{" "}
            <span className="text-orange-600">${order.price}</span>
          </p>
          <p>
            Order Quantity :{" "}
            <span className="text-orange-600">{order.quantity}</span>
          </p>
          <p>
            Please pay:{" "}
            <span className="font-semibold">
              ${parseInt(order.price) * parseInt(order.quantity)}
            </span>
          </p>
        </div>
      </div>
      <div className="card flex-shrink-0 my-auto w-full h-auto lg:max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} userData={userData} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
