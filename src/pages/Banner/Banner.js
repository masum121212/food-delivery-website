import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../Images/banner1.jpg';
import banner2 from '../../Images/banner2.jpg';
import banner3 from '../../Images/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
    <button className="btn btn-outline-success"> <Link to="/service">Order Now</Link> </button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <button className="btn btn-outline-success"> <Link to="/service">Order Now</Link> </button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <button className="btn btn-outline-success"> <Link to="/service">Order Now</Link> </button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;