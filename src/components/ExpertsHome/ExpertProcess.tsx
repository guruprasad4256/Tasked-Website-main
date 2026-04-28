import React from "react";
import Galaxy from "@/assets/Galaxy.png"; // replace with your galaxy image
import Assets from "@/assets/ChooseAssets.svg";
import Deal from "@/assets/Deal.svg";
import Bag from "@/assets/Bag.svg";

const VettingProcess: React.FC = () => {
  const steps = [
    {
      icon: Assets,
      title: "Communication & Attitude Check",
      description:
        "andidates solve real-world business challenges to demonstrate analytical thinking, creativity, and structured problem-solving ability. We evaluate clarity of speech, active listening, and how applicants express their thoughts. We ensure cultural fit and professionalism.",
    },
    {
      icon: Deal,
      title: "Assessment",
      description:
        "andidates solve real-world business challenges to demonstrate analytical thinking, creativity, and structured problem-solving ability. Applicants undergo skill-based assessments relevant to their expertise. This helps us measure technical knowledge and practical skills.",
    },
    {
      icon: Bag,
      title: "Problem solving challenge",
      description:
        "Candidates solve real-world business challenges to demonstrate analytical thinking, creativity, and structured problem-solving ability.andidates solve real-world business challenges to demonstrate analytical thinking, creativity, and structured problem-solving ability.",
    },
  ];

  return (
    <section className="w-full px-4 md:px-12 py-16 bg-black font-poppins">
      {/* Section Header */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mb-3">
        Our Vetting Process
      </h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto text-sm md:text-base mb-12">
        Top-tier professionals,{" "}
        <span className="font-semibold" style={{ color: "#E9462F" }}>
          Always Within Reach
        </span>
      </p>

      {/* Content Grid */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-10">
        {/* Left side - 70% */}
        <div className="w-full md:w-[65%] space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <img src={step.icon} alt={step.title} className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#E9462F]">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
              {/* Line under each description */}
              <div className="border-b border-gray-700 mt-4"></div>
            </div>
          ))}
        </div>

        {/* Right side - 30% */}
        <div className="w-full md:w-[35%] flex justify-center md:justify-end">
          <img
            src={Galaxy}
            alt="Galaxy Animation"
            className="w-72 md:w-96 animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default VettingProcess;
