import React from 'react';
import sleeping from '../images/404.jpg'
const NotFounded = () => {
    return (
        <div className='container'>
            <h2 style={{ color: "#006400" }} className="  text-center">Page is not founded</h2>
            <img className='w-100 ' src={sleeping} alt="" />
        </div>
    );
};

export default NotFounded;