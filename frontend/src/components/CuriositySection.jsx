import React from 'react';

const CuriositySection = () => {
  const interestTopics = [
    { name: "Space", size: "large", position: "top-4 left-8", delay: "0s" },
    { name: "AI", size: "large", position: "top-8 right-12", delay: "0.5s" },
    { name: "Robotics", size: "medium", position: "top-20 left-20", delay: "1s" },
    { name: "Quantum", size: "small", position: "bottom-24 left-6", delay: "0.3s" },
    { name: "Mars", size: "medium", position: "bottom-16 right-8", delay: "0.8s" },
    { name: "Coding", size: "small", position: "top-32 right-6", delay: "1.2s" },
    { name: "Astronomy", size: "small", position: "bottom-8 left-24", delay: "0.6s" },
    { name: "Neurons", size: "small", position: "bottom-32 right-24", delay: "0.2s" },
  ];

  const getSizeClasses = (size) => {
    switch(size) {
      case 'large':
        return 'px-5 py-2.5 text-base font-bold';
      case 'medium':
        return 'px-4 py-2 text-sm font-semibold';
      case 'small':
        return 'px-3 py-1.5 text-xs font-medium';
      default:
        return 'px-4 py-2 text-sm font-semibold';
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-green-50/50 via-white to-yellow-50/30 py-16 md:py-24 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side - Interest Bubbles Visual */}
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-green-100 to-yellow-50 rounded-3xl transform -rotate-2"></div>
              
              {/* Main Container */}
              <div className="relative bg-gradient-to-br from-white to-green-50/50 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl w-[300px] h-[280px] md:w-[420px] md:h-[320px] border-4 border-white">
                
                {/* Floating Interest Bubbles */}
                {interestTopics.map((topic, index) => (
                  <div
                    key={index}
                    className={`absolute ${topic.position} animate-float-slow`}
                    style={{ animationDelay: topic.delay }}
                  >
                    <div className={`bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer ${getSizeClasses(topic.size)}`}>
                      {topic.name}
                    </div>
                  </div>
                ))}

                {/* Connecting lines (subtle) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                  <line x1="50%" y1="50%" x2="20%" y2="15%" stroke="#4CAF50" strokeWidth="1" strokeDasharray="4" />
                  <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#4CAF50" strokeWidth="1" strokeDasharray="4" />
                  <line x1="50%" y1="50%" x2="15%" y2="75%" stroke="#4CAF50" strokeWidth="1" strokeDasharray="4" />
                  <line x1="50%" y1="50%" x2="85%" y2="70%" stroke="#4CAF50" strokeWidth="1" strokeDasharray="4" />
                  <line x1="50%" y1="50%" x2="30%" y2="40%" stroke="#4CAF50" strokeWidth="1" strokeDasharray="4" />
                </svg>

                {/* Budlee Character - Center, observing */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative">
                    {/* Glow effect behind Budlee */}
                    <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-yellow-200 rounded-full -m-2 md:-m-3 blur-md opacity-60"></div>
                    {/* Yellow background circle */}
                    <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 bg-yellow-300 rounded-full -m-1 md:-m-2 shadow-lg"></div>
                    {/* Budlee with observing animation */}
                    <img 
                      src="https://customer-assets.emergentagent.com/job_smart-budlee/artifacts/my42xssr_logo%20v1.png" 
                      alt="Budlee" 
                      className="w-14 h-14 md:w-16 md:h-16 object-contain animate-nod cursor-pointer hover:scale-110 transition-transform duration-300 relative z-10"
                    />
                    {/* Observing indicator */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded-full px-2 py-1 shadow-md">
                      <span className="text-xs">👀</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
            {/* Headline - Same font as hero tagline with green color */}
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap !text-green-600">
              When curiosity shows up
            </h2>
            
            {/* Story Lines */}
            <div className="space-y-3 md:space-y-4">
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                Some students return to <span className="text-green-600 font-bold">space</span>.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                Some explore <span className="text-green-600 font-bold">physics</span> deeper.
              </p>
              <p className="text-xl md:text-2xl text-gray-500 font-medium mt-6">
                Budlee <span className="text-green-600 font-semibold italic">notices</span> ~ and <span className="text-green-700 font-bold">follows</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuriositySection;
