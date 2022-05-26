import React from 'react';
import { toast } from 'react-toastify';

const DeleteButton = ({name, id, refetch}) => {

    const deleteProduct = () =>{
        fetch(`http://localhost:5000/product/${id}`, {
          method: "DELETE",
          headers: {
            authorization: localStorage.getItem("accessToken"),
          },
        }).then((res) => res.json())
        .then(data=>{
            if(data.deletedCount){
                toast.success("Deleted Product");
                refetch();
            }
            else{
                toast.error("Try again!!");
            }
        })
      }

    return (
        <div>
      <label for="confirmModal" class="btn modal-button btn-xs btn-secondary">
        delete
      </label>

      <input type="checkbox" id="confirmModal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure you want to delete {name} ?
          </h3>
          <div class="modal-action">
            <label for="confirmModal" onClick={deleteProduct} class="btn btn-error">
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

export default DeleteButton;