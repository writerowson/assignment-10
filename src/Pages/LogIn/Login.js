
import React, { useRef } from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinnerr from './Spinner/Spinnerr';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigateRegister = e => {
        navigate('/home')
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)
    const [
        sendPasswordResetEmail,
        sending
    ] = useSendPasswordResetEmail(auth)
    if (error) {
        return (
            <div className='container text-center fs-3 fw-bold mt-5'>
                <p style={{ color: 'RGB(220,77,1)', marginBottom: '400px' }}>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <Spinnerr></Spinnerr>
    }

    const handleLogin = e => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = () => {
        const email = emailRef.current.value
        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('Email sent')
                    // console.log('Email sent')
                })
        }
        else {
            alert('plz enter your email')
        }
    }
    if (user) {
        navigate('/home');

    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-success text-center pt-5'>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="success" type="submit">
                    Log In
                </Button>
            </Form>

            <p>New to Happining Happiness?<Link to='/register' className='text-success  pe-auto text-decoration-none' onClick={navigateRegister} > Plz Register</Link></p>
            <p>Already registered?<button onClick={resetPassword} className='text-success btn btn-link pe-auto text-decoration-none' >Forget Password</button></p>
            <ToastContainer />

        </div>
    );
};

export default Login;