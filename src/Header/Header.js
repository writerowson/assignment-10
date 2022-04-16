import React from 'react';
import CustomLink from '../Shared/CustomLink';

const Header = () => {
    return (
        <div className='container mt-3 '>
            <div className='d-flex'>
                <h4>HAPPENING HAPPINESS</h4>
                <div className='d-flex '>
                    <CustomLink to='/'>Home</CustomLink>
                    <CustomLink to='/home'>Services</CustomLink>
                    <CustomLink to='/blog'>Blog</CustomLink>
                    <CustomLink to='/about'>About</CustomLink>
                    <CustomLink to='/login'>Login</CustomLink>
                </div>
            </div>
        </div>
    );
};

export default Header;