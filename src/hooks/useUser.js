import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";

const useUser = () => {
  const [user, loading] = useAuthState(auth);

  const {
    data: userData,
    isLoading,
    refetch,
  } = useQuery(["loadUserData", user], () =>
    fetch(`http://localhost:5000/user/${user?.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
    }).then((res) => res.json())
  );

  return [userData, loading, isLoading, refetch];
};

export default useUser;

// const [userData, setUserData] = useState({});

// useEffect(()=>{
//     if(user){
// fetch(`http://localhost:5000/user/${user.email}`,{method: 'GET',
//     headers: {
//         'content-type': 'application/json',
//         'authorization' : localStorage.getItem('accessToken')
//     }
// }).then(res=>res.json())
//         .then(data=>{
//             setUserData(data);
//         })
//     }
// },[user])
