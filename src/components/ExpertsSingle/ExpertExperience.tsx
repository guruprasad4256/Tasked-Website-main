import React from "react";

const timelineData = [
  { company: "Amazon", role: "Jr. UI/UX Designer", duration: "2015–2017", years: "2 years" },
  { company: "Google", role: "Sr. UI/UX Designer", duration: "2017–2019", years: "2 years" },
  { company: "Ikea", role: "Sr. UI/UX Designer", duration: "2019–2022", years: "3 years" },
  { company: "Slack", role: "Sr. UI/UX Designer", duration: "2022–2023", years: "1 year" },
  { company: "Oracle", role: "Team Lead", duration: "2023–2024", years: "1 year" },
  { company: "M.O.H", role: "UI/UX Designer", duration: "2024–Present", years: "1 year" },
];

const TimelineSection = () => {
  return (
    <div className="bg-black text-white pb-[150px] px-4">
      {/* Heading */}
      <div className="mb-16 text-left">
        <h2 className="text-3xl md:text-4xl pb-24 font-bold underline">
          Professional Timeline
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative flex justify-between items-center w-full">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-red-700 -translate-y-1/2"></div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => {
          const isAbove = index % 2 === 0;
          const lineHeight = "2rem";

          return (
            <div key={index} className="relative flex flex-col items-center w-1/6">
              {/* Vertical dotted line with dots */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 ${
                  isAbove ? "bottom-full" : "top-full"
                } flex flex-col items-center`}
                style={{ height: lineHeight }}
              >
                {isAbove && <div className="w-2 h-2 bg-white rounded-full"></div>}
                <div className="flex-1 border-l-2 border-dotted border-gray-500"></div>
                {!isAbove && <div className="w-2 h-2 bg-white rounded-full"></div>}
              </div>

              {/* Content */}
              <div
                className={`absolute ${
                  isAbove ? "-top-[7rem]" : "top-[2rem]"
                } w-40 text-center`}
              >
                <p className="font-semibold text-lg">{item.company}</p>
                <p className="text-sm text-gray-200">{item.role}</p>
                <p className="text-xs text-gray-400">{item.duration}</p>
                <p className="text-xs text-gray-500">{item.years}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineSection;
