import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinnerr from '../LogIn/Spinner/Spinnerr';
import { sendEmailVerification } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import SocialLogin from '../LogIn/SocialLogin/SocialLogin';


const Register = () => {
    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate("/login")
    }

    const [
        createUserWithEmailAndPassword,
        user,
        registered,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (error) {
        return (
            <div className='container text-center fs-3 fw-bold mt-5'>
                <p style={{ color: 'RGB(220,77,1)', marginBottom: '400px' }}>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <Spinnerr></Spinnerr>;
    }
    const handleRegister = e => {
        e.preventDefault()
        // to check value of form from "name" attribute
        // console.log(event.target.email.value);
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }
    const varifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('Email sent to verify');
            })
    }
    if (user) {
        varifyEmail()
        navigate('/home')
    }

    return (
        <div className='container w-50 mx-auto '>
            <h2 className='text-success text-center pt-5'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I accept all terms and conditions" />
                </Form.Group>
                <Button className='w-100 fw-bold' variant="success" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already Registered?<Link to='/login' onClick={navigateLogin} className='text-success  pe-auto text-decoration-none' > Please Login</Link></p>
            <ToastContainer />
            <SocialLogin></SocialLogin>
        </div >
    );
};

export default Register;