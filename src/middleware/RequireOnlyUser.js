import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';

const RequireOnlyUser = ({children}) => {
    const [user, loading ] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if(loading || adminLoading){
        return <Loading/>
    }
    if(admin){
        return <Navigate to="/" state={{from:location}} replace/>
    }
    return children;
};

export default RequireOnlyUser;