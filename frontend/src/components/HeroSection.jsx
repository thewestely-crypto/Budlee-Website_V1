import React from 'react';
import { Play, Atom, FlaskConical, Lightbulb, Star, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { heroData, curriculumData } from '../data/mock.js';

const HeroSection = () => {
  return (
    <section className="w-full min-h-[calc(100vh-88px)] flex flex-col relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50"></div>
      
      {/* Floating Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left - Atom */}
        <div className="absolute top-8 left-[8%] text-green-300 animate-float-slow">
          <Atom className="w-10 h-10 opacity-60" />
        </div>
        
        {/* Top Right - Flask */}
        <div className="absolute top-12 right-[12%] text-yellow-400 animate-float-medium">
          <FlaskConical className="w-8 h-8 opacity-50" />
        </div>
        
        {/* Middle Left - Lightbulb */}
        <div className="absolute top-1/3 left-[4%] text-orange-300 animate-float-fast">
          <Lightbulb className="w-7 h-7 opacity-50" />
        </div>
        
        {/* Bottom Right - Stars */}
        <div className="absolute bottom-28 right-[6%] text-green-400 animate-float-slow">
          <Star className="w-8 h-8 opacity-40 fill-current" />
        </div>
        
        {/* Top Center - Sparkles */}
        <div className="absolute top-6 left-[35%] text-yellow-400 animate-float-medium">
          <Sparkles className="w-6 h-6 opacity-50" />
        </div>
        
        {/* Bottom Left - Star */}
        <div className="absolute bottom-24 left-[10%] text-orange-400 animate-float-fast">
          <Star className="w-5 h-5 opacity-40 fill-current" />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-20 right-[22%] w-16 h-16 rounded-full bg-green-200 opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-[18%] w-12 h-12 rounded-full bg-yellow-200 opacity-20 animate-pulse-slow"></div>
      </div>

      {/* Main Hero Content */}
      <div className="flex-grow flex items-center justify-center px-6 md:px-12 lg:px-20 py-8 relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Side - Tilted Image with Play Button */}
            <div className="relative w-full lg:w-1/2 flex justify-center">
              <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Shadow underneath */}
                <div className="absolute inset-0 bg-green-200/50 rounded-3xl transform translate-x-3 translate-y-3 -rotate-1"></div>
                
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white w-[420px] h-[320px]">
                  <img
                    src={heroData.heroImage}
                    alt="Student learning with Budlee AI"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Play Button - Prominent and Clickable */}
                  <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group">
                    <div className="relative">
                      {/* Outer pulsing ring */}
                      <div className="absolute inset-0 w-20 h-20 -m-2 rounded-full bg-white/30 animate-ping"></div>
                      {/* Main button */}
                      <div className="w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                          <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Decorative curved line */}
                <svg className="absolute -left-6 bottom-1/4 w-16 h-16 text-green-400 opacity-60" viewBox="0 0 100 100">
                  <path d="M 10 50 Q 50 10 90 50" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </div>
              
              {/* Budlee Character with Speech Bubble */}
              <div className="absolute -bottom-2 -right-2 lg:-right-6 z-20">
                {/* Speech Bubble */}
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-4 py-2 shadow-lg whitespace-nowrap">
                  <span className="text-gray-700 font-semibold text-sm">Talk to Budlee</span>
                  {/* Bubble tail */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
                </div>
                {/* Budlee Character */}
                <img 
                  src="https://customer-assets.emergentagent.com/job_smart-budlee/artifacts/my42xssr_logo%20v1.png" 
                  alt="Budlee" 
                  className="w-20 h-20 object-contain animate-bounce-gentle cursor-pointer hover:scale-110 transition-transform"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="text-center mb-8">
                <h1 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] whitespace-nowrap">
                  Helps students understand lessons
                </h1>
                <h1 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] whitespace-nowrap mt-1">
                  and discover curiosity early.
                </h1>
              </div>

              {/* CTA Buttons - Centered */}
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-7 text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wider"
                >
                  {heroData.primaryCTA}
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-2 border-gray-200 bg-white text-gray-500 font-bold px-8 py-7 text-base rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 uppercase tracking-wider"
                >
                  {heroData.secondaryCTA}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CBSE Curriculum Section - Single Line */}
      <div className="w-full bg-white/80 backdrop-blur-sm py-5 px-6 md:px-12 lg:px-20 border-t border-gray-100 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {/* Title */}
            <span className="text-gray-500 font-medium text-base whitespace-nowrap">
              Aligned with <span className="text-green-600 font-bold">CBSE</span> Curriculum
            </span>
            
            {/* Separator */}
            <div className="hidden md:block w-px h-6 bg-gray-200"></div>

            {/* Science Label with Icon */}
            <div className="flex items-center gap-2 text-gray-600">
              <FlaskConical className="w-5 h-5 text-green-500" />
              <span className="font-semibold">Science</span>
            </div>

            {/* Separator */}
            <div className="hidden md:block w-px h-6 bg-gray-200"></div>

            {/* Class Pills - Green Gradient */}
            <div className="flex items-center gap-2">
              {curriculumData.classes.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-green-400 to-green-500 text-white font-bold text-sm px-4 py-1.5 rounded-full shadow-sm hover:shadow-md hover:from-green-500 hover:to-green-600 transition-all duration-300 cursor-pointer"
                >
                  {item.class}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
