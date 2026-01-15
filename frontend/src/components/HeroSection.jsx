import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Button } from './ui/button';
import { heroData } from '../data/mock';

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Image with Play Button */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Student Image */}
              <img
                src={heroData.heroImage}
                alt="Student learning with Budlee AI"
                className="w-full h-auto object-cover"
              />
              
              {/* Laptop Screen Overlay */}
              <div className="absolute bottom-8 right-4 w-48 md:w-56 bg-white rounded-lg shadow-lg p-3 transform rotate-2">
                <div className="bg-gray-100 rounded-md p-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div className="h-20 bg-gradient-to-br from-blue-50 to-green-50 rounded flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-300 to-green-300 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-white/50"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Play Button Overlay */}
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="absolute left-8 top-1/2 -translate-y-1/2 group"
              >
                <div className="relative">
                  {/* Outer ring */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {/* Inner green circle with play icon */}
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                      <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-green-200 animate-ping opacity-30"></div>
                </div>
              </button>

              {/* Decorative curved line */}
              <svg className="absolute -left-4 bottom-1/4 w-32 h-32 text-green-200 opacity-60" viewBox="0 0 100 100">
                <path d="M 10 50 Q 50 10 90 50" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-2">
              {heroData.headline}
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {heroData.subHeadline}
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              {heroData.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {heroData.primaryCTA}
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 font-semibold px-8 py-6 text-lg rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              >
                {heroData.secondaryCTA}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
