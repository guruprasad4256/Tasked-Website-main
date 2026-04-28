import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Diamond, Lightbulb, PiggyBank, Hand } from "lucide-react";
import ExpertWCS from "@/assets/ExpertWCS.png";

const topWords = ["Timeless.", "Innovation.", "Quality."];

const WhyChooseUs: React.FC = () => {
  const [topIndex, setTopIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTopIndex((prev) => (prev + 1) % topWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Diamond className="w-8 h-8 text-red-500" />,
      title: "Quality",
      desc: "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et aliquet velit interdum, ac aliquet odio mattis.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-red-500" />,
      title: "Innovation",
      desc: "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et aliquet velit interdum, ac aliquet odio mattis.",
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-red-500" />,
      title: "Value Driven",
      desc: "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et aliquet velit interdum, ac aliquet odio mattis.",
    },
    {
      icon: <Hand className="w-8 h-8 text-red-500" />,
      title: "Top 1%",
      desc: "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et aliquet velit interdum, ac aliquet odio mattis.",
    },
  ];

  return (
    <section className="w-full bg-black py-20 px-6 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div
  className="text-center md:text-left space-y-6 relative p-6 rounded-2xl"
  style={{
    backgroundImage: `url(${ExpertWCS})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

          {/* Animated Sliding Words */}
          <div className="h-[70px] relative overflow-hidden text-5xl md:text-6xl font-bold leading-tight">
            <AnimatePresence mode="wait">
              <motion.span
                key={topIndex}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute left-0 top-0 w-full text-white"
              >
                {topWords[topIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Two Static Headings */}
          <div className="space-y-1">
  <h1 className="text-[50px] font-semibold text-white">
    Value Driven
  </h1>
  <h1 className="text-[50px] font-semibold text-white">
    Innovation
  </h1>
</div>

          {/* Subtext */}
          <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-md">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>

          {/* CTA Button */}
          <button className="mt-4 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-red-600 hover:text-white transition">
            Schedule a Call
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-10 text-center md:text-left">
            Why Choose Us?
          </h3>

          <div className="space-y-10">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="flex-shrink-0 text-red-500">{feature.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
