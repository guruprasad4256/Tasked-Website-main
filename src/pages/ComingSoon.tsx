import React from 'react';
import { motion } from 'framer-motion';

// Ensure the path matches your actual file location
import logo from '../assets/TaskedLogo.png'; 

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFAED] text-black font-poppins flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Central Radial Glow - Recreating the "Sun" effect from the image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_#FCEDDB_0%,_#FFFAED_70%)] rounded-full blur-[80px] opacity-60"></div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 flex flex-col items-center">
        
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12 flex justify-center"
        >
          <div className="relative">
             {/* Logo Image */}
             <img 
                src={logo} 
                alt="Tasked Logo" 
                className="relative h-28 md:h-36 w-auto object-contain" 
             />
          </div>
        </motion.div>

        {/* Minimalist Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tight uppercase flex flex-wrap justify-center gap-x-4">
            <span>COMING</span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F18F2E] to-[#F9B46E]">
              SOON
            </span>
          </h1>
          
          {/* Bottom Divider Tagline - Exact match to your image */}
          <div className="mt-12 flex items-center justify-center gap-4 w-full max-w-2xl">
            <div className="h-[1px] flex-grow bg-neutral-300"></div>
            <p className="text-[11px] md:text-[13px] uppercase tracking-[0.6em] text-[#807D78] font-bold whitespace-nowrap">
              Consider it done
            </p>
            <div className="h-[1px] flex-grow bg-neutral-300"></div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default ComingSoon;