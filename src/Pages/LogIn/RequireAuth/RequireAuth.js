import React, { Children } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

import Spinnerr from '../Spinner/Spinnerr';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    console.log('inside require auth', user);
    const location = useLocation()
    if (loading)
        return <Spinnerr></Spinnerr>
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children
};

export default RequireAuth;
