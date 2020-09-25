import React from 'react';
import Slider from 'react-slick';

import './styles.css';

function Carousel({ children }) {
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider { ...settings }>
      {children}
    </Slider>
  )
}

export default Carousel;