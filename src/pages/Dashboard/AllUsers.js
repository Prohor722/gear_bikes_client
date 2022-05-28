import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`https://lit-ravine-76252.herokuapp.com/users`, {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    }).then((res) => res.json())
  );

  const makeAdmin = (id) => {
    fetch(`https://lit-ravine-76252.herokuapp.com/makeAdmin/${id}`, {
      method: "PUT",
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("New Admin added.");
          refetch();
        } else {
          toast.error("Something went wrong please try again.");
        }
      });
  };

  if (isLoading || !users) {
    return <Loading />;
  }
  return (
    <div>
      <h2>Al Users</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((u, index) => (
                  <tr key={u?._id}>
                    <th>{index + 1}</th>
                    <th>
                      <div className="mask mask-squircle w-20 h-20">
                        <img src={u?.img} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </th>
                    <th>{u?.name}</th>
                    <th>{u?.email}</th>
                    <th>{u?.address}</th>
                    <th>{u?.phone}</th>
                    <th>
                      {u?.role === "admin" ? (
                        <p className="pl-2 text-success text-lg">{u?.role}</p>
                      ) : (
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => makeAdmin(u?._id)}
                        >
                          Make Admin
                        </button>
                      )}
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
