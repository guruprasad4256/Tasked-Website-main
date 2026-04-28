import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ServiceSlider from "./ServiceSlider";
import LeftBgOverlay from "../assets/DiwaliBgoverlay.png";   // Desktop overlay
import MobileBgOverlay from "../assets/MobileDiwaliBgoverlay1.png";  // ✅ Mobile overlay
import "../styles/FlipingWords.css";

const topWords = ["On Time", "On Budget", "Guarantee"];

// ✅ Import all 31 images
import Img1 from "../assets/1OFF.png";
import Img2 from "../assets/2OFF.png";
import Img3 from "../assets/3OFF.png";
import Img4 from "../assets/4OFF.png";
import Img5 from "../assets/5OFF.png";
import Img6 from "../assets/6OFF.png";
import Img7 from "../assets/7OFF.png";
import Img8 from "../assets/8OFF.png";
import Img9 from "../assets/9OFF.png";
import Img10 from "../assets/10OFF.png";
import Img11 from "../assets/11OFF.png";
import Img12 from "../assets/12OFF.png";
import Img13 from "../assets/13OFF.png";
import Img14 from "../assets/14OFF.png";
import Img15 from "../assets/15OFF.png";
import Img16 from "../assets/16OFF.png";
import Img17 from "../assets/17OFF.png";
import Img18 from "../assets/18OFF.png";
import Img19 from "../assets/19OFF.png";
import Img20 from "../assets/20OFF.png";
import Img21 from "../assets/21OFF.png";
import Img22 from "../assets/22OFF.png";
import Img23 from "../assets/23OFF.png";
import Img24 from "../assets/24OFF.png";
import Img25 from "../assets/25OFF.png";
import Img26 from "../assets/26OFF.png";
import Img27 from "../assets/27OFF.png";
import Img28 from "../assets/28OFF.png";
import Img29 from "../assets/29OFF.png";
import Img30 from "../assets/30OFF.png";
import Img31 from "../assets/31OFF.png";

// ✅ Images array reversed (Img31 → Img1)
const images = [
  Img31, Img30, Img29, Img28, Img27, Img26, Img25, Img24, Img23, Img22,
  Img21, Img20, Img19, Img18, Img17, Img16, Img15, Img14, Img13, Img12,
  Img11, Img10, Img9, Img8, Img7, Img6, Img5, Img4, Img3, Img2, Img1
];

const HeroSectionOffers = () => {
  const [topIndex, setTopIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect screen width
  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 1024);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // ✅ Global offer image based on fixed IST
  useEffect(() => {
    const updateImage = () => {
      const startUTC = Date.UTC(2025, 8, 19, 0, 0, 0); 
      const nowUTC = new Date().getTime();
      const IST_OFFSET = 5.5 * 60 * 60 * 1000;
      const nowIST = nowUTC + IST_OFFSET;
      let diffDays = Math.floor((nowIST - startUTC) / (1000 * 60 * 60 * 24));
      const index = Math.min(Math.max(diffDays, 0), 30);
      setCurrentImageIndex(index);
    };

    updateImage();
    const interval = setInterval(updateImage, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // 🔄 Flipping words animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTopIndex((prev) => (prev + 1) % topWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative text-white px-4 py-5 lg:px-24 overflow-hidden mt-0
        [border-bottom-right-radius:50px] [border-bottom-left-radius:50px] font-poppins
      "
      style={{
        background: isMobile
          ? "linear-gradient(to bottom, #000000 40%, #9E0000 100%)"
          : "linear-gradient(to bottom left, #000000 50%, #9E0000 100%)",
      }}
    >
      {/* 🔥 Overlay (desktop vs mobile) */}
      <div className="absolute inset-0">
        <img
          src={isMobile ? MobileBgOverlay : LeftBgOverlay}
          alt="Overlay"
          className={`absolute object-contain pointer-events-none 
            ${isMobile 
              ? "top-0 left-0 w-full h-auto opacity-40"   // ✅ Top-aligned on mobile
              : "top-0 left-[-230px] bottom-10 h-full w-1/2 opacity-60"}`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto flex flex-col lg:flex-row items-center lg:items-stretch gap-12 text-center lg:text-left">
        {/* Left Text */}
        <div
          className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left"
          style={{
            width: isMobile ? "90%" : "100%",
            maxWidth: isMobile ? "90%" : "60%",
            margin: isMobile ? "0 auto" : "0",
          }}
        >
          <h2 className="text-2xl sm:text-3xl mt-10 lg:mt-0 md:text-4xl font-bold leading-snug flex items-center justify-center lg:justify-start gap-2 flex-wrap">
            Expert Work Delivered,
            <span className="relative inline-block align-middle">
              <AnimatePresence mode="wait">
                <motion.span
                  key={topWords[topIndex]}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block text-yellow-400 font-bold"
                >
                  {topWords[topIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>

          <p className="text-sm md:text-base text-gray-200 max-w-xl mt-4">
            From accounting to content creation. Design to digital marketing.
            Recruitment and legal services all delivered by experts with the
            quality you'd expect at a budget that fits your priorities.
          </p>

          <p className="text-sm md:text-base text-gray-200 max-w-xl mt-2 mb-6">
            <b>Your business demands rapid execution. We deliver.</b>
          </p>

          <a href="/contact?utm_source=moh_website&utm_medium=home_hero">
            <button className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-white transition">
              Schedule a Call
            </button>
          </a>
        </div>

        {/* Right Image */}
        <div
          className="flex flex-col items-center justify-center relative "
          style={{
            width: isMobile ? "90%" : "100%",
            maxWidth: isMobile ? "90%" : "42%",
            margin: isMobile ? "0 auto" : "0",
          }}
        >
          <img
            src={images[currentImageIndex]}
            alt={`Offer ${currentImageIndex + 1}`}
            className="w-full h-full object-contain relative z-10"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />

          {/* ✅ Yellow text in bottom-right corner */}
          <p className="mt-5 text-yellow-400 text-xs sm:text-sm font-semibold">
            (Limited Offer for New Signups Only)
          </p>
        </div>
      </div>

      {/* Service Slider */}
      <div className="mt-5 relative z-10">
        <ServiceSlider />
      </div>
    </section>
  );
};

export default HeroSectionOffers;
