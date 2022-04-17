import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {

    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate("/login")
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    // if (error) {
    //     return (
    //         <div>
    //             <p>Error: {error.message}</p>
    //         </div>
    //     );
    // }
    // if (loading) {
    //     return <p>Loading...</p>;
    // }
    if (user) {
        navigate('/')
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
                    <Form.Control type="text" name="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I accept all terms and conditions" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already Registered?<Link to='/login' onClick={navigateLogin} className='text-success  pe-auto text-decoration-none' > Please Login</Link></p>
        </div >
    );
};

export default Register;