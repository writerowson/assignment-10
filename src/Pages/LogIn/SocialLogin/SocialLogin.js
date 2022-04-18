import React, { useEffect } from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Spinnerr from '../Spinner/Spinnerr';
import google from '../../../images/google.jpg'
import github from '../../../images/github.jpg'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate('/home')
        }
    }, [])
    if (loading) {
        return <Spinnerr></Spinnerr>
    };
    if (error) {
        return (
            <div className='container text-center fs-3 fw-bold mt-5'>
                <p style={{ color: 'RGB(220,77,1)', marginBottom: '400px' }}>Error: {error.message}</p>
            </div>
        );
    }
    return (
        <div className='text-center'>

            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
                <p className='mt-3 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
            </div>
            <button onClick={() => signInWithGoogle()} style={{ border: '2px solid RGB(220,77,1)' }} className='btn btn-light w-100'><img style={{ width: '25px' }} src={google} alt="" /> Signin with Google</button>
            <button onClick={() => signInWithGoogle()} style={{ border: '2px solid RGB(220,77,1)' }} className='btn btn-light w-100 mt-1'  > <img style={{ width: '25px' }} src={github} alt="" /> Signin with Github</button>
        </div>
    );
};

export default SocialLogin;