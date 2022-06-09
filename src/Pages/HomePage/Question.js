import React from 'react';
import quextion from '../../images/asking.jpg'

const Question = () => {
    return (
        <section className="container my-5 " >
            <h2 className="d-flex justify-content-center fw-bolder pb-5 mt-5" style={{ color: "#006400" }}>
                Frequently Asked Questions</h2>
            <div className="row">
                <div className="col-lg-6 order-2 order-lg-1">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What is the difference between event design and event planning?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Event design and event planning work hand in hand to deliver a successful
                                    event.Events by Knight offer tailor made events. This means we incorporate both
                                    event design and event planning to create that perfect event.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How early do we need to start planning an event?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Event design and event planning work hand in hand to deliver a successful
                                    event.Events by Knight offer tailor made events. This means we incorporate both
                                    event design and event planning to create that perfect event.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How do you keep budgets on track?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Event design and event planning work hand in hand to deliver a successful
                                    event.Events by Knight offer tailor made events. This means we incorporate both
                                    event design and event planning to create that perfect event.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What is your refund and cancellation policy?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Event design and event planning work hand in hand to deliver a successful
                                    event.Events by Knight offer tailor made events. This means we incorporate both
                                    event design and event planning to create that perfect event.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                    <img className="w-100 border-rounded rounded-3" src={quextion} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Question;