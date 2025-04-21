import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import FeaturedClasses from '../components/home/FeaturedClasses';
import AboutPreview from '../components/home/AboutPreview';
import TestimonialSection from '../components/home/TestimonialSection';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Clay Collective | Handcrafted Pottery & Workshops';
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <AboutPreview />
      <FeaturedClasses />
      <TestimonialSection />
      <CallToAction />
    </>
  );
};

export default HomePage;