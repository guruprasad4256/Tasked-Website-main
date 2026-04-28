import React from "react";
import { motion } from "framer-motion";

const ExpertsStatsSection: React.FC = () => {
  return (
    <section className="w-full bg-black py-16 px-6 font-poppins">
      {/* Animate overlay when in view */}
      <motion.div
        className="relative max-w-6xl mx-auto rounded-2xl bg-black overflow-hidden p-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Gradient overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-red-700 to-black opacity-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-white mb-10 sm:mb-16 font-poppins">
            m.o.h Experts
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-10 sm:mb-16 font-poppins">
            Torem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc
            Vulputate Libero Et Velit Interdum, Ac Aliquet Odio Mattis. Ac
            Aliquet Odio Mattis.T. Nunc Vulputate Libero Et Velit Interdum, Ac
            Aliquet Odio Mattis.T.
          </p>

          {/* Always 3 in a row */}
          <div className="grid grid-cols-3 gap-4 sm:gap-12 mb-12">
            <div>
              <h3 className="text-[32px] sm:text-[60px] md:text-[80px] font-semibold text-white font-poppins">
                97%
              </h3>
              <p className="mt-0 text-[12px] sm:text-[18px] md:text-[20px] font-semibold text-white font-poppins">
                Customer satisfaction
              </p>
            </div>
            <div>
              <h3 className="text-[32px] sm:text-[60px] md:text-[80px] font-semibold text-white font-poppins">
                129
              </h3>
              <p className="mt-0 text-[12px] sm:text-[18px] md:text-[20px] font-semibold text-white font-poppins">
                Experts on demand
              </p>
            </div>
            <div>
              <h3 className="text-[32px] sm:text-[60px] md:text-[80px] font-semibold text-white font-poppins">
                97%
              </h3>
              <p className="mt-0 text-[12px] sm:text-[18px] md:text-[20px] font-semibold text-white font-poppins">
                Increase in deal size
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExpertsStatsSection;
