import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CurriculumSection from '../components/CurriculumSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CurriculumSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
