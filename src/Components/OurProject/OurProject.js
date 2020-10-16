import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurProject.css";

const OurProject = () => {
  const settings = {
    centerMode: true,
    centerPadding: '60px',
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <div className="carousel-container">
      <div className='container'>
        <h1 className="text-center text-white p-5">Here are some of our <span style={{ color: '#85b06b' }}>works...</span></h1>
        <div>
          <Slider {...settings}>
            <div className='carousel-image'>
              <img className="img-fluid" src="https://i.ibb.co/0B2fhD4/carousel-1.png" alt="carousel-1" />
            </div>
            <div className='carousel-image'>
              <img className="img-fluid " src="https://i.ibb.co/nncbLqf/carousel-2.png" alt="carousel-2" />
            </div>
            <div className='carousel-image'>
              <img className="img-fluid" src="https://i.ibb.co/6yFbGKP/carousel-3.png" alt="carousel-3" />
            </div>
            <div className='carousel-image'>
              <img className="img-fluid" src="https://i.ibb.co/0ypyC8Q/carousel-4.png" alt="carousel-4" />
            </div>
            <div className='carousel-image'>
              <img className="img-fluid" src="https://i.ibb.co/mHGCPJH/carousel-5.png" alt="carousel-5" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurProject;