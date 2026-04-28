import React, { useMemo, useState } from "react";
import StepImg1 from "@/assets/HowItworks.png";

type StepCard = {
  id: number;
  step: string;
  title: string;
  desc: string[];
  bg: string;
  accent: string;
  image: string;
};

const STEPS: StepCard[] = [
  {
    id: 1,
    step: "01",
    title: "Choose your package",
    desc: [
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    ],
    bg: "#AF0000",
    accent: "#FFC107",
    image: StepImg1,
  },
  {
    id: 2,
    step: "02",
    title: "Submit your task",
    desc: [
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    ],
    bg: "#C61D10",
    accent: "#FFC107",
    image: StepImg1,
  },
  {
    id: 3,
    step: "03",
    title: "Track progress",
    desc: [
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    ],
    bg: "#D3342B",
    accent: "#FFC107",
    image: StepImg1,
  },
  {
    id: 4,
    step: "04",
    title: "Review, ship and refill",
    desc: [
      "Approve deliverables, share feedback, Add hours anytime. Secure and NDA protected. Transparent billing. From ₹350/hr.",
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    ],
    bg: "#7B1111",
    accent: "#FFC107",
    image: StepImg1,
  },
];

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={[
      "h-5 w-5 text-white/90 transition-transform duration-300",
      open ? "rotate-180" : "rotate-0",
    ].join(" ")}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const HowItWorksAccordion: React.FC = () => {
  // null = all closed
  const [activeId, setActiveId] = useState<number | null>(4); // open 04 by default like screenshot

  // Desktop 2-col: left 01,03 | right 02,04
  const leftCol = useMemo(() => STEPS.filter((x) => x.id === 1 || x.id === 3), []);
  const rightCol = useMemo(() => STEPS.filter((x) => x.id === 2 || x.id === 4), []);

  /* Desktop height rules (same vibe as before) */
  const getDesktopHeightClass = (cardId: number) => {
    const NORMAL = "h-[500px]";
    const EXPANDED = "h-[620px]";
    const SHRUNK = "h-[380px]";

    if (activeId === null) return NORMAL;
    if (activeId === cardId) return EXPANDED;

    const leftActive = activeId === 1 || activeId === 3;
    const rightActive = activeId === 2 || activeId === 4;

    if (leftActive && (cardId === 1 || cardId === 3)) return SHRUNK;
    if (rightActive && (cardId === 2 || cardId === 4)) return SHRUNK;

    return NORMAL;
  };

  const DesktopCard = ({ card }: { card: StepCard }) => {
    const expanded = activeId === card.id;

    return (
      <div
        onMouseEnter={() => setActiveId(card.id)}
        onClick={() => setActiveId(card.id)}
        className={[
          "relative overflow-hidden rounded-[28px] cursor-pointer select-none",
          "transition-[height] duration-500 ease-out",
          getDesktopHeightClass(card.id),
        ].join(" ")}
        style={{ backgroundColor: card.bg }}
      >
        <div className="relative z-10 p-8 sm:p-10">
          <div className="text-white text-5xl sm:text-6xl font-light">{card.step}</div>

          <h3
            className="mt-4 text-[18px] sm:text-[22px] font-semibold max-w-[420px]"
            style={{ color: card.accent }}
          >
            {card.title}
          </h3>

          <div className="mt-4 space-y-4">
            {(expanded ? card.desc : card.desc.slice(0, 1)).map((line, i) => (
              <p key={i} className="text-white/90 text-sm leading-6 max-w-[520px]">
                {line}
              </p>
            ))}
          </div>
        </div>

        <div
          className={[
            "absolute right-0 bottom-0 transition-all duration-500 ease-out",
            expanded ? "opacity-100 scale-100" : "opacity-95 scale-[0.98]",
          ].join(" ")}
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-[210px] sm:w-[240px] md:w-[280px] pointer-events-none translate-x-4 translate-y-4"
            draggable={false}
          />
        </div>
      </div>
    );
  };

  const MobileItem = ({ card }: { card: StepCard }) => {
    const open = activeId === card.id;

    return (
      <div className="w-full">
        {/* Header bar (like screenshot) */}
        <button
          type="button"
          onClick={() => setActiveId((prev) => (prev === card.id ? null : card.id))}
          className={[
            "w-full flex items-center justify-between",
            "rounded-[10px] px-4 py-3",
            "text-left",
          ].join(" ")}
          style={{ backgroundColor: card.bg }}
          aria-expanded={open}
        >
          <div className="flex items-center gap-3">
            <span className="text-white/95 font-semibold text-sm">{card.step}</span>
            <span className="text-white font-semibold text-sm">{card.title}</span>
          </div>
          <Chevron open={open} />
        </button>

        {/* Expanded panel */}
        <div
          className={[
            "overflow-hidden transition-[max-height,opacity] duration-400 ease-out",
            open ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div
            className="relative mt-2 rounded-[10px] overflow-hidden"
            style={{ backgroundColor: card.bg }}
          >
            {/* image on right like screenshot */}
            <img
              src={card.image}
              alt=""
              className="absolute right-0 bottom-0 w-[170px] h-[120px] object-cover opacity-90"
              draggable={false}
            />

            {/* dark gradient overlay so text readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/10" />

            <div className="relative z-10 p-4 pr-24">
              <p className="text-white/90 text-[12px] leading-5">
                {card.desc[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-white font-poppins">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#952502] mb-4 sm:mb-5">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-7 text-sm md:text-base">
            Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        {/* ✅ Mobile view like screenshot */}
        <div className="lg:hidden mt-6 space-y-3">
          {STEPS.map((card) => (
            <MobileItem key={card.id} card={card} />
          ))}
        </div>

        {/* ✅ Desktop view (your 2-column accordion) */}
        <div
          className="hidden lg:grid mt-10 grid-cols-2 gap-8"
          onMouseLeave={() => setActiveId(null)}
        >
          <div className="flex flex-col gap-8">
            {leftCol.map((card) => (
              <DesktopCard key={card.id} card={card} />
            ))}
          </div>

          <div className="flex flex-col gap-8">
            {rightCol.map((card) => (
              <DesktopCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksAccordion;
