import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import useUser from "../../hooks/useUser";

const MyProfile = () => {
  const [userData,loading] = useUser();
  // console.log(userData);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imageStorageKey = "babbbc32e0d550e6d017e38db2462b2b";

  if (!userData || loading) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    
    if(!data.name && !data.image[0] && !data.address && !data.phone){
      return;
    }
    let {name, address,phone } = data;
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

    fetch(url,{
      method: "POST",
      body: formData,
    })
    .then(res=>res.json())
    .then(result=>{
      if(result.success){
        const img = result.data.url;
        const email = userData.email;
        const id = userData._id;
        
        if(!name){ name = userData.name }
        if(!phone){ phone = userData?.phone || "no data"}
        if(!address){ address = userData?.phone || "no data"}

        const updateUser = {
          id,
          img,
          phone,
          name,
          address,
          email
        }
        //send to database
        fetch('http://localhost:5000/updateUser', {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem('accessToken')
          },
          body: JSON.stringify(updateUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.modifiedCount){
              toast.success("You have updated your profile.")
            }
            else{
              toast.error("Something went wrong!!")
            }
          });
      }
    })
  };
  return (
    <div>
      <h2 className="text-xl font-bold text-secondary text-center">
        My Profile
      </h2>
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row">
          <div class="card lg:w-96 lg:h-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={userData.img} alt="avatar" />
                </div>
              </div>
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title text-secondary">Name: {userData?.name}</h2>
              <p>Email: {userData?.email}</p>
              <p>Phone: {userData?.phone}</p>
              <p>Address: {userData?.address}</p>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Update Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    minLength: {
                      value: 3,
                      message: "Please use your name.",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  className="input input-bordered w-full max-w-xs"
                  {...register("image")}
                />
                
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter Phone Number"
                  className="input input-bordered w-full max-w-xs"
                  {...register("phone", {
                    minLength: {
                      value: 10,
                      message: "Must be 10 characters or more.",
                    },
                  })}
                />
                <label className="label">
                  {errors.phone?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.phone.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Enter Your Address"
                  className="input input-bordered w-full max-w-xs"
                  {...register("address", {
                    minLength: {
                      value: 10,
                      message: "Must be 10 characters or more.",
                    },
                  })}
                />
                <label className="label">
                  {errors.address?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                type="submit"
                className="btn btn-success w-full max-w-xs"
                value="Login"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
