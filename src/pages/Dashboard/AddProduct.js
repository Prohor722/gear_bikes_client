import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imageStorageKey = "babbbc32e0d550e6d017e38db2462b2b";

  const onSubmit = async (data) => {
    
    let { name, price, desc, quantity, minOrder } = data;
    let img;
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(result => {
        if (result.success) {
          img = result.data.url;
          }
          const addProduct = { name,img , price, desc, available:quantity, minQuantity:minOrder };

          //send to database
          fetch("http://localhost:5000/addProduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: localStorage.getItem("accessToken"),
            },
            body: JSON.stringify(addProduct),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
              if (data.insertedId) {
                toast.success("New Product Added.");
              }else {
                toast.error("Something went wrong!!");
              }
            });
        })
      
  }


  return (
    <div>
      <h2 className="text-lg text-secondary text-center font-semibold mt-2 mb-4">Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
        <div className="flex flex-col lg:flex-row">
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Product Name/Title"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required.",
                  },
                  minLength: {
                    value: 3,
                    message: "Please enter product name.",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.name.message}
                  </span>
                )}
                {errors.name?.type === "required" && (
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
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is required.",
                  },
                })}
              />
              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text my-2">Short Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Give a short description about the product"
                className="input input-bordered w-full max-w-xs"
                {...register("desc", {
                  minLength: {
                    value: 10,
                    message: "Must be 10 characters or more.",
                  },
                  required: {
                    value: true,
                    message: "Short Description is required.",
                  },
                })}
              />
              <label className="label">
                {errors.desc?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.desc.message}
                  </span>
                )}
                {errors.desc?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.desc.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <div className="ml-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Enter Your Address"
                className="input input-bordered w-full max-w-xs"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Quantity is required!!",
                  },
                })}
              />
              <label className="label">
                {errors.quantity?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.quantity.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Minimum Order</span>
              </label>
              <input
                type="number"
                placeholder="Enter Minimum Order"
                className="input input-bordered w-full max-w-xs"
                {...register("minOrder", {
                  required: {
                    value: 10,
                    message: "Must add minimum Order.",
                  },
                })}
              />
              <label className="label">
                {errors.minOrder?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.minOrder.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Price per Unit</span>
              </label>
              <input
                type="number"
                placeholder="Enter Your Address"
                className="input input-bordered w-full max-w-xs"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Must add Product Price.",
                  },
                })}
              />
              <label className="label">
                {errors.price?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>
          </div>
        </div>

        <input
          type="submit"
          className="btn btn-success w-full"
          value="ADD"
        />
      </form>
    </div>
  );
};

export default AddProduct;
