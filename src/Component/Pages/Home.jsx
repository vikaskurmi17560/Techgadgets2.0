import React from 'react';
import HeroSection from '../JSX/HeroSection';
import Services from '../JSX/Services';
import Trusted from '../JSX/Trusted';
import FeatureProduct from '../JSX/FeatureProducts';

const Home = () => {
  const heroData = {
    name: "TechGadgets",
  };

  return (
    <>
      <HeroSection myData={heroData} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
