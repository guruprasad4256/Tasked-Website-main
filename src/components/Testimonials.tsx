import { useState, useRef, useEffect } from "react";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";
import manImg from "../assets/manImg.webp";
import Arvind from "../assets/Arvind.png";
import googleLogo from "../assets/googleLogo.png";
import AnekantJain from "../assets/AnekantJain.png";
import AjayApchal from "../assets/AjayApchal.jpg";
import niteeshsood from "../assets/niteeshsood.jpg";
import Dakshayini from "../assets/Dakshayini.jpg";

const testimonials = [
  {
    name: "Pavan Nagaraj",
    title: "We are very satisfied with the work MOH...",
    role: "Chief Executive Officer",
    companyLogo: googleLogo,
    text: "We are very satisfied with the work MOH did with our coffee shop logo. Would definitely recommend any of their services!",
    image: manImg,
    rating: 5,
  },
  {
    name: "Arvind Tulsiram",
    title: "Just discovered about them a couple of…",
    role: "Chief Executive Officer",
    companyLogo: googleLogo,
    text: "Just discovered about them a couple of months back through a friend and using their services to manage our social media ads and other services have been really great at it . Kudos to you guys, keep up the good work",
    image: Arvind,
    rating: 5,
  },
  {
    name: "zaxis aggregators",
    title: "Good support",
    role: "Chief Executive Officer",
    companyLogo: googleLogo,
    text: "Good support. Professional in approach, also empathic in understanding client needs. Will strongly recommend Sujay and team.",
    image: manImg,
    rating: 5,
  },
  {
    name: "Anekant Jain",
    title: "Highly recommended",
    role: "Chief Executive Officer",
    companyLogo: googleLogo,
    text: "Manhours offers excellent, reliable services, covering everything from legal and HR to marketing, without the need to maintain separate in-house teams. Their flexible, hourly-based model makes outsourcing easy and cost-effective. Highly recommended for companies looking for quality support across multiple line if work.",
    image: AnekantJain,
    rating: 5,
  },
  {
    name: "Ajay Achpal",
    title: "Absolutely Stellar Experience",
    role: "Chief Executive Officer",
    companyLogo: googleLogo,
    text: "Absolutely stellar experience! Manhours On Hire is a total game-changer for anyone who needs quality work done fast and efficiently. Their team is super responsive, professional, and always goes the extra mile to deliver top-notch results—whether it’s recruiting, accounting, design, or digital marketing, they’ve got you covered.",
    image: AjayApchal,
    rating: 5,
  },
  {
    name: "Niteesh Sood",
    title: "Good value for money, high impact",
    role: "Chief Business Officer",
    companyLogo: googleLogo,
    text: "Sujay & Sathwik have got a great idea, and are able to deliver a high return on investment with their solid selection of people. We had a smooth end to end experience, and have already placed a repeat order. We hope to work with them long term on our requirements.",
    image: niteeshsood,
    rating: 5,
  },
  {
    name: "Dakshayani Mahendra",
    title: "I highly recommend manhours on hire",
    role: "Chief Marketing Officer",
    companyLogo: googleLogo,
    text: "I highly recommend manhours on hire for digital marketing and website development. Their professional team delivered exceptional results, improving our online visibility and conversion rates. Reliable, innovative, and results driven a great partner for any business!",
    image: Dakshayini,
    rating: 5,
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const startX = useRef<number | null>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev < testimonials.length - 1 ? prev + 1 : 0
    );
  };

  const handleDragStart = (clientX: number) => {
    startX.current = clientX;
  };

  const handleDragEnd = (clientX: number) => {
    if (startX.current === null) return;
    const diff = clientX - startX.current;

    if (diff > 50) {
      handlePrev();
    } else if (diff < -50) {
      handleNext();
    }

    startX.current = null;
  };

  // Auto-scroll every 5 seconds, pause if isPaused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const isMobile = window.innerWidth < 768;
  const slideWidth = isMobile ? 100 : 70;

  return (
    <section className="relative z-10 py-16 px-4 bg-white text-center font-[Poppins]">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#903033] mb-5">
        Don't Take Our Word for It
      </h2>
      <p className="text-black text-sm md:text-base max-w-2xl mx-auto mb-10">
        Hear directly from the clients who’ve experienced the difference moh has
        made to their business.
      </p>

      <div
        className="relative max-w-6xl mx-auto overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out select-none"
            style={{
              transform: `translateX(-${activeIndex * slideWidth}%)`,
            }}
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseUp={(e) => handleDragEnd(e.clientX)}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-[70%] px-4"
              >
                <div className="flex flex-col md:flex-row bg-gray-100 rounded-[30px] p-6 md:p-10 w-full shadow-md items-center min-h-[350px]">
                  <div className="relative w-full md:w-[35%] flex justify-center md:justify-start">
                    <div className="absolute top-[16px] -left-[35px] w-[60px] h-[60px] rounded-full bg-white text-[#903033] flex items-center justify-center shadow z-20 text-[24px] border-[6px] border-[#903033]">
                      <FaQuoteLeft />
                    </div>

                    <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] bg-[#903033] rounded-[30px] flex items-end justify-center overflow-visible">
                      <div className="absolute bottom-[10px] right-[-20px] bg-white px-3 py-[2px] rounded-full shadow flex items-center gap-1 text-[#F4B400] text-sm z-20 font-semibold border-[4px] border-[#903033]">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < item.rating
                                ? "text-[#F4B400]"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-[20px] z-10"
                      />
                    </div>
                  </div>

                  <div className="md:w-[65%] text-left mt-6 md:mt-0 md:pl-10 flex flex-col justify-between">
                    <div className="text-center md:text-left">
                      <p className="text-black font-semibold text-base md:text-lg mb-3">
                        {item.title}
                      </p>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                        {item.text}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-right w-full">
                        <p className="text-sm font-semibold text-black">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-[40px] mt-8">
            <button
              onClick={handlePrev}
              className="w-[50px] h-[50px] rounded-full text-[20px] flex items-center justify-center bg-[#C23030] text-white hover:bg-[#F4B400] transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-[50px] h-[50px] rounded-full text-[20px] flex items-center justify-center bg-[#C23030] text-white hover:bg-[#F4B400] transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
