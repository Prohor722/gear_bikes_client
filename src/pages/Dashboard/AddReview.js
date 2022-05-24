import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  const postReview = (e) => {
    e.preventDefault();
    const post = e.target.review.value;
    const email = user.email;

    // if (user.email && post) {
    //   const review = {
    //     email,
    //     post,
    //   };
    //   fetch("", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //       authorization: localStorage.getItem("accessToken"),
    //     },
    //     body: JSON.stringify(),
    //   });
    // }
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
                <p>Rate:</p>
                <FontAwesomeIcon className="text-info text-xl" icon={faStar} value="1"
                name="star1" onClick="text-primary" />
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
