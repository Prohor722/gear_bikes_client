import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const [rate, setRate] = useState(5);

  if (loading) {
    return <Loading />;
  }
  const postReview = (e) => {
    e.preventDefault();
    const post = e.target.review.value;
    const email = user.email;

    if (user.email && post) {
      const review = {
        email,
        post,
        rate,
      };
      fetch("https://gear-bikes-server.onrender.com/addReview", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("accessToken"),
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Thank you for your feedback.");
          } else {
            toast.error("Something went wrong please try again.");
          }
        });
    }
  };
  return (
    <div>
      <div className="hero mt-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-secondary">GearBikes</h1>
            <p className="py-6">
              Your are a valuable customer to us. Your opinion and appreciation
              matters to us..
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={postReview}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Give Your Opinion</span>
                </label>
                <textarea
                  name="review"
                  type="text"
                  placeholder="Write here.."
                  className="textarea textarea-bordered"
                />
              </div>
              <div className="form-control mt-4 flex flex-row">
                <div className="rating" name="rate">
                  <input
                    onClick={() => setRate(1)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 clicked"
                  />
                  <input
                    onClick={() => setRate(2)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    onClick={() => setRate(3)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    onClick={() => setRate(4)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    onClick={() => setRate(5)}
                    clicked
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
