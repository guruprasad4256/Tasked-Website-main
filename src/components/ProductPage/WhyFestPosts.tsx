import React from "react";
import { Button } from "@/components/ui/button";

/* Images */
import topImg from "@/assets/FP4.png";
import midImg from "@/assets/FP3.png";
import bottomImg from "@/assets/FP5.png";

const CARD_RADIUS = "rounded-[24px]";

const WhyFestivalPostsSection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto bg-white px-4 pt-10 font-poppins">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">
        {/* LEFT */}
        <div className="flex justify-center overflow-hidden">
          <div
            className="
              group relative
              w-[240px] h-[360px]
              sm:w-[280px] sm:h-[420px]
              md:w-[300px] md:h-[460px]
              flex items-center justify-center
            "
            style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
          >
            {/* Hover catcher */}
            <div className="absolute -inset-[60px] sm:-inset-[80px] md:-inset-[100px] z-0" />

            {/* Bottom */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div
                className={`
                  w-[200px] h-[280px] ${CARD_RADIUS}
                  overflow-hidden
                  shadow-[0_14px_35px_rgba(0,0,0,0.18)]
                  opacity-0 transition-all duration-300 ease-out
                  translate-y-[30px]
                  group-hover:opacity-100
                  group-hover:translate-y-[20px]
                  group-hover:-translate-x-[5px]
                  group-hover:-rotate-[65deg]
                `}
              >
                <img
                  src={bottomImg}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Middle */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div
                className={`
                  w-[200px] h-[280px] ${CARD_RADIUS}
                  overflow-hidden
                  shadow-[0_16px_40px_rgba(0,0,0,0.2)]
                  opacity-0 transition-all duration-300 ease-out
                  translate-y-[20px]
                  group-hover:opacity-100
                  group-hover:-translate-y-[30px]
                  group-hover:-translate-x-[20px]
                  group-hover:-rotate-[65deg]
                `}
              >
                <img
                  src={midImg}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Top */}
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <div
                className={`
                  w-[200px] h-[280px] ${CARD_RADIUS}
                  overflow-hidden
                  shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                  transition-all duration-300 ease-out
                  group-hover:-translate-y-[70px]
                  group-hover:-translate-x-[35px]
                  group-hover:-rotate-[65deg]
                `}
              >
                <img
                  src={topImg}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="text-center lg:text-left">
          <div className="flex flex-wrap items-center justify-center lg:justify-start mb-4 gap-4 text-xs sm:text-sm text-gray-500">
            <span>• 96% Satisfaction Rate</span>
            <span>• 300+ Customers Satisfied</span>
            <span>• 400+ Projects Submitted</span>
          </div>

          <h2 className="text-2xl sm:text-2xl lg:text-3xl font-semibold text-[#952502] mb-5 leading-snug">
            Why Festival Posts? Because The
            <br className="hidden sm:block" />
            Celebration Starts Online!
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Festival posts aren’t just colorful updates — they’re your brand’s
            golden ticket to ride the festive wave! Whether it’s Diwali’s
            sparkle, Christmas cheer, or Holi’s color splash, these moments give
            your audience something to smile, like, and share.
          </p>

          <div className="mt-7 flex justify-center lg:justify-start">
            <Button className="bg-[#8B1B1B] hover:bg-[#6f1515] text-white px-8 sm:px-10 py-5 rounded-2xl font-medium w-[60%] sm:w-auto">
              Book a Subscription
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFestivalPostsSection;
