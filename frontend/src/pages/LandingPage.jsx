import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AfterSchoolSection from '../components/AfterSchoolSection';
import UnderstandingSection from '../components/UnderstandingSection';
import PracticeSection from '../components/PracticeSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AfterSchoolSection />
        <UnderstandingSection />
        <PracticeSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
