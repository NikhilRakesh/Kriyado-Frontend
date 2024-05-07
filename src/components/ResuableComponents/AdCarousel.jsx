import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const AdCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false,
  };

  return (
    <div className="relative">
      <Slider {...settings} >
        <div >
          <img src="/kriyado White logo.png" alt="Ad 1" className="w-full h-auto" />
        </div>
        <div >
          <img src="/Default_i_need_to_default_image_for_our_partners_for_my_web_ap_1.jpg" alt="Ad 2" className="w-full h-auto" />
        </div>
        <div>
          <img src="/kriyado White logo.png" alt="Ad 3" className="w-full h-auto" />
        </div>
      </Slider>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-2">
        <div className="h-2 w-2 bg-gray-300 rounded-full mx-1" />
        <div className="h-2 w-2 bg-gray-300 rounded-full mx-1" />
        <div className="h-2 w-2 bg-gray-300 rounded-full mx-1" />
      </div>
    </div>
  );
};

export default AdCarousel;
