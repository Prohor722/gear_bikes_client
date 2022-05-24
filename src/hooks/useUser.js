import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../components/Loading';
import auth from '../firebase.init';

const useUser = () => {

    const [user, loading, error] = useAuthState(auth);
    const [userData, setUserData] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/user/${user.email}`,{method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization' : localStorage.getItem('accessToken')
            }
        }).then(res=>res.json())
        .then(data=>{
            setUserData(data);
        })
    },[user])

    if(loading){
        return <Loading/>
    }

    return [userData,loading];
};

export default useUser;