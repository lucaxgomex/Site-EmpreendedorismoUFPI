import React from 'react';

import ImgSampleCarrousel from '../../../assets/img/Img-carousel-events.png';

import './styles.css';

function Card() {
  return (
    <div className="section-events-wrapper">
      <img src={ImgSampleCarrousel} alt="sample" />
      <p>Conferencia 2020 - EmpreendedorismoUFPI</p>
    </div>
  )
}

export default Card;