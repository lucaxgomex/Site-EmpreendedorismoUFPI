import React from 'react';
import Slider from 'react-slick';

import FinancialMarket from './FinancialMarket';
import Development from './Development';

import './styles.css';

function Carousel() {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider { ...settings }>
      <FinancialMarket />
      <Development />
    </Slider>
  )
}

export default Carousel;