import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../images/slide/img01.png'
import slide2 from '../../images/slide/img03.png'
import slide3 from '../../images/slide/img04.png'

const Home = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item interval={1000}>
                    <img
                        style={{ height: '500px' }}
                        className="d-block w-100 text-success "
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Marraige</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Engagement</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '500px' }}
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Family Tour</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>
    );
};

export default Home;