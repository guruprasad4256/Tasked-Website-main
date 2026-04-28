import React from "react";
import logo from "../assets/logo.png";
const HeroBackground = () => {
  return (
    <section className="relative w-full h-[80px] overflow-hidden mb-10 -mt-[80px] z-10 bg-transparent">
      {/* SVG Folder Shape + White Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex">
        {/* Folder shape (30% width) */}
        <svg
          viewBox="0 0 360 80"
          preserveAspectRatio="none"
          className="w-[30%] h-full"
        >
          <path
            d="M0,50 C0,0 0,0 50,0 H300 C320,0 340,30 340,50 C340,80 360,80 360,80 H0 Z"
            fill="#ffffff"
          />
        </svg>

        {/* Flat white fill for remaining 70% */}
        <div className="w-[70%] h-full bg-transparent"></div>
      </div>

      {/* Logo inside folder tab */}
      <div className="absolute top-[10%] left-[3%] sm:left-[4%] md:left-[5%] lg:left-[8%] flex items-center h-[80%]">
        <img
          src={logo}
          alt="Logo"
          className="w-[20%] object-contain"
        />
      </div>
    </section>
  );
};

export default HeroBackground;
