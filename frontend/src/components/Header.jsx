import React, { useState } from 'react';
import { ChevronDown, Leaf } from 'lucide-react';
import { navigationData } from '../data/mock';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-white py-4 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="relative">
            {/* Budlee Character - Green Leaf with Face */}
            <div className="w-10 h-10 relative">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                {/* Leaf body */}
                <ellipse cx="20" cy="22" rx="14" ry="16" fill="#4CAF50" />
                {/* Top leaves */}
                <ellipse cx="14" cy="8" rx="6" ry="8" fill="#66BB6A" transform="rotate(-20 14 8)" />
                <ellipse cx="26" cy="8" rx="6" ry="8" fill="#66BB6A" transform="rotate(20 26 8)" />
                {/* Eyes */}
                <ellipse cx="14" cy="20" rx="3" ry="3.5" fill="white" />
                <ellipse cx="26" cy="20" rx="3" ry="3.5" fill="white" />
                <circle cx="14" cy="20" r="1.5" fill="#333" />
                <circle cx="26" cy="20" r="1.5" fill="#333" />
                {/* Smile */}
                <path d="M 14 28 Q 20 33 26 28" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800 tracking-tight">budlee</span>
            <span className="text-2xl font-light text-gray-500 ml-1">AI</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center">
          {navigationData.navItems.map((item, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                )}
              </button>
              {item.hasDropdown && isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">For Schools</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">For Partners</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">Contact Us</a>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
