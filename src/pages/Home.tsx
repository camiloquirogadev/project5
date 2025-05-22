import React from 'react';
import Hero from '../components/Hero';
import NewArrivals from '../components/NewArrivals';
import ClubFavorites from '../components/ClubFavorites';
import SpecialOffers from '../components/SpecialOffers';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <NewArrivals />
      <ClubFavorites />
      <SpecialOffers />
      <Contact />
    </>
  );
};

export default Home;