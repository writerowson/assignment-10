import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../Shared/CustomLink';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg='light' variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ color: "#006400" }} className='fw-bold' >HAPPENING HAPPINESS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <CustomLink className='me-2' to='/'>Home</CustomLink>
                        <CustomLink className='me-2' to='/services'>Services</CustomLink>
                    </Nav>
                    <Nav >
                        <CustomLink className='me-2' to='/blog'>Blog</CustomLink>
                        <CustomLink className='me-2' to='/about'>About</CustomLink>
                        <CustomLink className='me-2' to='/login'>Login</CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;