import React from "react";
import { toast } from "react-toastify";

const ConfirmModal = ({ id, name, refetch }) => {
    const deleteOrder = () =>{
        fetch(`http://localhost:5000/order/${id}`,{
            method: "DELETE",
            headers: {
                'content-type':'application/json',
                'authorization': localStorage.getItem('accessToken'),
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                toast.success("Oder Deleted Successfully.")
                refetch();
            }
            else{
                toast.error("Something went wrong please try again.")
            }
        })

    }
  return (
    <div>
      <label for="confirmModal" class="btn modal-button btn-secondary">
        delete
      </label>

      <input type="checkbox" id="confirmModal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure you want to delete {name} order?
          </h3>
          <div class="modal-action">
            <label for="confirmModal" onClick={deleteOrder} class="btn btn-error">
              Confirm
            </label>
            <label for="confirmModal" class="btn btn-info">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
