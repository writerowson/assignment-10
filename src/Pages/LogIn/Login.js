import React from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth)
    // const navigateRegister = e = > {
    //     navigate('/register')
    // }


    // const resetPassword = e = {
    //     createUserWithEmailAndPassword(email, password)
    // }
    return (
        <div className='container w-50 mx-auto'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button onClick={createUserWithEmailAndPassword} variant="success" type="submit">
                    Log In
                </Button>
            </Form>
            <p>New to Happining Happiness?<Link to='/register' className='text-success  pe-auto text-decoration-none' > Plz Register</Link></p>
            {/* <p><button className='text-success btn btn-link pe-auto text-decoration-none'> Forget Password</button></p> */}

            <ToastContainer />

        </div>
    );
};

export default Login;