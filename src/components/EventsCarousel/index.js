import React from 'react';

import Carousel from './SliderEvents';
import Card from './Card';

import './styles.css';

function EventsCarousel() {

  return (
    <section className="events">
      <div className="section-events-carousel-title">
          <h2>Eventos</h2>
      </div>
      <div className="section-events-carousel">
        <div className="carousel-container">

          <Carousel>
  
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          
          </Carousel>
          
        </div>
        
      </div>
    </section>
  );
}

export default EventsCarousel;