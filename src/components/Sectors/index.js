import React from 'react';

import Carousel from './SliderSectors';

import './styles.css';

function Sectors() {
  return (
    <section className="sectors">
      <div className="section-sectors-title">
          <h2>Setores</h2>
      </div>
      <div className="sectors-carousel">
        <Carousel />
      </div>
    </section>
  )
}

export default Sectors;