import React, { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const email = user?.email;
      fetch(`http://localhost:5000/adminCheck/${email}`, {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("admin: ", admin);
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;
