import React  from 'react';
import './CompanySlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import s1 from '../../../img/Client/client1.jpg';
import s2 from '../../../img/Client/client2.jpg';
import s3 from '../../../img/Client/client3.jpg';
import s4 from '../../../img/Client/client4.jpg';
import s5 from '../../../img/Client/client5.jpg';
import s6 from '../../../img/Client/client6.jpg';
import s7 from '../../../img/Client/client7.jpg';
import s8 from '../../../img/Client/client8.jpg';
import s9 from '../../../img/Client/client9.jpg';
import s10 from '../../../img/Client/client10.jpg';
import s11 from '../../../img/Client/client12.jpg';
import s12 from '../../../img/Client/client12.jpg';
const Companyslider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1
        }
      }

    ]
  };
  const data = [
    {
      clientimg: s1
    },
    {
      clientimg: s2
    },
    {
      clientimg: s3
    },
    {
      clientimg: s4
    },
    {
      clientimg: s5
    },
    {
      clientimg: s6
    },
    {
      clientimg: s7
    },
    {
      clientimg: s8
    },
    {
      clientimg: s9
    },
    {
      clientimg: s10
    },
    {
      clientimg: s11
    },
    {
      clientimg: s12
    },
  ];
  return (
    <>
      <section className="clients"> 
        <div className="slide-overlay">
          <div className="section-title">
          </div>
          <div className="overlay1">
            <div className="container slider-cont">
              <Slider {...settings} className="comp-slider">
                {/* {/ Using Map Function to access the data /} */}
                {data.map((data,i) => (
                  <div className="image-clientslider" key={i}>
                    <img src={data.clientimg} className="img-fluid" alt="Client" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Companyslider;
