import React from 'react';

import Header from '../../components/Header'
import InitalAbout from '../../components/InitAbout'
import Sectors from '../../components/Sectors';
import EventsCarousel from '../../components/EventsCarousel';
import OurTeam from '../../components/OurTeam';
import Footer from '../../components/Footer'

function HomePage() {
  return (
    <div>

      <Header/>
      <InitalAbout/>
      <Sectors />

      <EventsCarousel />

      <OurTeam />
      <Footer/>
    </div>
  );
}

export default HomePage;