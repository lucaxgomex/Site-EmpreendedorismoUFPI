import React from 'react';

import Header from '../../components/Header'
import InitalAbout from '../../components/InitAbout'
import Sectors from '../../components/Sectors';
import EventsCarousel from '../../components/EventsCarousel';
import OurTeam from '../../components/OurTeam';
import Footer from '../../components/Footer'
import AboutUsCard from '../../components/AboutUsCard';

import './styles.css';

function HomePage() {
  return (
    <div>

      <Header/>
      <InitalAbout/>
      <AboutUsCard title="QUEM SOMOS?" idSection="qs" idTitle="qstitle" idColumns="qscolumns" />
      <AboutUsCard title="VALORES" idSection="v" idTitle="vtitle" idColumns="vcolumns"/>
      <Sectors />
      <EventsCarousel />

      <OurTeam />
      <Footer/>
    </div>
  );
}

export default HomePage;