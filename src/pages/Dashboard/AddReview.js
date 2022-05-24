import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user, loading, error] = useAuthState(auth);
  const [rate, setRate]=useState(0);

  if (loading) {
    return <Loading />;
  }
  const postReview = (e) => {
    e.preventDefault();
    const post = e.target.review.value;
    const email = user.email;
    const name = user.displayName;

    if (user.email && post) {
      const review = {
        name,
        email,
        post,
        rate
      };
      fetch("http://localhost:5000/addReview", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("accessToken"),
        },
        body: JSON.stringify(review),
      })
      .then(res=>res.json())
      .then(data=>{
          if(data.insertedId){
              toast.success("Thank you for your feedback.")
            }
            else{
              toast.error("Something went wrong please try again.")
          }
      })
      ;
    }
  };
  return (
    <div>
      <div class="hero mt-10">
        <div class="hero-content flex-col lg:flex-row">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold text-secondary">GearBikes</h1>
            <p class="py-6">
              Your are a valuable customer to us. Your opinion and appreciation
              matters to us..
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form class="card-body" onSubmit={postReview}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-lg">Give Your Opinion</span>
                </label>
                <textarea
                  name="review"
                  type="text"
                  placeholder="Write here.."
                  class="textarea textarea-bordered"
                />
              </div>
              <div class="form-control mt-4 flex flex-row">
                <div class="rating" name="rate">
                  <input
                  onClick={()=>setRate(1)}
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400 clicked"
                  />
                  <input
                  onClick={()=>setRate(2)}
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                  onClick={()=>setRate(3)}
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                  onClick={()=>setRate(4)}
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  />
                  <input
                  onClick={()=>setRate(5)}
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>

              <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">
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
