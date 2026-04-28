import React from "react";

const values = [
  {
    title: "Community First",
    description:
      "Every decision prioritises the success of our clients and specialists",
  },
  {
    title: "Boundless Expertise",
    description:
      "Breaking down barriers between businesses and world class talent",
  },
  {
    title: "Time Well Spent",
    description:
      " Transparent hour logs and ITT forecasting. No idle time.",
  },
];

const OurValues = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 font-poppins">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Our Values
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-12 max-w-3xl mx-auto">
        {values.map((val, idx) => (
          <div
            key={idx}
            className="fancy rounded-xl bg-black p-6 text-center shadow-lg animate-[slideUp_0.8s_ease-in-out] h-80 flex flex-col justify-center"
          >
            <h3 className="text-lg font-semibold mb-3 text-white relative z-10">
              {val.title}
            </h3>
            <p className="text-sm text-white relative z-10">{val.description}</p>
          </div>
        ))}
      </div>

      {/* Custom CSS */}
      <style>{`
        .fancy {
          --offset: 3px;
          position: relative;
          overflow: hidden;
          border-radius: 12px;
        }
        .fancy::before {
          content: '';
          background: conic-gradient(transparent 270deg, red, transparent);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          aspect-ratio: 1;
          width: 100%;
          animation: rotate 2s linear infinite;
          z-index: 0; /* keep behind content */
        }
        .fancy::after {
          content: '';
          background: black; /* background for inside */
          border-radius: inherit;
          position: absolute;
          inset: var(--offset);
          height: calc(100% - 2 * var(--offset));
          width: calc(100% - 2 * var(--offset));
          z-index: 0; /* keep behind content */
        }
        .fancy > * {
          position: relative;
          z-index: 1; /* make sure text stays visible */
        }
        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) scale(1.4) rotate(0turn);
          }
          to {
            transform: translate(-50%, -50%) scale(1.4) rotate(1turn);
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default OurValues;
