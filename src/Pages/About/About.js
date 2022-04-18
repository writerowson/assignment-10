import React from 'react';
import img from '../../images/my.jpg'
const About = () => {
    return (
        <div className=' container mt-5 '>
            <div className=' row  '>
                <div className=' col-lg-9 col-12 mt-5'>
                    <h2 style={{ color: 'RGB(220,77,1)' }}>This is Rowshon Ara</h2>
                    <p style={{ color: "#006400", marginTop: '45px' }}>My future plan is to become an entrepreneur. It's a long run and big budgeted project. However,  my recent objective is to become a junior front developer.  </p>
                    <p style={{ color: "#006400" }}>As a slow learner, I need practice more and more. Sometimes 24/7 hours of a day become short for practicing.  Even  after prcticing I don't get many lessons. So, then I switch to another lesson. Sometime this break helps to mesmarise them and sometime it leads to forget them.   </p>
                </div>
                <div className=' col-lg-3  col-12 mb-5'>
                    <img className='rounded w-100' src={img} alt="" />
                </div>
            </div>
        </div >
    );
};

export default About;