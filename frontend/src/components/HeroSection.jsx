import React from 'react';
import { Play } from 'lucide-react';
import { Button } from './ui/button';
import { heroData, curriculumData } from '../data/mock';

const HeroSection = () => {
  return (
    <section className="w-full bg-white min-h-[calc(100vh-80px)] flex flex-col">
      {/* Main Hero Content */}
      <div className="flex-grow flex items-center justify-center px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left Side - Tilted Image with Play Button */}
            <div className="relative w-full lg:w-1/2 flex justify-center">
              <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Shadow underneath */}
                <div className="absolute inset-0 bg-gray-200 rounded-3xl transform translate-x-3 translate-y-3 -rotate-1"></div>
                
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white">
                  <img
                    src={heroData.heroImage}
                    alt="Student learning with Budlee AI"
                    className="w-full max-w-[420px] h-auto object-cover"
                  />
                  
                  {/* Laptop/Screen Overlay */}
                  <div className="absolute bottom-4 right-2 w-36 bg-white rounded-xl shadow-xl p-2 border border-gray-50 transform rotate-3">
                    <div className="flex items-center gap-1 mb-1.5 px-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="h-16 bg-gradient-to-br from-cyan-50 to-green-50 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-300 to-teal-400 flex items-center justify-center shadow">
                        <div className="w-3 h-3 rounded-full bg-white/60"></div>
                      </div>
                    </div>
                  </div>

                  {/* Play Button */}
                  <button className="absolute left-6 top-1/2 -translate-y-1/2 group">
                    <div className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  </button>
                </div>

                {/* Decorative curved line */}
                <svg className="absolute -left-6 bottom-1/4 w-16 h-16 text-green-300 opacity-60" viewBox="0 0 100 100">
                  <path d="M 10 50 Q 50 10 90 50" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <p className="hero-tagline text-3xl md:text-4xl lg:text-[42px] text-gray-800 leading-snug mb-12">
                {heroData.tagline}
              </p>

              {/* CTA Buttons - Stacked like Duolingo */}
              <div className="flex flex-col gap-4 max-w-sm mx-auto lg:mx-0">
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-7 text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wider"
                >
                  {heroData.primaryCTA}
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-2 border-gray-200 text-gray-500 font-bold px-8 py-7 text-base rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 uppercase tracking-wider"
                >
                  {heroData.secondaryCTA}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CBSE Curriculum Section - Single Line */}
      <div className="w-full bg-slate-50/80 py-6 px-6 md:px-12 lg:px-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {/* Title */}
            <span className="text-gray-500 font-medium text-base whitespace-nowrap">
              Aligned with <span className="text-green-600 font-bold">CBSE</span> Curriculum
            </span>
            
            {/* Separator */}
            <div className="hidden md:block w-px h-8 bg-gray-200"></div>

            {/* Class Cards - All in one row */}
            <div className="flex items-center gap-3">
              {curriculumData.classes.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-green-600 font-bold text-sm">{item.class}</span>
                  <span className="text-gray-400 text-sm ml-1">{item.subject}</span>
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
