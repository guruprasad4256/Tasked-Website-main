import { useState, useRef, useEffect } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Casestudy from "@/assets/CaseStudy.png";
import Casestudy1 from "@/assets/CaseStudy1.png";
import Casestudy2 from "@/assets/CaseStudy2.png";
import Casestudy3 from "@/assets/CaseStudy3.png";
import Casestudy4 from "@/assets/CaseStudy4.png";

const rawCaseStudies = [
  {
    title: "How Short-Form Video Content Drove 10x Engagement On TikTok",
    image: Casestudy2,
  },
  { title: "Clicks To Conversions: How We Scaled ROI By 300%", image: Casestudy1 },
  { title: "Niche Authority: How A Health-Tech Brand Used Whitepapers", image: Casestudy3 },
  { title: "Organic Reach: Strategy That Grew a Brand on Instagram", image: Casestudy4 },
  { title: "Campaign That Delivered 20x ROAS", image: Casestudy },
];

const ITEMS_PER_PAGE = 3;

const CaseStudiesSlider = () => {
  const [page, setPage] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const duplicatedCaseStudies = [...rawCaseStudies, ...rawCaseStudies];
  const totalPages = Math.ceil(duplicatedCaseStudies.length / ITEMS_PER_PAGE);

  // --- Custom smooth scroll with adjustable duration ---
  const scrollToPage = (index: number) => {
    setPage(index);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / ITEMS_PER_PAGE;
      const target = index * cardWidth * ITEMS_PER_PAGE;
      const start = carouselRef.current.scrollLeft;
      const change = target - start;
      const duration = 1000;
      let startTime: number | null = null;

      const animateScroll = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        carouselRef.current!.scrollLeft = start + change * progress;

        if (elapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPage((prevPage) => {
        const nextPage = (prevPage + 1) % totalPages;
        scrollToPage(nextPage);
        return nextPage;
      });
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --- Drag / Swipe handlers ---
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    startX.current = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <section className="bg-white pb-8 pt-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ✅ Heading Added */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#952502] mb-10">
          Case Studies
        </h2>

        {/* Responsive layout: row on desktop, stacked on mobile */}
        <div className="flex flex-col lg:flex-row gap-6 overflow-hidden">
          {/* Highlight Card (mobile top, desktop left) */}
          <div className="relative flex-shrink-0 w-full lg:w-[400px] h-[300px] lg:h-[370px] rounded-[20px] shadow overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${Casestudy})` }}
            />
            <div className="relative z-10 p-6 flex flex-col justify-center h-full text-left">
              <p className="text-black mb-4 text-[18px] lg:text-[22px] font-semibold">
                Ideas in Action, Results in Focus.
              </p>
              <p className="text-[#903033] text-[32px] lg:text-[42px] font-bold">
                155+ <span className="font-semibold">Cases</span>
              </p>
            </div>
          </div>

          {/* Scrollable Slider (mobile below, desktop right) */}
          <div className="overflow-hidden flex-1">
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>
                {`
                  ::-webkit-scrollbar { display: none; }
                `}
              </style>

              {duplicatedCaseStudies.map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[220px] md:w-[260px] lg:w-[300px]
                  h-[320px] md:h-[320px] lg:h-[370px] rounded-[20px] bg-[#903033]
                  text-white shadow-lg relative flex flex-col overflow-visible
                  group transition-colors duration-500 hover:bg-black"
                >
                  <div className="h-[65%] group-hover:h-[60%] w-full transition-all duration-500 relative z-10 mb-[8px]">
                    <div className="w-full h-full relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10" />
                    </div>
                  </div>

                  <div className="h-[35%] group-hover:h-[40%] bg-transparent p-3 flex flex-col justify-between transition-all duration-500 z-0">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <div className="self-end w-7 h-7 rounded-full flex items-center justify-center bg-white text-[#952502] transition-transform duration-500 group-hover:-rotate-[60deg]">
                      <FaArrowRight size={12} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-3 mt-8">
          <button
            onClick={() => scrollToPage(Math.max(0, page - 1))}
            disabled={page === 0}
            className="text-black disabled:opacity-30"
          >
            <FaChevronLeft size={18} />
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToPage(i)}
              className={`w-6 h-6 rounded-full text-sm flex items-center justify-center ${
                page === i ? "bg-[#F4B400] text-black" : "bg-gray-200 text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => scrollToPage(Math.min(totalPages - 1, page + 1))}
            disabled={page === totalPages - 1}
            className="text-black disabled:opacity-30"
          >
            <FaChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSlider;
