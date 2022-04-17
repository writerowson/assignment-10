import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { checkout } = useParams()
    return (
        <div>
            <h3>THis is checkout : {checkout}</h3>
        </div>
    );
};

export default CheckOut;