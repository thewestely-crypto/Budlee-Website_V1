import React from 'react';
import { Play } from 'lucide-react';

const UnderstandingSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-green-50/50 via-white to-yellow-50/30 py-16 md:py-24 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Headline - Same font as hero tagline with green color */}
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap !text-green-600">
              Understanding without pressure
            </h2>
            
            {/* Story Lines */}
            <div className="space-y-3 md:space-y-4">
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                Students ask questions <span className="text-green-600 font-bold">freely</span>.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                Budlee explains{' '}
                <span className="text-green-600 font-semibold">calmly</span>,{' '}
                <span className="text-green-500 font-semibold italic">clearly</span>,{' '}
                <span className="text-green-700 font-bold">patiently</span>.
              </p>
            </div>
          </div>

          {/* Right Side - Video Placeholder */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-green-100 to-yellow-50 rounded-3xl transform -rotate-2"></div>
              
              {/* Video Frame Container */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl w-[300px] h-[220px] md:w-[420px] md:h-[280px] border-4 border-white">
                {/* Video Placeholder Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-white to-yellow-50">
                  {/* Decorative elements inside video frame */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-green-200 rounded-full opacity-40"></div>
                  <div className="absolute bottom-8 right-8 w-16 h-16 bg-yellow-200 rounded-full opacity-30"></div>
                  <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-orange-200 rounded-full opacity-30"></div>
                </div>
                
                {/* Play Button */}
                <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group z-10">
                  <div className="relative">
                    {/* Outer pulsing ring */}
                    <div className="absolute inset-0 w-20 h-20 -m-2 rounded-full bg-green-400/30 animate-ping"></div>
                    {/* Main button */}
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                        <Play className="w-5 h-5 md:w-6 md:h-6 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </div>
                </button>

                {/* "See Budlee in action" text */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-md">
                  <span className="text-gray-600 text-sm font-medium">See Budlee in action</span>
                </div>
              </div>

              {/* Budlee Character - Waving/Helping */}
              <div className="absolute -top-8 -left-8 md:-top-10 md:-left-10 z-20">
                <div className="relative">
                  {/* Speech bubble */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-3 py-2 shadow-lg whitespace-nowrap animate-bounce-gentle">
                    <span className="text-gray-700 font-semibold text-xs md:text-sm">Talk to Budlee</span>
                    {/* Bubble tail */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white transform rotate-45"></div>
                  </div>
                  {/* Budlee with wave animation */}
                  <img 
                    src="https://customer-assets.emergentagent.com/job_smart-budlee/artifacts/my42xssr_logo%20v1.png" 
                    alt="Budlee" 
                    className="w-20 h-20 md:w-24 md:h-24 object-contain animate-wave cursor-pointer hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingSection;
