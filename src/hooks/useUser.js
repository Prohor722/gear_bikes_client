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
    fetch(`https://lit-ravine-76252.herokuapp.com/user/${user?.email}`, {
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
// fetch(`https://lit-ravine-76252.herokuapp.com/user/${user.email}`,{method: 'GET',
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
