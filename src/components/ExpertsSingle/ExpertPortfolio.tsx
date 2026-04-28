import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Portfolio1 from "@/assets/GoogleIT.png";
import Portfolio2 from "@/assets/GoogleCertification.png";
import Portfolio3 from "@/assets/MicrosoftCertification.png";
import Portfolio4 from "@/assets/UdemyCertification.png";

// Portfolio data
const portfolios = [
  { title: "UX Case Study 1", image: Portfolio1 },
  { title: "UI Case Study 2", image: Portfolio2 },
  { title: "Web App Design 3", image: Portfolio3 },
  { title: "Mobile App Prototype 4", image: Portfolio4 },
  { title: "UX Case Study 5", image: Portfolio1 },
  { title: "UI Case Study 6", image: Portfolio2 },
  { title: "Web App Design 7", image: Portfolio3 },
  { title: "Mobile App Prototype 8", image: Portfolio4 },
];

const ExpertPortfolio = () => {
  return (
    <section className="expert-portfolio bg-black text-white py-16 px-6 md:px-12 font-poppins">
      {/* Title */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 underline">
          Expert Portfolio (8)
        </h2>
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: ".expert-portfolio .custom-next",
            prevEl: ".expert-portfolio .custom-prev",
          }}
          pagination={{
            clickable: true,
            el: ".expert-portfolio .custom-pagination",
            renderBullet: (index, className) =>
              `<span class="${className}">${index + 1}</span>`,
          }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper"
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }, 0);
          }}
        >
          {portfolios.map((port, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-lg shadow-md w-full h-48 flex items-center justify-center">
                  <img
                    src={port.image}
                    alt={port.title}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
                <p className="text-sm font-medium text-center mt-4">
                  {port.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination + Custom Arrows */}
        <div className="flex items-center justify-center mt-8 gap-[10px]">
          {/* <div className="custom-prev custom-arrow">&#10094;</div> */}
          <div className="custom-pagination flex gap-[10px]"></div>
          {/* <div className="custom-next custom-arrow">&#10095;</div> */}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .expert-portfolio .custom-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        .expert-portfolio .swiper-pagination-bullet {
          background: white !important;
          color: black !important;
          font-size: 14px;
          font-weight: 600;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          opacity: 1 !important;
          transition: all 0.3s ease;
        }
        .expert-portfolio .swiper-pagination-bullet-active {
          background: #952502 !important;
          color: white !important;
        }
        .expert-portfolio .custom-arrow {
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          color: white;
          transition: 0.3s;
          user-select: none;
        }
        .expert-portfolio .custom-arrow:hover {
          color: #952502;
        }
      `}</style>
    </section>
  );
};

export default ExpertPortfolio;
