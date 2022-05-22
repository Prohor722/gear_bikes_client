import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center justify-center">
        <div>
            <h2 className="text-6xl font-bold px-24">What ever Part you want you can get..</h2>
        </div>
      <div class="h-96 carousel carousel-vertical rounded-box">
        <div class="carousel-item h-full">
          <img src="https://i.pinimg.com/originals/d5/59/7e/d5597e68bcfe08160eb5abf533bf1407.jpg" />
        </div>
        <div class="carousel-item h-full">
          <img src="https://media.istockphoto.com/photos/black-v-shape-vintage-motorcycle-engine-isolated-on-white-background-picture-id1040330288?k=20&m=1040330288&s=612x612&w=0&h=VffRz5MqK4_YU36tYVHGKezz0UzK2apmQ17d6QuvCqw=" />
        </div>
        <div class="carousel-item h-full">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaUgIA8a-Ikzs8Y1RTY57RQKq3F29ObW-Te3MIIWwP8Pe54qYU1tjJfLs5EApHAHDzKFk&usqp=CAU" />
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
