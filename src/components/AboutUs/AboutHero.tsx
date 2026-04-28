import { FaArrowRight } from "react-icons/fa";
import Office from "../../assets/Office.png"; // Office image

const WhoWeAre = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 font-poppins">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
        Who We Are & What We Stand For
      </h2>

      {/* Content */}
      <div className="grid md:grid-cols-10 gap-10 items-center max-w-7xl mx-auto">
        {/* Left Text (40%) */}
        <div className="md:col-span-4 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-red-600 mb-4">
            Focus on what moves the business. We'll ship the work.
          </h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Manhours On Hire is a fully managed, subscription based service that
            plugs senior specialists into your company. From Marketing, Design,
            Content, HR, Recruitment, Legal, and Accounting exactly when you
            need them. We promise No ‘hiring cycles' and never ‘idle payroll.’
          </p>
          <p className="text-sm leading-relaxed text-gray-300 mt-4">
            We scope your goals, match the right experts, and own delivery with
            an account manager and QA layer. You pay only for productive hours
            you can see and control. Pause, scale, or reallocate anytime under
            one contract and one invoice.
          </p>
        </div>

        {/* Right Side Shape with Office Image (60%) */}
        <div className="md:col-span-6 flex justify-center w-full">
          <div className="relative w-full h-[400px] group overflow-visible">
            {/* SVG ClipPath */}
            <svg width="0" height="0">
              <defs>
                <path
                  id="folderPath"
                  transform="scale(1,-1) translate(0,-1)"
                  d="
                    M0,0.1
                    Q0,0 0.1,0
                    H0.6
                    Q0.7,0 0.7,0.12
                    C0.7,0.25 0.9,0.25 0.95,0.25
                    A0.09,0.09 0 0 1 1,0.3
                    V0.9
                    Q1,1 0.9,1
                    H0.1
                    Q0,1 0,0.9
                    Z
                  "
                />
                <clipPath id="clipPath" clipPathUnits="objectBoundingBox">
                  <use href="#folderPath" />
                </clipPath>
              </defs>
            </svg>

            {/* Drop-shadow wrapper (white shadow) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                filter: "drop-shadow(6px 6px 12px rgba(255,255,255,0.6))",
              }}
            >
              <div
                style={{
                  clipPath: "url(#clipPath)",
                  WebkitClipPath: "url(#clipPath)",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
                className="relative group"
              >
                {/* Background Image (Office) */}
                <img
                  src={Office}
                  alt="Office"
                  className="w-full h-full object-cover opacity-70 transition-opacity duration-300"
                />
              </div>
            </div>

            {/* Floating Arrow */}
            <div className="absolute bottom-1 right-8 md:right-[50px] z-20 animate-float">
              <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,1)]">
                <FaArrowRight size={20} className="rotate-90" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 2s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default WhoWeAre;
