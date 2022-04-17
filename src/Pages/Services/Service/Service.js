import React from 'react';

const Service = ({ service }) => {
    const { picture, name, Fees, about } = service

    return (
        <div className="  mb-5 col-lg-4 col-12">
            <div className='p-3 ' style={{ border: '2px solid RGB(220,77,1)', borderRadius: '7px', padding: '40px' }}>
                <img style={{ height: ' 150px', width: '155px', border: '2px solid RGB(220,77,1)', borderRadius: '7px', }}
                    src={picture} alt="" />
                <h4>{name}</h4>
                <h6>Service Charge : {Fees}</h6>
                <p>{about}</p>
                <button className='btn btn-success mb-3' >  Check out</button>
            </div>

        </div >
    );
};

export default Service;