import React from 'react';
import sleeping from '../images/404.jpg'
const NotFounded = () => {
    return (
        <div>
            <h2 className="text-primary text-center">Pages are not founded</h2>
            <img className='w-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFounded;