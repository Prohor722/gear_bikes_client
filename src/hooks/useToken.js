import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState("");
    
    useEffect(()=>{
    const name = user?.user?.displayName;
    const email = user?.user?.email;
    const currentUser = {email, name};

    if(email && name){
        fetch(`http://localhost:5000/user`,{
          method:'PUT',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res=>res.json())
        .then(data=>{
            const token = data.token;
            localStorage.setItem("accessToken",`Bearer ${token}`);
            setToken(token);
        })
    }

    },[user]);

    return [token];
};

export default useToken;