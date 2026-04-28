import React from "react";

import PP1 from "@/assets/PP1.png";
import PP2 from "@/assets/PP2.png";
import PP3 from "@/assets/PP3.png";
import PP4 from "@/assets/PP4.png";
import PP5 from "@/assets/PP5.png";

const images = [PP1, PP2, PP3, PP4, PP5];

const PastProjectsMarquee: React.FC = () => {
  return (
    <section className="w-full bg-white pt-6 pb-6">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#952502] mb-10">
        Get Inspired from Past Projects
      </h2>

      {/* Max width container */}
      <div className="max-w-7xl mx-auto overflow-hidden">
        {/* COMPONENT-ONLY CSS */}
        <style>{`
          @keyframes marqueeScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .marquee-track {
            display: flex;
            width: max-content;
            gap: 24px;
            animation: marqueeScroll 20s linear infinite;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Moving Track */}
        <div className="marquee-track">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="w-[200px] h-[280px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastProjectsMarquee;
