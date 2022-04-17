import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer style={{ color: "#006400" }} className='text-center mt-5 '>
            <p><small> © 2009-{year} HappeningHappiness.com, All Rights Reserved </small></p>
        </footer>
    );
};

export default Footer;