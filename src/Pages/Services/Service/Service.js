import React from 'react';
import CustomLink from '../../../Shared/CustomLink';

const Service = ({ service }) => {
    const { picture, name, Fees, about } = service

    return (
        <div className="  mb-5 col-lg-4 col-12">
            <div className='p-3  shadow' style={{ borderRadius: '7px', padding: '40px' }}>
                <img className='w-100 mb-3' style={{ height: ' 20rem', width: '155px', borderRadius: '7px', }}
                    src={picture} alt="" />
                <h4>{name}</h4>
                <h6>Service Charge : {Fees}</h6>
                <p>{about}</p>
                <button style={{ border: '2px solid RGB(220,77,1)' }} className='btn btn-light   mb-3' > <CustomLink to='/checkout'> Check out</CustomLink> </button>
            </div>

        </div >
    );
};

export default Service;