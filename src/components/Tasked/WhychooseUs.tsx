import React from "react";

const FEATURES = ["Flexible", "One-Stop Solution", "Budget Friendly", "Made For Startups"];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="w-full bg-white font-poppins">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:pt-16">
        {/* Top label */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <span className="h-px w-14 sm:w-20 border-t border-dashed border-slate-400" />
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-[#952502] mb-3 sm:mb-5">
            Why Choose Us ?
          </h3>
          <span className="h-px w-14 sm:w-20 border-t border-dashed border-slate-400" />
        </div>

        {/* Main heading */}
        <h2 className="mt-6 sm:mt-10 text-center text-[22px] sm:text-[26px] md:text-[30px] font-bold text-black">
          We Innovate Ideas To Help Grow Your Business
        </h2>

        {/* Paragraph */}
        <p className="mt-5 sm:mt-8 mx-auto max-w-3xl text-center text-[14px] sm:text-[15px] leading-6 sm:leading-[26px] text-black">
          Rorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate
          Libero Et Velit Interdum, Ac Aliquet Odio Mattis. Class Aptent Taciti
          Sociosqu Ad Litora Torquent Per Conubia Nostra, Per Inceptos Himenaeos.
          Curabitur Tempus Urna At Turpis Condimentum Lobortis. Ut Commodo
          Efficitur Neque.
        </p>

        {/* ✅ Pills row like image (responsive) */}
        <div className="mt-8 sm:mt-10">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {FEATURES.map((item) => (
              <div
                key={item}
                className="
                  px-8 sm:px-10
                  py-3 sm:py-4
                  rounded-full
                  text-white text-[14px] sm:text-[15px] font-medium
                  bg-gradient-to-r from-[#8B0000] via-[#8B0000] to-[#3a0000]
                  shadow-[0_10px_25px_rgba(0,0,0,0.18)]
                  min-w-[180px] sm:min-w-[220px]
                  text-center
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
