import React from "react";
import { toast } from "react-toastify";

const DeleteButton = ({ name, product_id, deleteStatus, setDeleteStatus }) => {
  const deleteProduct = () => {
    fetch(`http://localhost:5000/product/${product_id}`, {
      method: "DELETE",
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Deleted Product");
          setDeleteStatus(!deleteStatus);
        } else {
          toast.error("Try again!!");
        }
      });
  };

  return (
    <div>
      <label htmlFor={`modal-${product_id}`} className="btn modal-button btn-xs btn-secondary">
        Delete
      </label>

      <input
        type="checkbox"
        id={`modal-${product_id}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete {name}?
          </h3>
          <div className="modal-action">
            <label htmlFor={`modal-${product_id}`} className="btn btn-secondary" onClick={() => deleteProduct(product_id)}>
              Delete
            </label>
            <label htmlFor={`modal-${product_id}`} className="btn btn-primary">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteButton;
