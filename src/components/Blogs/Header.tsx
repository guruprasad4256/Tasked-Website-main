import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/TaskedLogo.png';

const BlogHeader = () => {
  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Main Container: 
          Background and Border now share #FFF9EB for a seamless, 
          "no-line" look that puts all focus on the logo.
      */}
      <div className="bg-[#FFF9EB] backdrop-blur-md px-6 py-4 border-b border-[#FFF9EB]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Section - Left Aligned */}
          <Link to="/" className="block group relative">
            {/* Subtle orange glow behind logo on hover */}
            <div className="absolute -inset-2 bg-[#F39200] blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full" />
            
            <img 
              src={logo} 
              alt="Tasked Logo" 
              className="relative h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
            />
          </Link>

          {/* Right side remains empty and clean */}
         

        </div>
      </div>

      {/* Elegant Gradient Accent Line:
          This remains the only visible "line," acting as your brand's 
          signature underline as users scroll.
      */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#F39200]/40 to-transparent" />
    </header>
  );
};

export default BlogHeader;