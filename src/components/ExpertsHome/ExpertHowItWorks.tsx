import ExpertHIWbg from "@/assets/ExpertHIWbg.png"; // overlay design
import Assets from "@/assets/ChooseAssets.svg";
import Deal from "@/assets/Deal.svg";
import Bag from "@/assets/Bag.svg";

const steps = [
  {
    title: "Choose from our assets archive",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum Corem ipsum dolor sit amet,Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellusest a, mattis tellus...",
    icon: Assets,
  },
  {
    title: "Make a Deal",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum Corem ipsum dolor sit amet,mattis tellus mattis tellus...",
    icon: Deal,
  },
  {
    title: "The asset starts working Immediately",
    description:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est aCorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus, mattCorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum Corem ipsum dolor sit amet,is tellus...",
    icon: Bag,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-black text-white py-16 px-6 md:px-12 overflow-hidden">
      {/* Full Section Overlay */}
      <img
        src={ExpertHIWbg}
        alt=""
        className="absolute left-0 top-0 h-full w-auto opacity-70 pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-400 mb-16">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et aliquet velit interdum, ac aliquet odio mattis.
          <br />
          Torem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Steps */}
        <div className="flex flex-col items-center space-y-0">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              {/* Step Box with inner black glow */}
              <div
                className="relative flex items-center gap-6 rounded-xl p-6 w-full md:w-[80%] 
                border border-white/20 bg-black transition-all duration-500 group cursor-pointer
                [box-shadow:inset_0_0_40px_15px_rgba(0,0,0,0.9)]
                hover:bg-[#990000]/100 hover:[box-shadow:inset_0_0_60px_25px_rgba(0,0,0,1)]
                hover:border-white"
              >
                {/* Icon */}
                <div className="flex-shrink-0 flex items-center justify-center w-[100px] h-[100px] transition-transform duration-300 group-hover:scale-110 origin-center">
                  <img
                    src={step.icon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text */}
                <div className="text-left relative z-10">
                  <h3
                    className="text-lg font-semibold transition-transform duration-300 
                               group-hover:scale-105 group-hover:text-white 
                               inline-block origin-center"
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-gray-400 text-sm mt-2 transition-colors duration-300 
                               group-hover:text-gray-200"
                  >
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow (except last item) */}
              {index < steps.length - 1 && (
                <div className="mt-[20px] mb-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="70"
                    viewBox="0 0 20 70"
                    fill="none"
                  >
                    {/* Dotted line */}
                    <line
                      x1="10"
                      y1="0"
                      x2="10"
                      y2="55"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="4,6"
                    />
                    {/* Arrowhead */}
                    <path
                      d="M5 50 L10 60 L15 50"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
