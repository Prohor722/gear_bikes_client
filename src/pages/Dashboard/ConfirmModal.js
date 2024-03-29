import React from "react";
import { toast } from "react-toastify";

const ConfirmModal = ({ id, name, refetch }) => {
  const deleteOrder = () => {
    fetch(`https://gear-bikes-server.onrender.com/order/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Oder Deleted Successfully.");
          refetch();
        } else {
          toast.error("Something went wrong please try again.");
        }
      });
  };
  return (
    <div>
      <label
        htmlFor={`confirmModal-${id}`}
        className="btn modal-button btn-xs btn-secondary"
      >
        delete
      </label>

      <input type="checkbox" id={`confirmModal-${id}`} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete {name} order?
          </h3>
          <div className="modal-action">
            <label
              htmlFor={`confirmModal-${id}`}
              onClick={deleteOrder}
              className="btn btn-error"
            >
              Confirm
            </label>
            <label htmlFor={`confirmModal-${id}`} className="btn btn-info">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
