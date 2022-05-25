import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';

const AllUsers = () => {
    const { data: users, isLoading } = useQuery("users", () =>
    fetch(`http://localhost:5000/users`).then((res) => res.json())
  );

  const makeAdmin = (id) =>{
    fetch(`http://localhost:5000/makeAdmin/${id}`,{
        method: "PUT",
        headers:{
            authorization: localStorage.getItem('accessToken')
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
  }

  if (isLoading || !users) {
    return <Loading />;
  }
    return (
        <div>
            <h2>Al Users</h2>
            <div>
        <div class="overflow-x-auto">
          <table class="table table-compact w-full">
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
                      <div class="mask mask-squircle w-20 h-20">
                        <img
                          src={u?.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </th>
                    <th>{u?.name}</th>
                    <th>{u?.email}</th>
                    <th>{u?.address}</th>
                    <th>{u?.phone}</th>
                    <th>
                      { !u?.name ? 
                      <p className="text-success">{u?.role}</p>  
                       : 
                       <button className="btn btn-sm btn-success" onClick={()=>makeAdmin(u?._id)}>Make Admin</button>
                      }
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