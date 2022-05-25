
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Checkoutform from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1Q9BHxdqozenec4NBa0OE3OXf101x1a5mCCQSmK4r4a2I6165CdGK4QgNfRXMqmWOpB3t5f0ESFynYPCyyWbxq00w9Jbqlee"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://intense-badlands-42287.herokuapp.com/booking/${id}`;

  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="ml-20">
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-secondary font-bold">
            Hello, {appointment.patientName}
          </p>
          <h2 className="card-title">Pay for {appointment.treatment}</h2>
          <p>
            Your appointment:{" "}
            <span className="text-orange-600">{appointment.date}</span> at{" "}
            {appointment.slot}
          </p>
          <p>Please pay: ${appointment.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <Checkoutform appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
