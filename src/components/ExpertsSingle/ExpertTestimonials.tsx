import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";

const testimonials = [
  {
    role: "VP Marketing",
    name: "Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
    rating: 5,
  },
  {
    role: "Product Manager",
    name: "Consectetur Adipiscing Elit",
    review:
      "Aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra. Curabitur tempus urna at turpis condimentum lobortis.",
    rating: 4,
  },
  {
    role: "CEO",
    name: "Adipiscing Elit Nunc",
    review:
      "Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Sed fringilla eros vitae justo cursus.",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="bg-black text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-6">
        {/* Left: Heading + Arrows */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-20 w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold underline underline-offset-4 decoration-white">
            Impact made the Expert
          </h2>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition-colors"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition-colors"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Right: See All Reviews */}
        <a
          href="#"
          className="font-semibold hover:underline text-sm sm:text-base"
        >
          See All Reviews
        </a>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 16 }, // Mobile
          640: { slidesPerView: 1.2, spaceBetween: 20 }, // Small screens
          1024: { slidesPerView: 2, spaceBetween: 24 }, // Tablet/Desktop
          1440: { slidesPerView: 3, spaceBetween: 32 }, // Large screens
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} className="pb-6">
            <div className="border border-gray-400 rounded-2xl p-6 sm:p-8 md:p-10 h-full bg-gray-900">
              {/* Role + Stars */}
              <div className="flex flex-wrap items-center mb-4 text-sm">
                <span className="text-gray-300">{t.role}</span>
                <span className="mx-3 hidden sm:block h-5 border-l border-gray-500"></span>
                <div className="flex">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <span key={idx} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Name */}
              <h3 className="font-bold text-base sm:text-lg mb-3">{t.name}</h3>

              {/* Review */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {t.review}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
