import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../Shared/CustomLink';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar className=' ' sticky='top' collapseOnSelect expand="lg" bg='light' variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ color: "#006400" }} className='fw-bold' >HAPPENING HAPPINESS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto hstack gap-3 ">
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/services'>Services</CustomLink>
                    </Nav>
                    <Nav className='hstack gap-3' >
                        <CustomLink to='/blog'>Blog</CustomLink>
                        <CustomLink to='/about'>About</CustomLink>
                        {
                            user ?
                                <button onClick={handleSignOut} className='btn btn-success  ' >Sign out</button>
                                :
                                <CustomLink
                                    className='me-2' to='/login'>Login</CustomLink>
                        }



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;