import React from 'react';

const AfterSchoolSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-8 md:mb-10 leading-tight">
              What happens after school?
            </h2>
            
            {/* Story Lines - First Group */}
            <div className="space-y-2 md:space-y-3 mb-8">
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                Homework is done.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                But doubts remain.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                Curiosity quietly fades.
              </p>
            </div>
            
            {/* Story Lines - Second Group */}
            <div className="space-y-2 md:space-y-3">
              <p className="text-xl md:text-2xl text-gray-500 font-medium">
                Marks don't show understanding.
              </p>
              <p className="text-xl md:text-2xl text-gray-500 font-medium">
                They never show curiosity.
              </p>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-green-100 to-yellow-50 rounded-3xl transform rotate-2"></div>
              
              {/* Main illustration container */}
              <div className="relative bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 md:p-12">
                {/* Illustration - Student thinking */}
                <div className="relative">
                  {/* Student figure - SVG illustration */}
                  <svg viewBox="0 0 300 280" className="w-64 md:w-80 h-auto mx-auto">
                    {/* Desk */}
                    <rect x="40" y="200" width="220" height="12" rx="4" fill="#D4A574" />
                    <rect x="50" y="212" width="10" height="50" fill="#C4956A" />
                    <rect x="240" y="212" width="10" height="50" fill="#C4956A" />
                    
                    {/* Book on desk */}
                    <rect x="80" y="180" width="60" height="20" rx="2" fill="#4CAF50" />
                    <rect x="85" y="183" width="50" height="2" fill="#fff" opacity="0.5" />
                    <rect x="85" y="188" width="40" height="2" fill="#fff" opacity="0.5" />
                    <rect x="85" y="193" width="45" height="2" fill="#fff" opacity="0.5" />
                    
                    {/* Pencil */}
                    <rect x="150" y="185" width="40" height="6" rx="1" fill="#FFB74D" transform="rotate(-15 150 185)" />
                    <polygon points="145,190 150,185 150,191" fill="#F8BBD9" />
                    
                    {/* Student body */}
                    <ellipse cx="150" cy="160" rx="35" ry="25" fill="#64B5F6" /> {/* Shirt */}
                    
                    {/* Student head */}
                    <circle cx="150" cy="100" r="40" fill="#FFCC80" /> {/* Face */}
                    
                    {/* Hair */}
                    <ellipse cx="150" cy="70" rx="38" ry="20" fill="#5D4037" />
                    <ellipse cx="120" cy="85" rx="10" ry="15" fill="#5D4037" />
                    <ellipse cx="180" cy="85" rx="10" ry="15" fill="#5D4037" />
                    
                    {/* Eyes - looking down/tired */}
                    <ellipse cx="135" cy="100" rx="8" ry="6" fill="white" />
                    <ellipse cx="165" cy="100" rx="8" ry="6" fill="white" />
                    <circle cx="135" cy="102" r="4" fill="#333" />
                    <circle cx="165" cy="102" r="4" fill="#333" />
                    
                    {/* Eyebrows - worried */}
                    <path d="M 125 90 Q 135 87 145 90" stroke="#5D4037" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 155 90 Q 165 87 175 90" stroke="#5D4037" strokeWidth="3" fill="none" strokeLinecap="round" />
                    
                    {/* Mouth - slight frown */}
                    <path d="M 140 118 Q 150 115 160 118" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
                    
                    {/* Hand on chin - thinking pose */}
                    <ellipse cx="170" cy="125" rx="12" ry="10" fill="#FFCC80" />
                    
                    {/* Question marks floating */}
                    <text x="200" y="60" fontSize="24" fill="#4CAF50" opacity="0.7">?</text>
                    <text x="220" y="90" fontSize="18" fill="#FFA726" opacity="0.6">?</text>
                    <text x="90" y="50" fontSize="20" fill="#66BB6A" opacity="0.6">?</text>
                    
                    {/* Thought bubble dots */}
                    <circle cx="195" cy="75" r="4" fill="#E0E0E0" />
                    <circle cx="205" cy="60" r="6" fill="#E0E0E0" />
                    <circle cx="220" cy="45" r="8" fill="#E0E0E0" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterSchoolSection;
