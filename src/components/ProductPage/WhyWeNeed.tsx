import React from "react";

const FEATURES = [
  "Increased Sales Growth",
  "Better Building Connection",
  "Showcasing Brand Personality",
  "Enhanced Engagement",
];

const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const WhyDoWeNeedThisSection: React.FC = () => {
  const description = `Festival posts aren’t just colorful updates — they’re your brand’s golden ticket to ride the festive wave! Whether it’s Diwali’s sparkle, Christmas cheer, or Holi’s color splash, these moments give your audience something to smile, like, and share. They help you stay relevant, build trust, and create joyful touchpoints that people remember.Festival posts aren’t just colorful updates — they’re your brand’s golden ticket to ride the festive wave! Whether it’s Diwali’s sparkle, Christmas cheer, or Holi’s color splash, these moments give your audience something to smile, like, and share. They help you stay relevant, build trust, and create joyful touchpoints that people remember.`;

  return (
    <section className="w-full bg-white font-poppins">
      <div className="mx-auto max-w-7xl pt-12">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#952502]">
          Why do we need this?
        </h2>

        {/* Description – duplicated & justified */}
        <div className="mt-6 mb-3 mx-auto max-w-7xl text-justify text-sm md:text-[15px] leading-6 md:leading-[26px] text-slate-800 space-y-5">
          <p>{description}</p>
          
        </div>

        {/* Red pill */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-7xl rounded-full bg-[#8B0000] px-6 sm:px-10 py-4">
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-3">
              {FEATURES.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-white text-[13px] sm:text-[14px] font-medium"
                >
                  <CheckIcon className="h-[18px] w-[18px] text-white" />
                  <span className="whitespace-nowrap">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spacing like screenshot */}
        <div className="mt-12" />
      </div>
    </section>
  );
};

export default WhyDoWeNeedThisSection;
