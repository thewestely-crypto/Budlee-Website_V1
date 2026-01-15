import React from 'react';
import { Play } from 'lucide-react';
import { Button } from './ui/button';
import { heroData, curriculumData } from '../data/mock';

const HeroSection = () => {
  return (
    <section className="w-full bg-white min-h-[calc(100vh-80px)] flex flex-col">
      {/* Main Hero Content */}
      <div className="flex-grow flex items-center justify-center px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Side - Image with Play Button */}
            <div className="relative w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* Main Image Container with rounded corners */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 p-1">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={heroData.heroImage}
                      alt="Student learning with Budlee AI"
                      className="w-full max-w-md h-auto object-cover"
                    />
                  </div>
                  
                  {/* Laptop/Screen Overlay */}
                  <div className="absolute bottom-6 right-0 translate-x-4 w-40 bg-white rounded-xl shadow-2xl p-2 border border-gray-100">
                    <div className="bg-white rounded-lg">
                      <div className="flex items-center gap-1.5 mb-2 px-2 pt-2">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <div className="h-20 bg-gradient-to-br from-cyan-50 to-green-50 rounded-lg mx-2 mb-2 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-300 to-teal-400 flex items-center justify-center shadow-md">
                          <div className="w-4 h-4 rounded-full bg-white/60"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Play Button */}
                  <button className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-4 group">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                          <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Decorative curved line */}
                <svg className="absolute -left-8 bottom-1/3 w-24 h-24 text-green-300 opacity-50" viewBox="0 0 100 100">
                  <path d="M 10 50 Q 50 10 90 50" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-relaxed font-medium mb-10">
                {heroData.tagline}
              </p>

              {/* CTA Buttons - Stacked like Duolingo */}
              <div className="flex flex-col gap-4 max-w-sm mx-auto lg:mx-0">
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-7 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
                >
                  {heroData.primaryCTA}
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-2 border-gray-200 text-gray-600 font-bold px-8 py-7 text-lg rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 uppercase tracking-wide"
                >
                  {heroData.secondaryCTA}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CBSE Curriculum Section - Bottom of Hero */}
      <div className="w-full bg-gradient-to-b from-white to-slate-50 py-8 px-6 md:px-12 lg:px-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-6">
            <h3 className="text-lg md:text-xl text-gray-600 font-medium">
              {curriculumData.title}{' '}
              <span className="text-green-600 font-bold">{curriculumData.highlight}</span>{' '}
              {curriculumData.subtitle}
            </h3>
          </div>

          {/* Class Cards - Horizontal Scroll on Mobile */}
          <div className="flex justify-center gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {curriculumData.classes.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all duration-300 cursor-pointer min-w-[110px] text-center"
              >
                <h4 className="text-green-600 font-bold text-base md:text-lg mb-0.5">
                  {item.class}
                </h4>
                <p className="text-gray-400 text-sm">
                  {item.subject}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
