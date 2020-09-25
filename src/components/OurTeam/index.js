import React from 'react';

import ElipseOne from '../../assets/img/Ellipse1.png';
import ElipseTwo from '../../assets/img/Ellipse2.png';
import ElipseThree from '../../assets/img/Ellipse3.png';
import ElipseFour from '../../assets/img/Ellipse4.png';
import ElipseFive from '../../assets/img/Ellipse5.png';

import './styles.css';

function OurTeam() {
  return (
    <section className="our-team">
      <div className="section-our-team-title">
          <h2>Nossa Equipe</h2>
      </div>
      <div className="section-our-team">
        <div className="section-our-team-wrapper">
          <img src={ElipseOne} alt="CTO" />
          <div className="text-teammate-wrapper">
            <h3>CTO</h3>
            <p className="name-teammate-wrapper">Anderson Lucas</p>
            <p>andlucasilva@hotmail.com</p>
          </div>
        </div>
        <div className="section-our-team-wrapper">
          <img src={ElipseTwo} alt="CIO" />
            <div className="text-teammate-wrapper">
              <h3>CIO</h3>
              <p className="name-teammate-wrapper">André Oliveira</p>
              <p>andreluisoliveira013@gmail.com</p>
            </div>
        </div>
        <div className="section-our-team-wrapper">
          <img src={ElipseThree} alt="CEO" />
            <div className="text-teammate-wrapper">
              <h3>CEO</h3>
              <p className="name-teammate-wrapper">Arthur Madeiro</p>
              <p>arthurlimam@outlook.com</p>
            </div>
        </div>
        <div className="section-our-team-wrapper">
          <img src={ElipseFour} alt="CFO" />
            <div className="text-teammate-wrapper">
              <h3>CFO</h3>
              <p className="name-teammate-wrapper">João Rodrigues</p>
              <p>joaovitorufpi@gmail.com</p>
            </div>
        </div>
        <div className="section-our-team-wrapper">
          <img src={ElipseFive} alt="CRO"/>
            <div className="text-teammate-wrapper">
              <h3>CRO</h3>
              <p className="name-teammate-wrapper">Mayra Regina</p>
              <p>contatomayraregina@gmail.com</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;