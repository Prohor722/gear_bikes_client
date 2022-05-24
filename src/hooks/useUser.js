import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useUser = () => {

    const [user, loading] = useAuthState(auth);
    const [userData, setUserData] = useState({});

    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/user/${user.email}`,{method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization' : localStorage.getItem('accessToken')
                }
            }).then(res=>res.json())
            .then(data=>{
                setUserData(data);
            })
        }
    },[user])


    return [userData, loading];
};

export default useUser;