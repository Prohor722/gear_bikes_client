import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { success } from "daisyui/src/colors";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import processingImg from "../../assets/images/paymentLoading.gif";

const CheckoutForm = ({ order, userData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { _id, price, productName, email, quantity, status } = order;
  const { name } = userData;
  const totalPrice = parseFloat(price) * parseInt(quantity);

  useEffect(() => {
    fetch("https://gear-bikes-server.onrender.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({ price: totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [totalPrice, order]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    // if(processing===false){
    //   return <Loading/>
    // }

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);

    //confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
            // orderId: order._id,
          },
        },
      });

    if (intentError) {
      setCardError(intentError.message);
      setSuccess("");
      setProcessing(false);
    } else {
      setProcessing(false);
      setCardError("");
      setTransactionId(paymentIntent.id);
      setSuccess("Congrats! Your payment is complicated.");

      //store payment on database
      const payment = {
        id: order._id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://gear-bikes-server.onrender.com/order/paid`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("accessToken"),
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          // console.log(data);
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {processing && (
          <img src={processingImg} className="w-24 mx-auto" alt=" " />
        )}
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-4 text-white"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && (
        <div className="text-success">
          <p>{success}</p>
          <p>
            Your transaction Id:{" "}
            <span className="text-orange-500 font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
