import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { navigationData } from '../data/mock';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-white py-4 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* Budlee Character Logo */}
          <img 
            src="https://customer-assets.emergentagent.com/job_smart-budlee/artifacts/my42xssr_logo%20v1.png" 
            alt="Budlee" 
            className="w-16 h-16 object-contain"
          />
          <span className="logo-text text-3xl text-gray-900">Budlee AI</span>
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
