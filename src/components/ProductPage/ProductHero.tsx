import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import fp1 from "@/assets/FP1.png";
import fp2 from "@/assets/FP2.png";
import fp3 from "@/assets/FP3.png";
import fp4 from "@/assets/FP4.png";
import fp5 from "@/assets/FP5.png";
import fp6 from "@/assets/FP6.png";
import fp7 from "@/assets/FP7.png";
import Breadcrumbs from "../Breadcrumbs";

type AccordionItem = {
  id: string;
  img: string;
};

const items: AccordionItem[] = [
  { id: "1", img: fp1 },
  { id: "2", img: fp2 },
  { id: "3", img: fp3 },
  { id: "4", img: fp4 },
  { id: "5", img: fp5 },
  { id: "6", img: fp6 },
  { id: "7", img: fp7 },
];

const FestivePostingsSection: React.FC = () => {
  const [activeId, setActiveId] = useState(items[0].id);

  return (
    <section className="w-full max-w-7xl mx-auto bg-white px-4 pt-12 pb-6 font-poppins">
      {/* Top content */}
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-3xl">
          <Breadcrumbs />

          <h2 className="text-left text-3xl md:text-4xl font-semibold text-[#952502] mb-2">
            Festive Postings
          </h2>

          <p className="mt-3 text-lg font-medium text-gray-500">
            Celebrate smarter not harder.
          </p>

          <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-900 font-normal">
            This m.o.h Top Bundles Design, Copywriting, And Scheduling Of All
            Major Festival Posts Across Your Social Media Channels. Stay
            Top-Of-Mind With Festive Greetings That Feel Effortless And
            Polished.
          </p>
        </div>

        {/* Button – 60% on small devices */}
        <div className="md:pt-2 flex justify-center md:justify-start">
          <Button className="bg-[#8B2121] hover:bg-[#952502] text-white px-6 py-5 rounded-xl font-medium w-[60%] md:w-auto">
            Book a Subscription
          </Button>
        </div>
      </div>

      {/* Image Accordion */}
      <div className="mt-10">
        <div
          className="
            flex gap-4
            h-[280px] sm:h-[340px] md:h-[420px]
            overflow-x-auto lg:overflow-visible
            snap-x snap-mandatory lg:snap-none
            pb-2
            [-webkit-overflow-scrolling:touch]
          "
        >
          {items.map((item) => {
            const isActive = activeId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onMouseEnter={() => setActiveId(item.id)}
                onFocus={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)} // mobile tap support
                className={`
                  relative overflow-hidden rounded-3xl shadow-lg outline-none
                  transition-all duration-300 ease-out

                  /* Mobile sizing (scroll cards) */
                  flex-shrink-0 snap-center
                  w-[220px] sm:w-[260px]

                  /* Tablet – ~2.5 cards visible */
                  md:w-[40%] md:flex-shrink-0 md:snap-none

                  /* Desktop accordion behavior */
                  lg:w-auto lg:flex-shrink
                  ${isActive ? "lg:flex-[2]" : "lg:flex-[1]"}
                `}
                aria-label={`Festive image ${item.id}`}
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />

                {/* subtle polish overlay */}
                <div className="absolute inset-0 bg-black/5" />
              </button>
            );
          })}
        </div>

        {/* Optional: hide scrollbar nicely (component-only) */}
        <style>{`
          @media (max-width: 1023px) {
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default FestivePostingsSection;
