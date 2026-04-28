import React, { useMemo } from "react";

type Testimonial = {
  id: string;
  logoText: string;
  role: string;
  name: string;
  company: string;
  avatar: string;
  quoteTop: string;
  quoteBottom: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    logoText: "Google",
    role: "Content Marketing",
    name: "Jacob Junior",
    company: "CEO , Google",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&h=200&fit=crop",
    quoteTop:
      "Professional, Precise, And Always On Time—This Accounting Team Took The Stress Out Of Our Finances.",
    quoteBottom:
      "Their Expertise Saved Us Time And Money—Bookkeeping Has Never Been This Effortless Or Accurate",
  },
  {
    id: "t2",
    logoText: "pepperfry",
    role: "Content Marketing",
    name: "Jacob Junior",
    company: "CEO , Google",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    quoteTop:
      "Professional, Precise, And Always On Time—This Accounting Team Took The Stress Out Of Our Finances.",
    quoteBottom:
      "Their Expertise Saved Us Time And Money—Bookkeeping Has Never Been This Effortless Or Accurate",
  },
  {
    id: "t3",
    logoText: "slack",
    role: "Content Marketing",
    name: "Jacob Junior",
    company: "CEO , Google",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
    quoteTop:
      "Professional, Precise, And Always On Time—This Accounting Team Took The Stress Out Of Our Finances.",
    quoteBottom:
      "Their Expertise Saved Us Time And Money—Bookkeeping Has Never Been This Effortless Or Accurate",
  },
  {
    id: "t4",
    logoText: "Figma",
    role: "Content Marketing",
    name: "Jacob Junior",
    company: "CEO , Google",
    avatar:
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=200&h=200&fit=crop",
    quoteTop:
      "Professional, Precise, And Always On Time—This Accounting Team Took The Stress Out Of Our Finances.",
    quoteBottom:
      "Their Expertise Saved Us Time And Money—Bookkeeping Has Never Been This Effortless Or Accurate",
  },
  {
    id: "t5",
    logoText: "wipro",
    role: "Content Marketing",
    name: "Jacob Junior",
    company: "CEO , Google",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?w=200&h=200&fit=crop",
    quoteTop:
      "Professional, Precise, And Always On Time—This Accounting Team Took The Stress Out Of Our Finances.",
    quoteBottom:
      "Their Expertise Saved Us Time And Money—Bookkeeping Has Never Been This Effortless Or Accurate",
  },
  {
    id: "t6",
    logoText: "Google",
    role: "Content Marketing",
    name: "Jacob Junior",
    company: "CEO , Google",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&h=200&fit=crop",
    quoteTop:
      "Professional, Precise, And Always On Time—This Accounting Team Took The Stress Out Of Our Finances.",
    quoteBottom:
      "Their Expertise Saved Us Time And Money—Bookkeeping Has Never Been This Effortless Or Accurate",
  },
];

const chunk = <T,>(arr: T[], cols: number) => {
  const out: T[][] = Array.from({ length: cols }, () => []);
  arr.forEach((item, i) => out[i % cols].push(item));
  return out;
};

const TestimonialCard = ({ t, className = "" }: { t: Testimonial; className?: string }) => {
  return (
    <div className={`rounded-[14px] border border-[#BDBDBD] bg-white px-5 py-4 ${className}`}>
      <div className="flex items-start gap-4">
        <img
          src={t.avatar}
          alt={t.name}
          className="h-[64px] w-[64px] sm:h-[72px] sm:w-[72px] rounded-full object-cover border border-[#BDBDBD]"
          draggable={false}
        />

        <div className="min-w-0 flex-1">
          <div className="text-[20px] sm:text-[22px] font-semibold leading-none text-[#0A0A0A]">
            {t.logoText}
          </div>

          <div className="mt-1 text-[12px] text-[#444]">{t.role}</div>
          <div className="mt-1 text-[13px] font-semibold text-[#111]">{t.name}</div>
          <div className="mt-0.5 text-[12px] text-[#444]">{t.company}</div>
        </div>
      </div>

      <div className="mt-4 space-y-3 text-center text-[12px] leading-5 text-[#111]">
        <p>{t.quoteTop}</p>
        <p>{t.quoteBottom}</p>
      </div>
    </div>
  );
};

/* Desktop vertical marquee column */
const MarqueeColumn = ({
  items,
  direction,
  durationSec = 18,
}: {
  items: Testimonial[];
  direction: "up" | "down";
  durationSec?: number;
}) => {
  const loop = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="relative h-[560px] sm:h-[640px] md:h-[740px] overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />

      <div
        className={[
          "flex flex-col gap-6",
          direction === "up" ? "marquee-up" : "marquee-down",
        ].join(" ")}
        style={{ animationDuration: `${durationSec}s` }}
      >
        {loop.map((t, idx) => (
          <TestimonialCard key={`${t.id}-${idx}`} t={t} />
        ))}
      </div>
    </div>
  );
};

/* Mobile horizontal marquee row (shows ~1.3 cards) */
const MarqueeRow = ({
  items,
  direction,
  durationSec = 14,
}: {
  items: Testimonial[];
  direction: "left" | "right";
  durationSec?: number;
}) => {
  const loop = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="relative overflow-hidden">
      {/* fade left/right */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent z-10" />

      <div
        className={[
          "flex items-stretch gap-4 w-max",
          direction === "left" ? "marquee-left" : "marquee-right",
        ].join(" ")}
        style={{ animationDuration: `${durationSec}s` }}
      >
        {loop.map((t, idx) => (
          <TestimonialCard
            key={`${t.id}-m-${idx}`}
            t={t}
            // ✅ ~1.3 cards visible on mobile
            className="w-[78vw] max-w-[340px] flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

const TestimonialsMarqueeSection: React.FC = () => {
  const [c1, c2, c3] = useMemo(() => chunk(TESTIMONIALS, 3), []);

  // For mobile: two rows (one left, one right)
  const [r1, r2] = useMemo(() => chunk(TESTIMONIALS, 2), []);

  return (
    <section className="w-full bg-white font-poppins">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:pt-16">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-10">
          <span className="text-[#952502]">Built For People Like You,</span>{" "}
          <span className="text-black">Loved By People Like You</span>
        </h2>

        {/* ✅ Mobile view: 2 horizontal marquee rows */}
        <div className="md:hidden space-y-6">
          <MarqueeRow items={r1} direction="left" durationSec={16} />
          <MarqueeRow items={r2} direction="right" durationSec={18} />
        </div>

        {/* ✅ Desktop/tablet view: 3 vertical marquee columns */}
        <div className="hidden md:grid mt-10 grid-cols-3 gap-6 lg:gap-8">
          <MarqueeColumn items={c1} direction="down" durationSec={20} />
          <MarqueeColumn items={c2} direction="up" durationSec={18} />
          <MarqueeColumn items={c3} direction="down" durationSec={22} />
        </div>
      </div>

      {/* Component CSS animations */}
      <style>{`
        /* Vertical */
        .marquee-up {
          animation-name: marqueeUp;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .marquee-down {
          animation-name: marqueeDown;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        @keyframes marqueeUp {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        @keyframes marqueeDown {
          from { transform: translateY(-50%); }
          to   { transform: translateY(0); }
        }

        /* Horizontal */
        .marquee-left {
          animation-name: marqueeLeft;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .marquee-right {
          animation-name: marqueeRight;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }

        /* pause on hover */
        .marquee-up:hover, .marquee-down:hover,
        .marquee-left:hover, .marquee-right:hover {
          animation-play-state: paused;
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-up, .marquee-down, .marquee-left, .marquee-right {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsMarqueeSection;
