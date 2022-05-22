import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card glass">
      <div class="avatar">
        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://api.lorem.space/image/face?hash=3174" />
        </div>
      </div>
    </div>
  );
};

export default Review;
