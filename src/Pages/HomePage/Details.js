import React from 'react';
import gate from '../../images/gate.jpg'

const Details = () => {
    return (
        <section style={{ color: "#006400" }}>
            <div className="container my-5 " >
                <h2 className="d-flex justify-content-center fw-bolder pb-5 mt-5">
                    Latest Updates</h2>
                <div className="row ">
                    <div className="col-lg-6">
                        <img className="w-100 border-rounded rounded-3" src={gate} alt="" />
                    </div>
                    <div className="col-lg-6 ">
                        <div className="p-5 mt-3">
                            <h3>Destination Wedding</h3>
                            <p>We are starting destination Wedding from this february. So registation now to choose your
                                favorite location. Get 20% off for pre-booking. Our all pakages also available for
                                Destination
                                Wedding Plan</p>

                            <button className="btn btn-success "
                            >For more
                                details</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;