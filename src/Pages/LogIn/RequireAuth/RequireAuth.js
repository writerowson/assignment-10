import React, { Children } from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

import Spinnerr from '../Spinner/Spinnerr';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    console.log('inside require auth', user);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );

    const location = useLocation()
    if (loading)
        return <Spinnerr></Spinnerr>
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    if (!user.emailVerified) {
        return <div>
            <h3 className='text-danger '>Your Email is not verified</h3>
            <h5 className='text-success'>Please Verify your email address</h5>
            <button className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send Verification Email again
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children
};

export default RequireAuth;
